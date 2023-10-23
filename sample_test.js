const wheel = document.querySelector('.wheel');
const spinButton = document.getElementById('spinButton');

let spinning = false;

spinButton.addEventListener('click', () => {
    if (!spinning) {
        spinning = true;
        let randomDegree = Math.floor(Math.random() * 360) + 1440; // Rotate between 4 to 10 full spins
        let animationDuration = Math.floor(Math.random() * 3) + 4; // Spin duration between 4 to 6 seconds
        wheel.style.transition = `transform ${animationDuration}s ease-out`;
        wheel.style.transform = `rotate(${randomDegree}deg)`;

        // Reset the wheel after the animation
        setTimeout(() => {
            spinning = false;
            wheel.style.transition = 'none';
            wheel.style.transform = 'rotate(0deg)';
        }, animationDuration * 1000);
    }
});
