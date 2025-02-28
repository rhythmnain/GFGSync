chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "authenticate_github") {
        chrome.identity.launchWebAuthFlow(
            {
                url: "https://github.com/login/oauth/authorize?client_id=Ov23liYieUuYM8lBrFcc",
                interactive: true
            },
            function (redirectUrl) {
                console.log("GitHub Auth Success:", redirectUrl);
            }
        );
    } else if (request.action === "sync_gfg_problems") {
        fetch("https://www.geeksforgeeks.org/api/user/submissions")
            .then(response => response.json())
            .then(data => {
                let easy = data.filter(p => p.level === "Easy").length;
                let medium = data.filter(p => p.level === "Medium").length;
                let hard = data.filter(p => p.level === "Hard").length;
                let total = easy + medium + hard;

                chrome.storage.local.set({ easy, medium, hard, totalSolved: total });
            })
            .catch(error => console.error("Error fetching GFG data:", error));
    }
});
