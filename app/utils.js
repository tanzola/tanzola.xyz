export function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    /* From https://stackblitz.com/edit/svg-star-generator?file=svgutils.js */
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

export function star(centerX, centerY, points, innerRadius, outerRadius) {
    /* From https://stackblitz.com/edit/svg-star-generator?file=svgutils.js */
    const degreeIncrement = 360 / (points * 2);
    const d = new Array(points * 2).fill('foo').map((p, i) => {
        let radius = i % 2 === 0 ? outerRadius : innerRadius;
        let degrees = degreeIncrement * i;
        const point = polarToCartesian(centerX, centerY, radius, degrees);
        return `${point.x},${point.y}`;
    });
    return `M${d}Z`;
}