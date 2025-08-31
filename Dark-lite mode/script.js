const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        toggleBtn.textContent = "Light Mode ☀️";
    } else {
        body.classList.replace("dark", "light");
        toggleBtn.textContent = "Dark Mode🌙";
    }
});
