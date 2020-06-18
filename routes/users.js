
const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        return res.status(200).json({ success: true, message: 'all users sent', users: [1, 2, 3] });
    })
    .post((req, res) => {
        let content = req.body;

        if (typeof content.id === 'undefined') {
            return res.status(400).json({ success: true, message: 'Bad request' });
        }

        return res.status(200).json({ success: true, message: 'user created' });
    });

router.route('/:id')
    .get((req, res) => {
        if (req.params.id !== '1') {
            return res.status(400).json({ success: false, message: 'Bad request' });
        }

        return res.status(200).json({ success: true, message: 'user found' });
    });

/**
 * Add a user
 */
router

module.exports = router;