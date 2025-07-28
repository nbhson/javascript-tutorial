document.addEventListener('DOMContentLoaded', function() {
    const svg = document.getElementById('barChart');
    const data = [30, 80, 45, 60, 20, 35, 50];
    const lineData = [40, 90, 55, 70, 30, 45, 60];
    const width = 600;
    const height = 400;
    const barWidth = width / data.length;

    // Scaling factor
    const maxDataValue = Math.max(...data);
    const scaleFactor = height / maxDataValue;

    // Draw Columns
    data.forEach((value, index) => {
        const barHeight = value * scaleFactor;
        const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttribute('x', index * barWidth);
        bar.setAttribute('y', height - barHeight);
        bar.setAttribute('width', barWidth - 5); // Adding a small margin between bars
        bar.setAttribute('height', barHeight);
        bar.setAttribute('fill', 'blue');
        svg.appendChild(bar);
    });

    // Add labels
    data.forEach((value, index) => {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', index * barWidth + barWidth / 2);
        text.setAttribute('y', height - (value * scaleFactor) - 5);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', 'black');
        text.textContent = value;
        svg.appendChild(text);
    });


    // Draw polyline to connect lineData points
    let points = '';
    lineData.forEach((value, index) => {
        const x = index * barWidth + (barWidth - 5) / 2;
        const y = height - (value * scaleFactor);
        points += `${x},${y} `;
    });

    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttribute('points', points.trim());
    polyline.setAttribute('fill', 'none');
    polyline.setAttribute('stroke', 'red');
    polyline.setAttribute('stroke-width', '2');
    svg.appendChild(polyline);
});
