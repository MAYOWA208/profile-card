const timeEl = document.getElementById("time");
if (timeEl) {
  function updateTime() {
    timeEl.textContent = Date.now();
  }
  setInterval(updateTime, 1000);
  updateTime();
}

