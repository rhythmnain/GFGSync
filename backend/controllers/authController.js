const axios = require("axios");

exports.githubLogin = async (req, res) => {
    const { code } = req.query;
    const client_id = process.env.GITHUB_CLIENT_ID;
    const client_secret = process.env.GITHUB_CLIENT_SECRET;

    try {
        const response = await axios.post("https://github.com/login/oauth/access_token", {
            client_id,
            client_secret,
            code,
            }, { headers: { Accept: "application/json" } }
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to get GitHub access token" });
    }
};