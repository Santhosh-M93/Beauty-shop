document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
const playButton = document.querySelector('.con');
const video = document.createElement('video');
video.src = "your-video.mp4";
video.id = "myVideo";
video.style.display = "none";
video.controls = true;
document.body.appendChild(video);


playButton.addEventListener('click', () => {
    video.style.display = "block";
    video.play();
    playButton.style.display = "none";
});
const whatWeDoButton = document.querySelector('.in');
whatWeDoButton.addEventListener('click', () => {
    const whatWeDoSection = document.querySelector('.contain');
    if (whatWeDoSection) {
        whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
    }
});
const learnMoreButtons = document.querySelectorAll('.b1, .b2');
learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Learn more clicked");
    });
});
const subscribeButton = document.querySelector('.cribe');
const emailInput = document.querySelector('.email');
subscribeButton.addEventListener('click', () => {
    const email = emailInput.value;
    if (email) {
        console.log("Subscribed email:", email);
        alert("Thank you for subscribing!");
        emailInput.value = "";
    } else {
        alert("Please enter a valid email address.");
    }

});
const images = document.querySelectorAll('.dai, .play');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
    });
    image.addEventListener('mouseout', () => {
    });
});
const eventCards = document.querySelectorAll('.eve1, .eve2');
eventCards.forEach(card => {
    card.addEventListener('mouseover', () => {
    });
    card.addEventListener('mouseout', () => {
    });
});
