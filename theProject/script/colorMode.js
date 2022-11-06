// DOM is been manipulation in /*DOM.js*/
const changeToDarkMood = () => {
    linkEl.setAttribute('href', './images/darkmoodLogo.png')              
    bodyEl.setAttribute("data-theme", "dark")
    darkModeBtn.style.display = "none"
    lightModeBtn.style.display = "block"
};
const changeToLightMood = () => {
	linkEl.setAttribute('href', './images/lightmoodLogo.png')
    bodyEl.removeAttribute("data-theme")
    darkModeBtn.style.display = "block"
    lightModeBtn.style.display = "none"
};
!lightColor ? changeToLightMood(): null
const checkLastColorMood = () => {
    darkColor ? changeToDarkMood(): null
};
darkModeBtn.addEventListener("click", () => {
    localStorage.setItem("darkColor", "Changed color to dark mood.")
    changeToDarkMood();
    result(`${localStorage.darkColor}  <button onclick="result('')" id="okay-btn">OK</button>`)
});
lightModeBtn.addEventListener("click", () => {
    localStorage.removeItem("darkColor");
    changeToLightMood();
    result(`Changed color to light mood.  <button onclick="result('')" id="okay-btn">OK</button>`)               
});
checkLastColorMood();