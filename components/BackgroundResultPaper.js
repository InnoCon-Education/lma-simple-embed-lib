class BackgroundResultPaper extends HTMLElement {
  constructor() {
    super();
    this.render = this.render.bind(this);
    // Import CSS stylesheet
    this._importStyles();
  }

  _importStyles() {
    // Check if component stylesheet is already loaded
    const existingLink = document.querySelector('link[href*="background-resultpaper.css"]');
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "./components/background-resultpaper.css";
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
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 530 525">
        <defs>
          <style>
            .cls-5 {
              fill: #ffedca;
            }
          </style>
        </defs>
        <g>
          <rect class="cls-5" x="77.5" y="37.5" width="375" height="450"/>
        </g>
      </svg>
    `;
  }
}

customElements.define("background-resultpaper", BackgroundResultPaper);
