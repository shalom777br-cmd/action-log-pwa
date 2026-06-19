function saveLog() {
  const input = document.getElementById("textInput");
  const logList = document.getElementById("logList");

  const text = input.value;
  if (!text) return;

  const div = document.createElement("div");
  div.textContent = text;

  logList.prepend(div);

  input.value = "";
}
