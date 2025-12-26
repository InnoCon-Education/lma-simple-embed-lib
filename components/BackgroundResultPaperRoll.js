class BackgroundResultPaperRoll extends HTMLElement {
  static get observedAttributes() {
    return ['upper', 'lower']; // List the attributes to observe
  }

  constructor() {
    super();
    this.render = this.render.bind(this);
    // generate a unique id for the linear gradient element to avoid id collisions
    this._linearGradientId = `linearGradient-${Math.random().toString(36).substr(2, 9)}`;
    // Import CSS stylesheet
    this._importStyles();
  }

  _importStyles() {
    // Check if component stylesheet is already loaded
    const existingLink = document.querySelector('link[href*="background-resultpaperroll.css"]');
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "./components/background-resultpaperroll.css";
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
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 530 75">
        <defs>
          <style>
            .cls-1 {
              fill: none;
              stroke: #704134;
              stroke-linecap: round;
              stroke-miterlimit: 10;
              stroke-width: 30px;
            }

            .cls-2 {
              fill: url(#${this._linearGradientId});
            }

          </style>
          <linearGradient id="${this._linearGradientId}" data-name="${this._linearGradientId}" x1="265" y1="0" x2="265" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff"/>
            <stop offset=".25" stop-color="#fff"/>
            <stop offset=".25" stop-color="#ffedca"/>
            <stop offset=".5" stop-color="#ffedca"/>
            <stop offset=".75" stop-color="#ffedca"/>
            <stop offset=".75" stop-color="#bdb096"/>
            <stop offset="1" stop-color="#bdb096"/>
          </linearGradient>
        </defs>
        <g>
          <line class="cls-1" x1="15" y1="37.5" x2="515" y2="37.5"/>
          <path class="cls-2" d="M490,75H40C33.45,50.43,33.45,24.57,40,0h0s450,0,450,0h0c6.55,24.57,6.55,50.43,0,75h0Z"/>
        </g>
      </svg>
    `;
  }
}

customElements.define("background-resultpaperroll", BackgroundResultPaperRoll);
