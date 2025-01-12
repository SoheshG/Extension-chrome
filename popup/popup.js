document.addEventListener("DOMContentLoaded", () => {
  const reportDiv = document.getElementById("report");

  chrome.storage.local.get("siteTime", (data) => {
    const siteTime = data.siteTime || {};
    reportDiv.innerHTML = Object.entries(siteTime)
      .map(
        ([site, time]) =>
          `<p>${site}: ${Math.floor(time / 60)} minutes ${time % 60} seconds</p>`
      )
      .join("");
  });
});
