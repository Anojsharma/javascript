 const clock = document.getElementById("clock");

    function showTime() {
      const now = new Date();

      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Convert to 12-hour format
      const period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;

      // Add zero before single digits
      hours = String(hours).padStart(2, "0");
      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");

      clock.textContent =
        `${hours}:${minutes}:${seconds} ${period}`;
    }

    showTime();
    setInterval(showTime, 1000);