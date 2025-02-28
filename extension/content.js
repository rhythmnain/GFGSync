(() => {
    const fetchSubmissions = () => {
        let submissions = [];
        document.querySelectorAll(".problemrow").forEach(row => {
            const title = row.querySelector(".title").innerText;
            const status = row.querySelector(".status").innerText;
            const time = row.querySelector(".time").innerText;

            submissions.push({ title, status, time });
        });

        chrome.storage.local.set({ submissions }, () => {
            console.log("Submissions saved!");
            // This will be used in the future for more interactions

            console.log("GFGSync Content Script Loaded");


        });
    };

    fetchSubmissions();
})();
