class BackgroundCastle extends HTMLElement {
  constructor() {
    super();
    this.render = this.render.bind(this);
    // generate a unique id for the mask element to avoid id collisions
    this._maskId = `mask-${Math.random().toString(36).substr(2, 9)}`;
    // Import CSS stylesheet
    this._importStyles();
  }

  _importStyles() {
    // Check if component stylesheet is already loaded
    const existingLink = document.querySelector('link[href*="castle.css"]');
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "./components/background-castle.css";
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
      <svg xmlns="http://www.w3.org/2000/svg" id="_layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 1400 1425" preserveAspectRatio="xMidYMid meet" data-app="Xyris">
        <path
          id="motion-path-6Nk5i9qqjZ7sGWZB8LszJ7"
          d="M 230.00003051757812 200 C 218.36778051757812 200 219.41153051757813 293.385 220.87503051757812 325 C 222.33853051757812 356.615 227.71878051757813 418.75 230.00003051757812 450 C 232.28128051757812 481.25 237.66153051757812 543.385 239.12503051757812 575 C 240.58853051757812 606.615 241.63228051757812 700 230.00003051757812 700 C 218.36803051757812 700 219.41153051757813 606.615 220.87503051757812 575 C 222.33853051757812 543.385 227.71878051757813 481.25 230.00003051757812 450 C 232.28128051757812 418.75 237.66153051757812 356.615 239.12503051757812 325 C 240.58853051757812 293.385 241.63228051757812 200 230.00003051757812 200 Z"
          fill="none"
          stroke="transparent"
          stroke-width="1"
          pathLength="1"
        />
        <path
          id="motion-path-6A2rsKJQzKyHNf6jEj7wsD"
          d="M 1209.9998779296875 650 C 1198.3673779296875 650 1199.4123779296875 743.385 1200.8748779296875 775 C 1202.3373779296874 806.615 1207.7198779296874 868.75 1209.9998779296875 900 C 1212.2808779296874 931.25 1217.6623779296874 993.385 1219.1248779296875 1025 C 1220.5873779296874 1056.615 1221.6323779296874 1150 1209.9998779296875 1150 C 1198.3673779296875 1150 1199.4123779296875 1056.615 1200.8748779296875 1025 C 1202.3373779296874 993.385 1207.7198779296874 931.25 1209.9998779296875 900 C 1212.2808779296874 868.75 1217.6623779296874 806.615 1219.1248779296875 775 C 1220.5873779296874 743.385 1221.6323779296874 650 1209.9998779296875 650 Z"
          fill="none"
          stroke="transparent"
          stroke-width="1"
          pathLength="1"
        />
        <g id="background-castle-main-group" transform-origin="center" transform="" style="transform-box: fill-box;">
          <image href="./components/PNGs/asset_17.png" x="279.7375" y="808.7411" preserveAspectRatio="xMidYMid meet" />
          <image href="./components/PNGs/asset_16.png" x="483.6875" y="234.8045" preserveAspectRatio="xMidYMid meet" />
          <image href="./components/PNGs/asset_15.png" x="439.6375" y="186.6795" preserveAspectRatio="xMidYMid meet" />
          <image href="./components/PNGs/asset_14.png" x="341.37575" y="670.979975" preserveAspectRatio="xMidYMid meet" />
          <image href="./components/PNGs/asset_13.png" x="405.9125" y="478.78" preserveAspectRatio="xMidYMid meet" />
          <image href="./components/PNGs/asset_12.png" x="539.7375" y="86.2795" preserveAspectRatio="xMidYMid meet" />
          <image href="./components/PNGs/asset_11.png" x="383.03105" y="296.055" preserveAspectRatio="xMidYMid meet" />
          <image id="generated-object-6" href="./components/PNGs/asset_10.png" x="837.5" y="350" preserveAspectRatio="xMidYMid meet" transform-origin="center" transform="" style="transform-box: fill-box;" />
          <image id="generated-object-7" href="./components/PNGs/asset_9.png" x="1002.5" y="412.5" preserveAspectRatio="xMidYMid meet" transform-origin="center" transform="" style="transform-box: fill-box;" />
          <image href="./components/PNGs/asset_8.png" x="936.361325" y="343.275575" preserveAspectRatio="xMidYMid meet" />
          <image href="./components/PNGs/asset_7.png" x="757.4875" y="406.305" preserveAspectRatio="xMidYMid meet" />
          <image href="./components/PNGs/asset_6.png" x="922.7045" y="841.68" preserveAspectRatio="xMidYMid meet" />
          <image href="./components/PNGs/asset_5.png" x="419.36475" y="775.554075" preserveAspectRatio="xMidYMid meet" />
          <image id="generated-object-12" href="./components/PNGs/asset_4.png" x="606.335925" y="911.32545" preserveAspectRatio="xMidYMid meet" transform-origin="center" transform="" style="transform-box: fill-box;" />
          <image id="generated-object-13" href="./components/PNGs/asset_3.png" x="471.8326" y="1033.447825" preserveAspectRatio="xMidYMid meet" transform-origin="center" transform="" style="transform-box: fill-box;" />
        </g>
        <image id="background-castle-motion-group-1" href="./components/PNGs/asset_2.png" preserveAspectRatio="xMidYMid meet" transform-origin="center" style="transform-box: fill-box;" />
        <image id="background-castle-motion-group-2" href="./components/PNGs/asset_1.png" preserveAspectRatio="xMidYMid meet" transform-origin="center" style="transform-box: fill-box;" />
      </g>
    </svg>
    `;
  }
}

customElements.define("background-castle", BackgroundCastle);
