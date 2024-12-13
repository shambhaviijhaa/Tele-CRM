const express = require('express');
const router = express.Router();
const callController = require('../controllers/callController');

router.get('/', callController.getCalls);
router.post('/', callController.createCall);
const User = require('../models/User');
const Call = require('../models/Call'); // Adjust path as necessary

// Fetch all calls
router.get('/api/calls', async (req, res) => {
    try {
        const calls = await Call.find().populate('userId leadId');
        res.json(calls);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch calls' });
    }
});

router.get('/summary', async (req, res) => {
    try {
        // Fetch total number of calls
        const totalCalls = await Call.countDocuments();

        // Calculate average call duration
        const avgDurationResult = await Call.aggregate([
            { $group: { _id: null, average: { $avg: "$callDuration" } } }
        ]);
        const avgDuration = avgDurationResult.length ? avgDurationResult[0].average : 0;

        // Find the top performer by number of calls
        const topPerformerResult = await Call.aggregate([
            { $group: { _id: "$userId", callCount: { $sum: 1 } } },
            { $sort: { callCount: -1 } },
            { $limit: 1 }
        ]);

        let topPerformerName = "N/A";
        if (topPerformerResult.length) {
            // Populate the userId to get the name
            const topPerformer = await User.findById(topPerformerResult[0]._id);
            topPerformerName = topPerformer ? topPerformer.name : "N/A";
        }

        res.json({
            totalCalls,
            avgDuration,
            topPerformer: topPerformerName
        });
    } catch (error) {
        console.error("Error in /summary endpoint:", error);
        res.status(500).json({ error: "Failed to fetch summary" });
    }
});
// Leaderboard API - Get Top 5 Call Performers
router.get('/leaderboard', async (req, res) => {
    try {
        // Aggregate to get the number of calls made by each user
        const leaderboard = await Call.aggregate([
            {
                $group: {
                    _id: "$userId",  // Group by userId
                    totalCalls: { $sum: 1 },  // Count the total number of calls per user
                }
            },
            { $sort: { totalCalls: -1 } },  // Sort by total calls (descending)
            { $limit: 5 }  // Limit to top 5 performers
        ]);

        // Get the names of the top performers by populating userId
        const leaderboardWithNames = await Promise.all(
            leaderboard.map(async (entry) => {
                const user = await User.findById(entry._id);  // Get the user's name
                return {
                    rank: leaderboard.indexOf(entry) + 1,
                    name: user ? user.name : 'N/A',  // Handle if user is not found
                    totalCalls: entry.totalCalls,
                };
            })
        );

        res.json(leaderboardWithNames);  // Return leaderboard data
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        res.status(500).json({ error: "Failed to fetch leaderboard data" });
    }
});

router.post('/api/calls', async (req, res) => {
    try {
        const newCall = new Call(req.body);
        const savedCall = await newCall.save();
        res.status(201).json(savedCall);
    } catch (error) {
        res.status(400).json({ error: 'Error saving call' });
    }
});

module.exports = router;