class BackgroundBedroom extends HTMLElement {
  constructor() {
    super();
    this.render = this.render.bind(this);
    // generate a unique id for the mask element to avoid id collisions
    this._maskId = `mask-${Math.random().toString(36).substr(2, 9)}`;
    // Import CSS stylesheet
    // this._importStyles();
  }

  // _importStyles() {
  //   // Check if component stylesheet is already loaded
  //   const existingLink = document.querySelector('link[href*="bedroom.css"]');
  //   if (!existingLink) {
  //     const link = document.createElement("link");
  //     link.rel = "stylesheet";
  //     link.href = "./components/background-bedroom.css";
  //     document.head.appendChild(link);
  //   }
  // }

  connectedCallback() {
    try {
      this.innerHTML = this.render();
    } catch (error) {
      console.error('Castle component render error:', error);
    }
  }
  render() {
    return `
      <img src="./components/PNGs/bedroom.png" width="100%" height="auto">
    `;
  }
}

customElements.define("background-bedroom", BackgroundBedroom);
