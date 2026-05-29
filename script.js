const targetDate = new Date("2026-07-31T23:59:59-01:00");

const parts = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  status: document.getElementById("status"),
};

function format(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    parts.days.textContent = "00";
    parts.hours.textContent = "00";
    parts.minutes.textContent = "00";
    parts.seconds.textContent = "00";
    parts.status.textContent = "Prazo atingido";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  parts.days.textContent = format(days);
  parts.hours.textContent = format(hours);
  parts.minutes.textContent = format(minutes);
  parts.seconds.textContent = format(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
