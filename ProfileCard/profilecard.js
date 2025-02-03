function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('currentTimeUTC').textContent = `Current Time (UTC): ${utcTime}`;
}


setInterval(updateUTCTime, 1000);


updateUTCTime();