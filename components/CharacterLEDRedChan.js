class CharacterLEDRedChan extends HTMLElement {
  constructor() {
    super();
    this.render = this.render.bind(this);
    // generate unique ids for mask elements to avoid id collisions
    this._maskId = `mask-${Math.random().toString(36).substr(2, 9)}`;
    this._maskId2 = `mask-2-${Math.random().toString(36).substr(2, 9)}`;
    this._maskId3 = `mask-3-${Math.random().toString(36).substr(2, 9)}`;
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
    const existingLink = document.querySelector('link[href*="character-ledredchan.css"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './components/character-ledredchan.css';
      document.head.appendChild(link);
    }
  }

  connectedCallback() {
    try {
      this.innerHTML = this.render();
    } catch (error) {
      console.error('CharacterLEDRedChan component render error:', error);
    }
  }

  render() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 1280 1500" preserveAspectRatio="xMidYMid meet" data-app="Xyris" class="character">
        <defs>
          <filter id="filter-9NKjpUUSTQjGiCm1z9UiRT-${this._maskId}" x="-0.243" y="-0.118" width="1.307" height="1.254" color-interpolation-filters="sRGB">
            <feFlood flood-color="#fff" result="bg">
            </feFlood>
            <feBlend in="SourceGraphic" in2="bg">
            </feBlend>
          </filter>
          <filter id="filter-n6heptMZRUJ93Uzzsvha8Y-${this._maskId}" x="0.009" y="0.097" width="0.845" height="0.807" color-interpolation-filters="sRGB">
            <feFlood flood-color="#fff" result="bg">
            </feFlood>
            <feBlend in="SourceGraphic" in2="bg">
            </feBlend>
          </filter>
        </defs>
        <g id="main-group" transform-origin="center" transform="" style="transform-box: fill-box;">
          <g id="hat-group" transform-origin="center" transform="" style="transform-box: fill-box;">
            <circle cx="448.5501" cy="740.624" r="6.5" fill="#e2c23d" transform="">
            </circle>
            <path d="M 766.834 655.34 L 533.834 1058.91 C 422.392 994.567 384.209 852.066 448.55 740.624 C 512.891 629.182 655.392 590.999 766.834 655.34 Z" fill="#ffdf43" transform="">
            </path>
            <ellipse cx="598.374" cy="827.124" rx="305" ry="72" transform="translate(-365.1628 961.7676) rotate(-60)" fill="#ffdf43" transform-origin="">
            </ellipse>
            <ellipse cx="591.446" cy="823.124" rx="216" ry="50.9901" transform="translate(-365.1628 953.7675) rotate(-60)" transform-origin="" style="mix-blend-mode: soft-light;">
            </ellipse>
            <path d="M 520.072 958.009 C 559.783 863.542 610.616 775.496 672.572 693.872 C 652.091 682.047 500.263 946.572 520.072 958.009 Z" transform="" style="mix-blend-mode: soft-light; ">
            </path>
          </g>
          <g id="body-container-group" transform-origin="center" transform="" style="transform-box: fill-box;">
            <rect id="rect1" x="643.734" y="1184.25" width="64" height="272" rx="8" ry="8" fill="#fff" transform-origin="top" transform="" style="transform-box: fill-box;">
            </rect>
            <rect id="rect2" x="796.8629" y="1184.25" width="64" height="272" rx="8" ry="8" fill="#fff" transform-origin="top" transform="" style="transform-box: fill-box;">
            </rect>
            <g id="body-group" transform-origin="center" style="transform-box: fill-box;">
              <path d="M 955.734 1160.25 L 955.734 888.246 C 955.734 766.743 857.237 668.246 735.734 668.246 C 614.231 668.246 515.734 766.743 515.734 888.246 L 515.734 1160.25 L 483.734 1160.25 L 483.734 1224.25 L 987.734 1224.25 L 987.734 1160.25 L 955.734 1160.25 Z" fill="rgb(239, 43, 45)" transform="">
              </path>
              <g transform="" style="mix-blend-mode: soft-light; ">
                <path d="M 570.734 943.246 C 570.734 821.743 669.231 723.246 790.734 723.246 C 802.148 723.246 813.359 724.116 824.305 725.792 C 798 711.419 767.822 703.246 735.734 703.246 C 633.561 703.246 550.734 786.073 550.734 888.246 L 550.734 1073.25 L 570.734 1073.25 L 570.734 943.246 Z" fill="#fff" transform="">
                </path>
              </g>
            </g>
            <g mask="url(#${this._maskId})">
              <g transform="">
                <g transform="">
                  <path d="M 875.734 1148.25 C 851.472 1148.25 831.734 1128.51 831.734 1104.25 C 831.734 1079.99 851.472 1060.25 875.734 1060.25 C 899.996 1060.25 919.734 1079.98 919.734 1104.25 C 919.734 1128.52 899.996 1148.25 875.734 1148.25 Z" fill="#231815" transform="">
                  </path>
                  <path d="M 875.734 1072.25 C 893.407 1072.25 907.734 1086.57 907.734 1104.25 C 907.734 1121.93 893.407 1136.25 875.734 1136.25 C 858.061 1136.25 843.734 1121.92 843.734 1104.25 C 843.734 1086.58 858.061 1072.25 875.734 1072.25 M 875.734 1048.25 C 844.856 1048.25 819.734 1073.37 819.734 1104.25 C 819.734 1135.13 844.856 1160.25 875.734 1160.25 C 906.612 1160.25 931.734 1135.12 931.734 1104.25 C 931.734 1073.38 906.612 1048.25 875.734 1048.25 L 875.734 1048.25 Z" fill="#fff" transform="">
                  </path>
                </g>
                <g transform="">
                  <path d="M 739.734 1148.25 C 715.472 1148.25 695.734 1128.51 695.734 1104.25 C 695.734 1079.99 715.472 1060.25 739.734 1060.25 C 763.996 1060.25 783.734 1079.98 783.734 1104.25 C 783.734 1128.52 763.996 1148.25 739.734 1148.25 Z" fill="#231815" transform="">
                  </path>
                  <path d="M 739.734 1072.25 C 757.407 1072.25 771.734 1086.57 771.734 1104.25 C 771.734 1121.93 757.407 1136.25 739.734 1136.25 C 722.061 1136.25 707.734 1121.92 707.734 1104.25 C 707.734 1086.58 722.061 1072.25 739.734 1072.25 M 739.734 1048.25 C 708.856 1048.25 683.734 1073.37 683.734 1104.25 C 683.734 1135.13 708.856 1160.25 739.734 1160.25 C 770.612 1160.25 795.734 1135.12 795.734 1104.25 C 795.734 1073.38 770.612 1048.25 739.734 1048.25 L 739.734 1048.25 Z" fill="#fff" transform="">
                  </path>
                </g>
              </g>
              <mask id="${this._maskId}">
                <g transform-origin="center" transform="" style="transform-box: fill-box;">
                  <rect fill="rgb(255, 255, 255)" stroke="#000000" stroke-width="0" x="683.7340087890625" y="1048.25" width="248" height="112" transform="">
                  </rect>
                  <g id="mask-group" transform-origin="center" transform="" style="transform-box: fill-box;">
                    <ellipse fill="rgb(0, 0, 0)" stroke="#000000" stroke-width="0" cx="879.7339695448876" cy="979" rx="60" ry="60" transform="">
                    </ellipse>
                    <ellipse fill="rgb(0, 0, 0)" stroke="#000000" stroke-width="0" cx="739.734" cy="979" rx="60" ry="60" transform="">
                    </ellipse>
                  </g>
                </g>
              </mask>
            </g>
          </g>
          <g id="arms-group" transform-origin="center" transform="" style="transform-box: fill-box;">
            <path d="M 533.767 780.25 C 577.926 1042.53 467.475 1160.25 807.734 1224.25" fill="none" stroke="#565656" stroke-linecap="round" stroke-linejoin="round" stroke-width="12px" transform="">
            </path>
            <path d="M 955.734 1160.25 C 955.734 1160.25 860.824 1201.16 807.734 1224.25" fill="none" stroke="#565656" stroke-linecap="round" stroke-linejoin="round" stroke-width="12px" transform="">
            </path>
          </g>
          <g id="hat-mask-group" transform-origin="center" transform="" style="transform-box: fill-box;">
            <g mask="url(#${this._maskId2})" transform="">
              <g transform="">
                <g mask="url(#${this._maskId3})" transform="">
                  <g transform="">
                    <circle cx="448.5501" cy="740.624" r="6.5" fill="#e2c23d" transform="">
                    </circle>
                    <path d="M 766.834 655.34 L 533.834 1058.91 C 422.392 994.567 384.209 852.066 448.55 740.624 C 512.891 629.182 655.392 590.999 766.834 655.34 Z" fill="#ffdf43" transform="">
                    </path>
                    <ellipse cx="598.374" cy="827.124" rx="305" ry="72" transform="translate(-365.1629 961.7671) rotate(-60)" fill="#ffdf43" transform-origin="">
                    </ellipse>
                    <path d="M 520.072 958.009 C 559.783 863.542 610.616 775.496 672.572 693.872 C 652.091 682.047 500.263 946.572 520.072 958.009 Z" transform="" style="mix-blend-mode: soft-light; ">
                    </path>
                  </g>
                </g>
                <mask id="${this._maskId3}" x="417.2951" y="522.7257" width="597.5797" height="680.4085" maskUnits="userSpaceOnUse">
                  <g filter="url(#filter-n6heptMZRUJ93Uzzsvha8Y-${this._maskId})" transform="">
                    <ellipse cx="712.353" cy="892.93" rx="377" ry="190.602" transform="translate(-365.1634 1093.3763) rotate(-59.9998)" transform-origin="">
                    </ellipse>
                  </g>
                </mask>
              </g>
            </g>
            <mask id="${this._maskId2}" x="417.2951" y="530.5127" width="397.8376" height="533.2228" maskUnits="userSpaceOnUse">
              <g filter="url(#filter-9NKjpUUSTQjGiCm1z9UiRT-${this._maskId})" transform="">
                <ellipse cx="591.446" cy="823.124" rx="216" ry="50.9901" transform="translate(-365.1629 953.767) rotate(-60)" transform-origin="" style="mix-blend-mode: soft-light;">
                </ellipse>
              </g>
            </mask>
          </g>
        </g>
      </svg>
    `;
  }
}

customElements.define('character-ledredchan', CharacterLEDRedChan);

