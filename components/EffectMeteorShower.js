class EffectMeteorShower extends HTMLElement {
  constructor() {
    super();
    this.render = this.render.bind(this);
    // generate a unique id for the mask element to avoid id collisions
    this._maskId = `mask-${Math.random().toString(36).substr(2, 9)}`;
    // Import CSS stylesheet
    // this._importStyles();
  }

  // _importStyles() {
  //   // Import common styles first
  //   const commonLink = document.querySelector('link[href*="character-common.css"]');
  //   if (!commonLink) {
  //     const link = document.createElement('link');
  //     link.rel = 'stylesheet';
  //     link.href = './components/character-common.css';
  //     document.head.appendChild(link);
  //   }

  //   // Check if component stylesheet is already loaded
  //   const existingLink = document.querySelector('link[href*="character-ledchan.css"]');
  //   if (!existingLink) {
  //     const link = document.createElement('link');
  //     link.rel = 'stylesheet';
  //     link.href = './components/character-ledchan.css';
  //     document.head.appendChild(link);
  //   }

  // }

  connectedCallback() {
    this.innerHTML = this.render();
  }
  render() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" data-app="Xyris">
        <defs>
        </defs>
        <g transform-origin="center" style="transform-box: fill-box;">
          <defs>
            <g id="starShape">
              <polygon id="starPolygon" points="
                0,-12
                4.31,-5.936
                11.413,-3.708
                6.969,2.31
                7.054,9.708
                0,6.5
                -7.054,9.708
                -6.969,2.31
                -11.413,-3.708
                -4.31,-5.936">
              </polygon>
            </g>
          </defs>

          <!-- Main meteors below -->
          <g id="star-1" transform="translate(-100,-100)">
            <g id="star-1-rot">
              <g id="star-1-scale">
                <use fill="hsl(53,99%,54%)" transform="scale(6.0)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2.0" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0" dur="2" repeatCount="1" path="M-60 660 L760 40"></animateMotion>
          </g>
          <g id="star-2" transform="translate(-100,-100)">
            <g id="star-2-rot">
              <g id="star-2-scale">
                <use fill="hsl(240,0%,98%)" transform="scale(4.5)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.6667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="2.14" dur="2.6667" repeatCount="1" path="M-20 680 L700 80"></animateMotion>
          </g>
          <g id="star-3" transform="translate(-100,-100)">
            <g id="star-3-rot">
              <g id="star-3-scale">
                <use fill="hsl(37,97%,67%)" transform="scale(8.0)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.8333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.52" dur="1.6667" repeatCount="1" path="M-70 620 L650 30"></animateMotion>
          </g>
          <g id="star-4" transform="translate(-100,-100)">
            <g id="star-4-rot">
              <g id="star-4-scale">
                <use fill="hsl(49,99%,60%)" transform="scale(4.0)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.44" dur="2.3333" repeatCount="1" path="M20 670 L780 100"></animateMotion>
          </g>
          <g id="star-5" transform="translate(-100,-100)">
            <g id="star-5-rot">
              <g id="star-5-scale">
                <use fill="hsl(240,8%,96%)" transform="scale(3.0)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.6" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.89" dur="1.5" repeatCount="1" path="M-40 640 L720 60"></animateMotion>
          </g>
          <g id="star-6" transform="translate(-100,-100)">
            <g id="star-6-rot">
              <g id="star-6-scale">
                <use fill="hsl(40,97%,69%)" transform="scale(5.0)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2.3333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.43" dur="3" repeatCount="1" path="M-80 685 L680 20"></animateMotion>
          </g>
          <g id="star-7" transform="translate(-100,-100)">
            <g id="star-7-rot">
              <g id="star-7-scale">
                <use fill="hsl(59,98%,58%)" transform="scale(7.0)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.3333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.34" dur="2.1667" repeatCount="1" path="M40 630 L760 120"></animateMotion>
          </g>
          <g id="star-8" transform="translate(-100,-100)">
            <g id="star-8-rot">
              <g id="star-8-scale">
                <use fill="hsl(240,5%,93%)" transform="scale(3.5)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.6667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.91" dur="1.8333" repeatCount="1" path="M-5 655 L700 30"></animateMotion>
          </g>
          <g id="star-9" transform="translate(-100,-100)">
            <g id="star-9-rot">
              <g id="star-9-scale">
                <use fill="hsl(38,97%,67%)" transform="scale(5.5)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.1667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.09" dur="2" repeatCount="1" path="M-50 675 L730 50"></animateMotion>
          </g>
          <g id="star-10" transform="translate(-100,-100)">
            <g id="star-10-rot">
              <g id="star-10-scale">
                <use fill="hsl(52,99%,51%)" transform="scale(4.5)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.8333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.74" dur="2.8333" repeatCount="1" path="M60 690 L790 90"></animateMotion>
          </g>
          <g id="star-11" transform="translate(-100,-100)">
            <g id="star-11-rot">
              <g id="star-11-scale">
                <use fill="hsl(240,2%,99%)" transform="scale(6.5)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.0667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.17" dur="2.4" repeatCount="1" path="M-75 635 L690 25"></animateMotion>
          </g>
          <g id="star-12" transform="translate(-100,-100)">
            <g id="star-12-rot">
              <g id="star-12-scale">
                <use fill="hsl(40,98%,73%)" transform="scale(4.25)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.9333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.27" dur="1.9333" repeatCount="1" path="M10 680 L740 40"></animateMotion>
          </g>

          <!-- Meteor trail above (y-250 on y coordinates) -->
          <g id="star-1-b" transform="translate(-100,-100)">
            <g id="star-1-b-rot">
              <g id="star-1-b-scale">
                <use fill="hsl(53,99%,40%)" transform="scale(2.59)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0" dur="2" repeatCount="1" path="M-110 460 L760 -160"></animateMotion>
          </g>
          <g id="star-2-b" transform="translate(-100,-100)">
            <g id="star-2-b-rot">
              <g id="star-2-b-scale">
                <use fill="hsl(240,0%,93%)" transform="scale(2.52)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.6667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.38" dur="2.6667" repeatCount="1" path="M-70 480 L700 -120"></animateMotion>
          </g>
          <g id="star-3-b" transform="translate(-100,-100)">
            <g id="star-3-b-rot">
              <g id="star-3-b-scale">
                <use fill="hsl(37,98%,62%)" transform="scale(4.93)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.8333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.02" dur="1.6667" repeatCount="1" path="M-120 420 L650 -170"></animateMotion>
          </g>
          <g id="star-4-b" transform="translate(-100,-100)">
            <g id="star-4-b-rot">
              <g id="star-4-b-scale">
                <use fill="hsl(48,99%,52%)" transform="scale(1.53)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.24" dur="2.3333" repeatCount="1" path="M-30 470 L780 -100"></animateMotion>
          </g>
          <g id="star-5-b" transform="translate(-100,-100)">
            <g id="star-5-b-rot">
              <g id="star-5-b-scale">
                <use fill="hsl(240,8%,84%)" transform="scale(1.51)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.6" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.31" dur="1.5" repeatCount="1" path="M-90 440 L720 -140"></animateMotion>
          </g>
          <g id="star-6-b" transform="translate(-100,-100)">
            <g id="star-6-b-rot">
              <g id="star-6-b-scale">
                <use fill="hsl(41,96%,52%)" transform="scale(2.62)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2.3333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.57" dur="3" repeatCount="1" path="M-130 485 L680 -180"></animateMotion>
          </g>
          <g id="star-7-b" transform="translate(-100,-100)">
            <g id="star-7-b-rot">
              <g id="star-7-b-scale">
                <use fill="hsl(57,97%,52%)" transform="scale(4.07)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.3333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.38" dur="2.1667" repeatCount="1" path="M-10 430 L760 -80"></animateMotion>
          </g>
          <g id="star-8-b" transform="translate(-100,-100)">
            <g id="star-8-b-rot">
              <g id="star-8-b-scale">
                <use fill="hsl(240,6%,80%)" transform="scale(1.31)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.6667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.75" dur="1.8333" repeatCount="1" path="M-55 455 L700 -170"></animateMotion>
          </g>
          <g id="star-9-b" transform="translate(-100,-100)">
            <g id="star-9-b-rot">
              <g id="star-9-b-scale">
                <use fill="hsl(38,98%,61%)" transform="scale(2.44)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.1667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.69" dur="2" repeatCount="1" path="M-100 475 L730 -150"></animateMotion>
          </g>
          <g id="star-10-b" transform="translate(-100,-100)">
            <g id="star-10-b-rot">
              <g id="star-10-b-scale">
                <use fill="hsl(50,99%,45%)" transform="scale(2.81)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.8333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.23" dur="2.8333" repeatCount="1" path="M10 490 L790 -110"></animateMotion>
          </g>
          <g id="star-11-b" transform="translate(-100,-100)">
            <g id="star-11-b-rot">
              <g id="star-11-b-scale">
                <use fill="hsl(240,1%,92%)" transform="scale(3.1)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.0667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.3" dur="2.4" repeatCount="1" path="M-125 435 L690 -175"></animateMotion>
          </g>
          <g id="star-12-b" transform="translate(-100,-100)">
            <g id="star-12-b-rot">
              <g id="star-12-b-scale">
                <use fill="hsl(35,97%,44%)" transform="scale(1.83)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.9333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.12" dur="1.9333" repeatCount="1" path="M-40 480 L740 -160"></animateMotion>
          </g>

          <!-- Meteor trail below (y+200 on y coordinates) -->
          <g id="star-1-c" transform="translate(-100,-100)">
            <g id="star-1-c-rot">
              <g id="star-1-c-scale">
                <use fill="hsl(56,98%,45%)" transform="scale(2.30)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0" dur="2" repeatCount="1" path="M-110 860 L760 240"></animateMotion>
          </g>
          <g id="star-2-c" transform="translate(-100,-100)">
            <g id="star-2-c-rot">
              <g id="star-2-c-scale">
                <use fill="hsl(240,0%,97%)" transform="scale(3.43)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.6667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.09" dur="2.6667" repeatCount="1" path="M-70 880 L700 280"></animateMotion>
          </g>
          <g id="star-3-c" transform="translate(-100,-100)">
            <g id="star-3-c-rot">
              <g id="star-3-c-scale">
                <use fill="hsl(31,95%,77%)" transform="scale(3.92)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.8333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.68" dur="1.6667" repeatCount="1" path="M-120 820 L650 230"></animateMotion>
          </g>
          <g id="star-4-c" transform="translate(-100,-100)">
            <g id="star-4-c-rot">
              <g id="star-4-c-scale">
                <use fill="hsl(50,99%,55%)" transform="scale(1.65)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.80" dur="2.3333" repeatCount="1" path="M-30 870 L780 300"></animateMotion>
          </g>
          <g id="star-5-c" transform="translate(-100,-100)">
            <g id="star-5-c-rot">
              <g id="star-5-c-scale">
                <use fill="hsl(240,9%,98%)" transform="scale(2.40)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.5667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.06" dur="2.4333" repeatCount="1" path="M50 850 L860 290"></animateMotion>
          </g>
          <g id="star-6-c" transform="translate(-100,-100)">
            <g id="star-6-c-rot">
              <g id="star-6-c-scale">
                <use fill="hsl(38,96%,50%)" transform="scale(2.74)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.2333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.09" dur="2.7" repeatCount="1" path="M-85 800 L760 210"></animateMotion>
          </g>
          <g id="star-7-c" transform="translate(-100,-100)">
            <g id="star-7-c-rot">
              <g id="star-7-c-scale">
                <use fill="hsl(55,99%,51%)" transform="scale(2.77)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.7667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.12" dur="2.0667" repeatCount="1" path="M0 820 L830 170"></animateMotion>
          </g>
          <g id="star-8-c" transform="translate(-100,-100)">
            <g id="star-8-c-rot">
              <g id="star-8-c-scale">
                <use fill="hsl(240,7%,94%)" transform="scale(2.41)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.4" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.57" dur="2.6333" repeatCount="1" path="M-130 720 L700 100"></animateMotion>
          </g>
          <g id="star-9-c" transform="translate(-100,-100)">
            <g id="star-9-c-rot">
              <g id="star-9-c-scale">
                <use fill="hsl(42,97%,59%)" transform="scale(3.25)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.1667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.53" dur="2" repeatCount="1" path="M-100 625 L730 0"></animateMotion>
          </g>
          <g id="star-10-c" transform="translate(-100,-100)">
            <g id="star-10-c-rot">
              <g id="star-10-c-scale">
                <use fill="hsl(48,97%,57%)" transform="scale(2.07)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.8333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.41" dur="2.8333" repeatCount="1" path="M10 640 L790 40"></animateMotion>
          </g>
          <g id="star-11-c" transform="translate(-100,-100)">
            <g id="star-11-c-rot">
              <g id="star-11-c-scale">
                <use fill="hsl(240,7%,98%)" transform="scale(2.08)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1.0667" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="1.00" dur="2.4" repeatCount="1" path="M-125 585 L690 -25"></animateMotion>
          </g>
          <g id="star-12-c" transform="translate(-100,-100)">
            <g id="star-12-c-rot">
              <g id="star-12-c-scale">
                <use fill="hsl(31,97%,38%)" transform="scale(1.39)" href="#starShape"></use>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.9333" repeatCount="indefinite" values="0 0 0;360 0 0" keyTimes="0;1"></animateTransform>
            </g>
            <animateMotion begin="0.87" dur="1.9333" repeatCount="1" path="M-40 630 L740 -10"></animateMotion>
          </g>

        </g>
      </svg>
    `;
  }
}

customElements.define("effect-meteorshower", EffectMeteorShower);
