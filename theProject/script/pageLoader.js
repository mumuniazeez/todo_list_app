const showProfile = () => {
    rootEl.style.setProperty("display", "none")
    page2.innerHTML = aboutMe
};

const showMainPage = () => {
    rootEl.style.setProperty("display", "block")
    page2.innerHTML = ""
}
const aboutMe = `
    <div class='profile'>
        <button id='back-btn' onclick='showMainPage()'>Back</button>
        <div class='my-profile'>
            <div class='my-image'>
            <img class='builder-img' src='./images/Mumuni_Azeez.jpg' alt='builder-image'>
            </div>
            <div class='my-info'>
                <h1 class='my-name'>Mumuni Abdul-Azeez</h1>
                <p class='about-me'>
                    I am Mumuni Abdul-Azeez, I am from Nigeria🙏🙏. I am a Website Developer👨‍💻👩‍💻 and a Graphic Designer 🌻🌼🌺. I am long lasting 🗽🗽, 
                    <a target='_blank' href='https://az-codes-portfolio.netlify.app'>Read more....</a>
                    <br>I built this project as a test for skills.
                </p>
            </div>
            <p class='invitation-to-scrimba'>
                Want to learn how to build 'Awesome project like this' then vist:
                '<a href='https://scrimba.com/learn/learnjavascript' target='_blank'>Scrimba Javascript full course</a>'
            </p>
        </div>
    </div>
`
