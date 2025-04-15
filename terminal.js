document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal");
  const output = (text) => {
    const line = document.createElement("div");
    line.textContent = text;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
  };
  output("ERROR19450302 TERMINAL ACTIVE. Type 'HELP'.");
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = prompt(">").toUpperCase();
      if (cmd === "HELP") {
        output("Available: LOGS, RECOVER, ACCESS, GLITCH, FOOTAGE, WITNESS");
      } else if (cmd === "FOOTAGE" || cmd === "WITNESS") {
        output("Recovered footage found… loading...");
        setTimeout(() => { window.location.href = "footage.html"; }, 2000);
      } else {
        output("Unknown command.");
      }
    }
  });
});
