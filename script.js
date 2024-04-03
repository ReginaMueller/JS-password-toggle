const inpt = document.getElementById("inpt");
const btn = document.getElementById("btn");

let isVisible = false;

function render() {
  if (isVisible) {
    inpt.setAttribute("type", "text");
    btn.textContent = "Hide Password";
  } else {
    inpt.setAttribute("type", "password");
    btn.textContent = "Show Password";
  }
}

render();

btn.addEventListener("click", () => {
  isVisible = !isVisible;
  render();
});
