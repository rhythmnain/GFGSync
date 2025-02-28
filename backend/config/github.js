const axios = require("axios");

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

/**
 * Exchange GitHub Authorization Code for an Access Token
 * @param {string} code - The GitHub OAuth Authorization Code
 */
async function getGitHubAccessToken(code) {
    try {
        const response = await axios.post(
            "https://github.com/login/oauth/access_token",
            {
                client_id: GITHUB_CLIENT_ID,
                client_secret: GITHUB_CLIENT_SECRET,
                code: code,
            },
            {
                headers: { Accept: "application/json" },
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error("Error fetching GitHub access token:", error);
        throw error;
    }
}

/**
 * Get GitHub User Data
 * @param {string} accessToken - GitHub Access Token
 */
async function getGitHubUser(accessToken) {
    try {
        const response = await axios.get("https://api.github.com/user", {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub user data:", error);
        throw error;
    }
}

module.exports = {
    getGitHubAccessToken,
    getGitHubUser,
};
