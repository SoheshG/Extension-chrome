document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("settings-form");
    const limitInput = document.getElementById("limit");
  
    chrome.storage.local.get("timeLimit", (data) => {
      limitInput.value = data.timeLimit || 30; // Default limit: 30 minutes
    });
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const timeLimit = parseInt(limitInput.value, 10);
      chrome.storage.local.set({ timeLimit });
      alert("Time limit saved!");
    });
  });
  