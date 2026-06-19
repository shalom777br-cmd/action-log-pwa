let logs = JSON.parse(localStorage.getItem(“logs”) || “[]”);

function saveLogFromInput() {
const input = document.getElementById(“textInput”);
const text = input.value.trim();

if (!text) return;

logs.unshift({
text: text,
time: new Date().toLocaleString(“ja-JP”)
});

localStorage.setItem(
“logs”,
JSON.stringify(logs)
);

input.value = “”;

renderLogs();
}

function renderLogs() {
const list =
document.getElementById(“logList”);

list.innerHTML = “”;

logs.forEach(log => {
const div =
document.createElement(“div”);

div.className = "log";
div.innerHTML = `
  <div>${log.text}</div>
  <div class="time">${log.time}</div>
`;
list.appendChild(div);

});
}

function startVoice() {
const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if (!SpeechRecognition) {
alert(“音声入力に対応していません”);
return;
}

const recognition =
new SpeechRecognition();

recognition.lang = “ja-JP”;

recognition.onresult = event => {
document.getElementById(“textInput”).value =
event.results[0][0].transcript;
};

recognition.start();
}

renderLogs();
