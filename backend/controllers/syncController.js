const axios = require("axios");

exports.syncSubmissions = async (req, res) => {
    const { submissions, repo, token } = req.body;

    try {
        for (let sub of submissions) {
            const filePath = `${sub.difficulty}/${sub.title}.txt`;
            const content = Buffer.from(sub.code).toString("base64");

            await axios.put(
                `https://api.github.com/repos/your_username/${repo}/contents/${filePath}`,
                {
                    message: "Added solution",
                    content,
                },
                {
                    headers: { Authorization: `token ${token}` }
                }
            );
        }
        res.json({ message: "Synced Successfully!" });
    } catch (error) {
        res.status(500).json({ error: "GitHub Sync Failed" });
    }
};
