class CharacterLEDChan extends HTMLElement {
  constructor() {
    super();
    this.render = this.render.bind(this);
    // generate a unique id for the mask element to avoid id collisions
    this._maskId = `mask-${Math.random().toString(36).substr(2, 9)}`;
    // Import CSS stylesheet
    this._importStyles();
  }

  _importStyles() {
    // Import common styles first
    const commonLink = document.querySelector('link[href*="character-common.css"]');
    if (!commonLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './components/character-common.css';
      document.head.appendChild(link);
    }

    // Check if component stylesheet is already loaded
    const existingLink = document.querySelector('link[href*="character-ledchan.css"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './components/character-ledchan.css';
      document.head.appendChild(link);
    }

    
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }
  render() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 1280 1500" preserveAspectRatio="xMidYMid meet" data-app="Xyris" class="character">
        <defs>
        </defs>
        <g id="main-group" transform-origin="center" style="transform-box: fill-box;">
          <rect id="rect1" x="643.734" y="1184.25" width="64" height="272" rx="8" ry="8" fill="#fff" transform-origin="top" style="transform-box: fill-box;">
          </rect>
          <rect id="rect2" x="796.8629" y="1184.25" width="64" height="272" rx="8" ry="8" fill="#fff" transform-origin="top" style="transform-box: fill-box;">
          </rect>
          <g id="body-group" transform-origin="center" style="transform-box: fill-box;">
            <path d="M 955.734 1159.53 L 955.734 887.538 C 955.734 766.035 857.237 667.538 735.734 667.538 C 614.231 667.538 515.734 766.035 515.734 887.538 L 515.734 1159.53 L 483.734 1159.53 L 483.734 1223.53 L 987.734 1223.53 L 987.734 1159.53 L 955.734 1159.53 Z" fill="currentColor">
            </path>
            <g style="mix-blend-mode: soft-light; ">
              <path d="M 570.734 942.538 C 570.734 821.035 669.231 722.538 790.734 722.538 C 802.148 722.538 813.359 723.408 824.305 725.084 C 798 710.711 767.822 702.538 735.734 702.538 C 633.561 702.538 550.734 785.365 550.734 887.538 L 550.734 1072.53 L 570.734 1072.53 L 570.734 942.538 Z" fill="#fff">
              </path>
            </g>
          </g>
          <g mask="url(#${this._maskId})" transform-origin="">
            <g>
              <g>
                <path d="M 739.734 1148.25 C 715.472 1148.25 695.734 1128.51 695.734 1104.25 C 695.734 1079.99 715.472 1060.25 739.734 1060.25 C 763.996 1060.25 783.734 1079.98 783.734 1104.25 C 783.734 1128.52 763.996 1148.25 739.734 1148.25 Z" fill="#231815">
                </path>
                <path d="M 739.734 1072.25 C 757.407 1072.25 771.734 1086.57 771.734 1104.25 C 771.734 1121.93 757.407 1136.25 739.734 1136.25 C 722.061 1136.25 707.734 1121.92 707.734 1104.25 C 707.734 1086.58 722.061 1072.25 739.734 1072.25 M 739.734 1048.25 C 708.856 1048.25 683.734 1073.37 683.734 1104.25 C 683.734 1135.13 708.856 1160.25 739.734 1160.25 C 770.612 1160.25 795.734 1135.12 795.734 1104.25 C 795.734 1073.38 770.612 1048.25 739.734 1048.25 L 739.734 1048.25 Z" fill="#fff">
                </path>
              </g>
              <g>
                <path d="M 875.734 1148.25 C 851.472 1148.25 831.734 1128.51 831.734 1104.25 C 831.734 1079.99 851.472 1060.25 875.734 1060.25 C 899.996 1060.25 919.734 1079.98 919.734 1104.25 C 919.734 1128.52 899.996 1148.25 875.734 1148.25 Z" fill="#231815">
                </path>
                <path d="M 875.734 1072.25 C 893.407 1072.25 907.734 1086.57 907.734 1104.25 C 907.734 1121.93 893.407 1136.25 875.734 1136.25 C 858.061 1136.25 843.734 1121.92 843.734 1104.25 C 843.734 1086.58 858.061 1072.25 875.734 1072.25 M 875.734 1048.25 C 844.856 1048.25 819.734 1073.37 819.734 1104.25 C 819.734 1135.13 844.856 1160.25 875.734 1160.25 C 906.612 1160.25 931.734 1135.12 931.734 1104.25 C 931.734 1073.38 906.612 1048.25 875.734 1048.25 L 875.734 1048.25 Z" fill="#fff">
                </path>
              </g>
            </g>
            <mask id="${this._maskId}">
              <g transform-origin="center" style="transform-box: fill-box;">
                <rect fill="rgb(255, 255, 255)" stroke="#000000" stroke-width="0" x="683.7340087890625" y="1048.25" width="248" height="112">
                </rect>
                <g id="mask-group" transform-origin="center" style="transform-box: fill-box;">
                  <ellipse fill="rgb(0, 0, 0)" stroke="#000000" stroke-width="0" cx="879.7339695448876" cy="979" rx="60" ry="60">
                  </ellipse>
                  <ellipse fill="rgb(0, 0, 0)" stroke="#000000" stroke-width="0" cx="739.734" cy="979" rx="60" ry="60">
                  </ellipse>
                </g>
              </g>
            </mask>
          </g>
        </g>
      </svg>
    `;
  }

}

customElements.define('character-ledchan', CharacterLEDChan);