export function pick() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const lineX = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const lineY = document.createElementNS("http://www.w3.org/2000/svg", "line");

    lineX.setAttribute("id", "axisX");
    lineY.setAttribute("id", "axisY");
    lineX.setAttribute("y1", 0);
    lineX.setAttribute("y2", "100%");
    lineY.setAttribute("x1", 0);
    lineY.setAttribute("x2", "100%");

    svg.appendChild(lineX);
    svg.appendChild(lineY);
    document.body.appendChild(svg);

    const hslDiv = document.createElement("div");
    const hueDiv = document.createElement("div");
    const luminosityDiv = document.createElement("div");

    hslDiv.className = "hsl";
    hueDiv.className = "hue text";
    luminosityDiv.className = "luminosity text";

    document.body.appendChild(hslDiv);
    document.body.appendChild(hueDiv);
    document.body.appendChild(luminosityDiv);

    document.addEventListener("mousemove", (event) => {
        const hue = Math.round((event.clientX / window.innerWidth) * 360);
        const luminosity = Math.round((1 - event.clientY / window.innerHeight) * 100);

        const hslColor = `hsl(${hue}, 50%, ${luminosity}%)`;

        document.body.style.background = hslColor;

        hslDiv.textContent = hslColor;
        hueDiv.textContent = `hue\n${hue}`;
        luminosityDiv.textContent = `luminosity\n${luminosity}`;

        lineX.setAttribute("x1", event.clientX);
        lineX.setAttribute("x2", event.clientX);
        lineY.setAttribute("y1", event.clientY);
        lineY.setAttribute("y2", event.clientY);
    });

    document.addEventListener("click", () => {
        const hslValue = hslDiv.textContent;
        navigator.clipboard.writeText(hslValue)
            .then(() => console.log("HSL value copied to clipboard"))
            .catch(err => console.error("Failed to copy HSL value: ", err));
    });
}