class BackgroundMagicCircle extends HTMLElement {
  constructor() {
    super();
    this.render = this.render.bind(this);
    // Import CSS stylesheet
    this._importStyles();
  }

  _importStyles() {
    // Check if component stylesheet is already loaded
    const existingLink = document.querySelector('link[href*="background-magiccircle.css"]');
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "./components/background-magiccircle.css";
      document.head.appendChild(link);
    }
  }

  connectedCallback() {
    try {
      this.innerHTML = this.render();
    } catch (error) {
      console.error('Castle component render error:', error);
    }
  }
  render() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1282 1282" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <g>
          <image id="balance-wheel" href="./components/PNGs/magiccircle_9.png" x="24" y="20" preserveAspectRatio="xMidYMid meet" transform-origin="center" />
          <image id="board" href="./components/PNGs/magiccircle_8.png" x="104" y="100" preserveAspectRatio="xMidYMid meet" transform-origin="center" />
          <image id="large-dots" href="./components/PNGs/magiccircle_4.png" x="0" y="0" preserveAspectRatio="xMidYMid meet" transform-origin="center" />
          <image id="small-dots" href="./components/PNGs/magiccircle_3.png" x="224" y="224" preserveAspectRatio="xMidYMid meet" transform-origin="center" />
          <image id="circle-strip" href="./components/PNGs/magiccircle_5.png" x="141" y="141" preserveAspectRatio="xMidYMid meet" transform-origin="center" />
          <image id="tick-dots" href="./components/PNGs/magiccircle_7.png" x="216" y="216" preserveAspectRatio="xMidYMid meet" transform-origin="center" />
          <image id="medium-dots" href="./components/PNGs/magiccircle_6.png" x="232" y="232" preserveAspectRatio="xMidYMid meet" transform-origin="center" />
          <image id="tick-marker" href="./components/PNGs/magiccircle_2.png" x="204" y="200" preserveAspectRatio="xMidYMid meet" transform-origin="center" />
          <image id="center-star" href="./components/PNGs/magiccircle_1.png" x="444" y="440" preserveAspectRatio="xMidYMid meet" transform-origin="center" />
          <image id="pointer" href="./components/PNGs/magiccircle_10.png" x="104" y="100" preserveAspectRatio="xMidYMid meet" transform-origin="center" />
        </g>
      </svg>
    `;
  }
}

customElements.define("background-magiccircle", BackgroundMagicCircle);
