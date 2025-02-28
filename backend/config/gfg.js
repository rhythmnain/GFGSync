const axios = require("axios");

/**
 * Fetch User's GFG Submissions
 * @param {string} username - GFG Username
 */
async function getGFGSubmissions(username) {
    try {
        const response = await axios.get(
            `https://www.geeksforgeeks.org/user/${username}/submissions/`
        );
        return parseGFGSubmissions(response.data);
    } catch (error) {
        console.error("Error fetching GFG submissions:", error);
        throw error;
    }
}

/**
 * Parse GFG Submissions (Extract Easy/Medium/Hard)
 * @param {string} html - GFG Profile HTML
 */
function parseGFGSubmissions(html) {
    // Dummy Implementation (Use Cheerio for real parsing)
    return {
        easy: 20, // Replace with actual count
        medium: 15,
        hard: 5,
        total: 40,
    };
}

module.exports = {
    getGFGSubmissions,
};
