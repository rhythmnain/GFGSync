document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("authGithub").addEventListener("click", function () {
        chrome.runtime.sendMessage({ action: "authenticate_github" });
    });

    document.getElementById("syncNow").addEventListener("click", function () {
        chrome.runtime.sendMessage({ action: "sync_gfg_problems" });
    });

    chrome.storage.local.get(["totalSolved", "easy", "medium", "hard"], function (data) {
        document.getElementById("totalSolved").innerText = data.totalSolved || 0;
        document.getElementById("easySolved").innerText = data.easy || 0;
        document.getElementById("mediumSolved").innerText = data.medium || 0;
        document.getElementById("hardSolved").innerText = data.hard || 0;
    });
});
