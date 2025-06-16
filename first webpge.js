// script.js
console.log("Satellite launched!");

window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});
document.querySelectorAll("section").forEach(sec => {
  sec.addEventListener('click', function () {
    alert(`You clicked on ${sec.id}`);
  });
});
// Add a button to launch a satellite
const launchButton = document.createElement("button");
launchButton.textContent = "Launch Satellite";
launchButton.addEventListener("click", function () {
  alert("Satellite launched successfully!");
}); 
document.body.appendChild(launchButton);
// Add a button to change the background color    
const colorButton = document.createElement("button");
colorButton.textContent = "Change Background Color";   
colorButton.addEventListener("click", function () {
  document.body.style.backgroundColor = 
    `hsl(${Math.random() * 360}, 100%, 50%)`;
});
