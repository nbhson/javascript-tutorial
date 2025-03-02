document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    let x = 50;
    const y = canvas.height / 2;
    const radius = 20;
    const speed = 2;

    function drawCircle() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false); // Draw the circle
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }

    function update() {
        x += speed;
        if (x - radius > canvas.width) { // Reset circle to the left side
            x = -radius;
        }
    }

    function animate() {
        drawCircle();
        update();
        requestAnimationFrame(animate);
    }

    animate();
});