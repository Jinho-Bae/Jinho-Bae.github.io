import "./styles.css";

function showToday() {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  const today = new Date().toLocaleDateString("en-US", options);

  const clockElem = document.querySelector("#clock");

  clockElem.innerHTML = today;
}

showToday();

setInterval(showToday, 1000);
