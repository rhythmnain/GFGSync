const axios = require("axios");

exports.fetchSubmissions = async (req, res) => {
    try {
        const username = req.params.username;
        const response = await axios.get(`https://auth.geeksforgeeks.org/user/${username}/submissions`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch submissions" });
    }
};