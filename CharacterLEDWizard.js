class CharacterLEDWizard extends HTMLElement {
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
    const existingLink = document.querySelector('link[href*="character-ledwizard.css"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './components/character-ledwizard.css';
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
          <radialGradient id="radialGradient-v4QA18bkXZEviTG1QDdntv" cx="1083.3282" cy="-1689.8776" fx="1083.3282" fy="-1689.8776" r="51.0065" gradientTransform="matrix(0.011081,-0.0248196,0.0069441,0.0069441,0.231199,39.1222626)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-dh4cvWRuz2w58Zb2VLkquc" cx="2813.0755" cy="2440.7952" fx="2813.0755" fy="2440.7952" r="51.0065" gradientTransform="matrix(-0.0248196,-0.011081,-0.0069442,0.0069442,87.2674479,14.7209471)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-qpraGBpuXDo4aH1U7CuQzC" cx="1739.1177" cy="-2635.0976" fx="1739.1177" fy="-2635.0976" r="51.0065" gradientTransform="matrix(-0.0020387,-0.0515268,0.0069444,-0.0069445,22.3447645,71.809365)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-qmtyxCZKH7rWr5XEp257ks" cx="999.3602" cy="627.5041" fx="999.3602" fy="627.5041" r="51.0065" gradientTransform="matrix(0.0515267,-0.0020387,0.0069444,0.0069444,-55.3499032,-1.820316)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-khwz9s7TpgURXP4RPuGmaa" cx="1122.6003" cy="-1460.9897" fx="1122.6003" fy="-1460.9897" r="31.5249" gradientTransform="matrix(0.0179289,-0.0401576,0.0112355,0.0112355,-3.2107772,61.9952155)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-2umHEkpnopB8bdjTZc2e6A" cx="2717.2272" cy="2347.0124" fx="2717.2272" fy="2347.0124" r="31.5249" gradientTransform="matrix(-0.0401576,-0.0179289,-0.0112355,0.0112355,135.9850355,22.8445287)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-sS8wucNj6SaYospDjmgq52" cx="1699.1123" cy="-2494.0872" fx="1699.1123" fy="-2494.0872" r="31.5249" gradientTransform="matrix(-0.0032986,-0.0833688,0.011236,-0.0112359,34.1279639,114.1256338)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-fP1iZ4Gpgbazr5DKwZGH4K" cx="1094.9049" cy="686.5464" fx="1094.9049" fy="686.5464" r="31.5249" gradientTransform="matrix(0.0833688,-0.0032986,0.0112359,0.011236,-98.4923339,-3.602459)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-arneWHKU4MqHvq7iNUFKyQ" cx="1296.3347" cy="-1336.7916" fx="1296.3347" fy="-1336.7916" r="51.0065" gradientTransform="matrix(0.011081,-0.0248196,0.0069442,0.0069441,-4.5810529,41.9568678)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-bnXzmaSJ1HdnfiBQ1wCv4c" cx="2665.2184" cy="1932.131" fx="2665.2184" fy="1932.131" r="51.0065" gradientTransform="matrix(-0.0248196,-0.011081,-0.0069441,0.0069442,80.0653533,16.6149719)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-aCp4Na1Y8UJS3uT5k4onup" cx="1785.1853" cy="-2258.504" fx="1785.1853" fy="-2258.504" r="51.0065" gradientTransform="matrix(-0.0020387,-0.0515268,0.0069444,-0.0069445,19.8234418,76.7982566)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-xzTkxV6wEF5ZPTJDXozgZB" cx="1254.5294" cy="559.5148" fx="1254.5294" fy="559.5148" r="51.0065" gradientTransform="matrix(0.0515268,-0.0020387,0.0069445,0.0069444,-68.0256265,-0.8279654)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-84J36AgtDB7R1ZGNP3Hfrq" cx="1344.7074" cy="-1967.3595" fx="1344.7074" fy="-1967.3595" r="19.4817" gradientTransform="matrix(0.0290122,-0.0649822,0.0181811,0.018181,-2.7416122,123.6497288)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-39zoQsxRLkdmreChPuAKK8" cx="2929.273" cy="1816.6162" fx="2929.273" fy="1816.6162" r="19.4817" gradientTransform="matrix(-0.0649822,-0.0290122,-0.018181,0.0181811,223.8746239,52.4528729)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-t2MXhEfzycd5XxaFJSRX49" cx="2006.1047" cy="-2483.5874" fx="2006.1047" fy="-2483.5874" r="19.4817" gradientTransform="matrix(-0.0053377,-0.1349058,0.0181818,-0.0181817,56.3638821,225.9716207)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-oie7jJKHvWT14RvZssiJBW" cx="1102.0192" cy="233.469" fx="1102.0192" fy="233.469" r="19.4817" gradientTransform="matrix(0.1349062,-0.0053377,0.0181818,0.0181818,-152.4099346,2.137217)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-mRuSgv9tBAGeJBQ9nchN1y" cx="1331.8922" cy="-1803.5882" fx="1331.8922" fy="-1803.5882" r="51.0065" gradientTransform="matrix(0.011081,-0.0248196,0.0069442,0.0069441,-1.7334129,46.0810048)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-vVTkTKQgdy8fbZ9fYwsMQr" cx="2860.6926" cy="1847.2191" fx="2860.6926" fy="1847.2191" r="51.0065" gradientTransform="matrix(-0.0248196,-0.011081,-0.0069441,0.0069442,84.3271445,19.3706339)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-7aXV7MnzNMxyM9BkXmnjX8" cx="1948.5494" cy="-2425.3915" fx="1948.5494" fy="-2425.3915" r="51.0065" gradientTransform="matrix(-0.0020387,-0.0515268,0.0069444,-0.0069445,21.3154267,84.0567118)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-3LpDSudFHGt3oSBhSEyjPD" cx="1141.4512" cy="318.4125" fx="1141.4512" fy="318.4125" r="51.0065" gradientTransform="matrix(0.0515268,-0.0020387,0.0069445,0.0069444,-60.5248998,0.6158286)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-fLmEAmE5RJQYzVrFp4g4wy" cx="1367.293" cy="-1578.2413" fx="1367.293" fy="-1578.2413" r="31.5249" gradientTransform="matrix(0.0179289,-0.0401576,0.0112355,0.0112355,-6.2802819,73.1386309)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-rr74pZQhX2kJjCqK1BZZwr" cx="2766.3271" cy="1762.6813" fx="2766.3271" fy="1762.6813" r="31.5249" gradientTransform="matrix(-0.0401576,-0.0179289,-0.0112355,0.0112355,131.3912035,30.2903314)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-3hGLRveZEayPqKybhikNzA" cx="1906.855" cy="-2289.9687" fx="1906.855" fy="-2289.9687" r="31.5249" gradientTransform="matrix(-0.0032986,-0.0833688,0.011236,-0.0112359,32.5197376,133.7378698)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-gZZDVbzzJSNbqC5uQ5C9JS" cx="1233.2098" cy="379.9476" fx="1233.2098" fy="379.9476" r="31.5249" gradientTransform="matrix(0.0833688,-0.0032986,0.0112359,0.011236,-106.5774093,0.2986698)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-gPdmiR4Afkqwh45fUg6WH3" cx="1212.9304" cy="-1734.0281" fx="1212.9304" fy="-1734.0281" r="31.5249" gradientTransform="matrix(0.0179289,-0.0401576,0.0112355,0.0112355,-1.7624005,68.6903944)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-mXWmpmaxHwzyxE2dBX5uy9" cx="2831.5638" cy="2131.3023" fx="2831.5638" fy="2131.3023" r="31.5249" gradientTransform="matrix(-0.0401576,-0.0179289,-0.0112355,0.0112355,138.1526838,27.3181081)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-x9Hf7VtMpxXUCdtTmsUpus" cx="1843.8335" cy="-2519.1403" fx="1843.8335" fy="-2519.1403" r="31.5249" gradientTransform="matrix(-0.0032986,-0.0833688,0.011236,-0.0112359,34.8868211,125.9090429)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-frcvD73HxPi2TLvKH11j7o" cx="1077.9296" cy="472.9583" fx="1077.9296" fy="472.9583" r="31.5249" gradientTransform="matrix(0.0833688,-0.0032986,0.0112359,0.011236,-94.6773124,-1.2585859)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-1WgvF66m5M1QmaYEN3r9Hb" cx="1216.7229" cy="-1497.078" fx="1216.7229" fy="-1497.078" r="31.5249" gradientTransform="matrix(0.0179289,-0.0401576,0.0112355,0.0112355,-4.4927539,66.1803275)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-f4uQ53JPnEioS4B34fmECq" cx="2732.3394" cy="2122.2457" fx="2732.3394" fy="2122.2457" r="31.5249" gradientTransform="matrix(-0.0401576,-0.0179289,-0.0112355,0.0112355,134.066424,25.6409364)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-h6gZzbajNSBLSsaQVzL2MM" cx="1776.353" cy="-2411.6328" fx="1776.353" fy="-2411.6328" r="31.5249" gradientTransform="matrix(-0.0032986,-0.0833688,0.011236,-0.0112359,33.4562882,121.4913717)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-nFjBaLPijehfCah2vjYXbW" cx="1150.7736" cy="572.55" fx="1150.7736" fy="572.55" r="31.5249" gradientTransform="matrix(0.0833688,-0.0032986,0.0112359,0.011236,-101.869062,-2.1373186)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-j3F84qTYQesHXHodNeaDbz" cx="1296.2329" cy="-1612.9015" fx="1296.2329" fy="-1612.9015" r="19.4817" gradientTransform="matrix(0.0290122,-0.0649822,0.0181811,0.018181,-7.7799938,114.0551587)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-oNUZNUs5zmqjBPusoDAovs" cx="2780.8412" cy="1932.3743" fx="2780.8412" fy="1932.3743" r="19.4817" gradientTransform="matrix(-0.0649822,-0.0290122,-0.018181,0.0181811,216.3341671,46.041916)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-nr9xGKhLHhTMzUU6Cqzad8" cx="1866.871" cy="-2379.2731" fx="1866.871" fy="-2379.2731" r="19.4817" gradientTransform="matrix(-0.0053377,-0.1349062,0.0181818,-0.0181818,53.7240878,209.0859221)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-i6SpMCG1u5iBAHfSwwEBRV" cx="1172.6997" cy="438.9583" fx="1172.6997" fy="438.9583" r="19.4817" gradientTransform="matrix(0.1349062,-0.0053377,0.0181818,0.0181818,-165.6810528,-1.2216896)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-1gfXToiTo2jVd4GTPConoT" cx="1210.2063" cy="-1314.7124" fx="1210.2063" fy="-1314.7124" r="19.4817" gradientTransform="matrix(0.0290122,-0.0649824,0.0181811,0.0181811,-10.7058685,103.0438354)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-j7jZVdez9aNLXUk4hSxjvv" cx="2655.9725" cy="2137.8075" fx="2655.9725" fy="2137.8075" r="19.4817" gradientTransform="matrix(-0.0649822,-0.0290122,-0.018181,0.0181811,211.9552952,38.6841527)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-eWKRHpQ4fkeqpwCUxpBTBa" cx="1717.7455" cy="-2338.7379" fx="1717.7455" fy="-2338.7379" r="19.4817" gradientTransform="matrix(-0.0053377,-0.1349062,0.0181818,-0.0181818,52.1911145,189.7055358)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <radialGradient id="radialGradient-qLv5Md2P4KD8S9bMecZziK" cx="1200.1652" cy="659.0464" fx="1200.1652" fy="659.0464" r="19.4817" gradientTransform="matrix(0.1349062,-0.0053377,0.0181818,0.0181818,-173.387817,-5.076693)">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#231815"></stop>
          </radialGradient>
          <filter id="filter-sELgC84soStkVSB1Ut8bwp" x="0.001" y="0" width="1" height="1">
            <feOffset dx="0" dy="0"></feOffset>
            <feGaussianBlur result="blur" stdDeviation="5"></feGaussianBlur>
            <feFlood flood-color="#fff" flood-opacity=".5"></feFlood>
            <feComposite in2="blur" operator="in"></feComposite>
            <feComposite in="SourceGraphic"></feComposite>
          </filter>
        </defs>
        <g id="main-group" transform-origin="center" style="transform-box: fill-box;">
          <g transform-origin="center" style="transform-box: fill-box;">
            <rect id="rect1" x="643.0449" y="1184.25" width="64" height="272" rx="8" ry="8" fill="#fff" transform-origin="top" style="transform-box: fill-box;"></rect>
            <rect id="rect2" x="796.1737" y="1184.25" width="64" height="272" rx="8" ry="8" fill="#fff" transform-origin="top" style="transform-box: fill-box;"></rect>
            <g id="body-group" transform-origin="center" style="transform-box: fill-box;">
              <path d="M 955.045 1159.53 L 955.045 887.538 C 955.045 766.035 856.548 667.538 735.045 667.538 C 613.542 667.538 515.045 766.035 515.045 887.538 L 515.045 1159.53 L 483.045 1159.53 L 483.045 1223.53 L 987.045 1223.53 L 987.045 1159.53 L 955.045 1159.53 Z" fill="#9db5d1"></path>
              <g style="mix-blend-mode: soft-light; ">
                <path d="M 570.045 942.538 C 570.045 821.035 668.542 722.538 790.045 722.538 C 801.459 722.538 812.67 723.408 823.616 725.084 C 797.311 710.711 767.133 702.538 735.045 702.538 C 632.872 702.538 550.045 785.365 550.045 887.538 L 550.045 1072.53 L 570.045 1072.53 L 570.045 942.538 Z" fill="#fff"></path>
              </g>
            </g>
            <g mask="url(#${this._maskId})" transform-origin="">
              <g>
                <g>
                  <path d="M 875.045 1148.25 C 850.783 1148.25 831.045 1128.51 831.045 1104.25 C 831.045 1079.99 850.783 1060.25 875.045 1060.25 C 899.307 1060.25 919.045 1079.98 919.045 1104.25 C 919.045 1128.52 899.307 1148.25 875.045 1148.25 Z" fill="#231815"></path>
                  <path d="M 875.045 1072.25 C 892.718 1072.25 907.045 1086.57 907.045 1104.25 C 907.045 1121.93 892.718 1136.25 875.045 1136.25 C 857.372 1136.25 843.045 1121.92 843.045 1104.25 C 843.045 1086.58 857.372 1072.25 875.045 1072.25 M 875.045 1048.25 C 844.166 1048.25 819.045 1073.37 819.045 1104.25 C 819.045 1135.13 844.166 1160.25 875.045 1160.25 C 905.924 1160.25 931.045 1135.12 931.045 1104.25 C 931.045 1073.38 905.923 1048.25 875.045 1048.25 L 875.045 1048.25 Z" fill="#fff"></path>
                </g>
                <g>
                  <path d="M 739.045 1148.25 C 714.783 1148.25 695.045 1128.51 695.045 1104.25 C 695.045 1079.99 714.783 1060.25 739.045 1060.25 C 763.307 1060.25 783.045 1079.98 783.045 1104.25 C 783.045 1128.52 763.307 1148.25 739.045 1148.25 Z" fill="#231815"></path>
                  <path d="M 739.045 1072.25 C 756.718 1072.25 771.045 1086.57 771.045 1104.25 C 771.045 1121.93 756.718 1136.25 739.045 1136.25 C 721.372 1136.25 707.045 1121.92 707.045 1104.25 C 707.045 1086.58 721.372 1072.25 739.045 1072.25 M 739.045 1048.25 C 708.166 1048.25 683.045 1073.37 683.045 1104.25 C 683.045 1135.13 708.166 1160.25 739.045 1160.25 C 769.924 1160.25 795.045 1135.12 795.045 1104.25 C 795.045 1073.38 769.923 1048.25 739.045 1048.25 L 739.045 1048.25 Z" fill="#fff"></path>
                </g>
              </g>
              <mask id="${this._maskId}">
                <g transform-origin="center" style="transform-box: fill-box;">
                  <rect fill="rgb(255, 255, 255)" stroke="#000000" stroke-width="0" x="683.7340087890625" y="1048.25" width="248" height="112"></rect>
                  <g id="mask-group" transform-origin="center" style="transform-box: fill-box;">
                    <ellipse fill="rgb(0, 0, 0)" stroke="#000000" stroke-width="0" cx="879.7339695448876" cy="979" rx="60" ry="60"></ellipse>
                    <ellipse fill="rgb(0, 0, 0)" stroke="#000000" stroke-width="0" cx="739.734" cy="979" rx="60" ry="60"></ellipse>
                  </g>
                </g>
              </mask>
            </g>
            <path id="beard" d="M 866.011 1115.28 C 849.899 1099.17 824.51 1098 807.045 1111.77 C 789.58 1098 764.191 1099.17 748.079 1115.28 C 730.7 1132.66 682.617 1238.62 699.995 1255.99 C 716.277 1272.28 784.239 1205.03 807.045 1182.19 C 829.851 1205.03 897.813 1272.28 914.095 1255.99 C 931.473 1238.62 883.39 1132.66 866.011 1115.28 Z" fill="#d6d6d6" transform-origin="center" style="transform-box: fill-box;"></path>
          </g>
          <g id="hat-group" transform-origin="center" style="transform-box: fill-box;">
            <g transform-origin="center" style="transform-box: fill-box;">
              <path d="M 1114.22 928.434 C 1110.35 908.977 1052.24 888.283 965.984 885.148 C 906.856 650.78 818.019 642.335 486.29 420.68 C 544.985 715.763 582.52 717.563 362.423 1050.11 C 253.69 1080.26 203.638 1084.9 208.353 1108.61 C 216.111 1147.61 441.769 1191.59 675.333 1089.13 C 981.505 954.833 1121.98 967.435 1114.22 928.434 Z" fill="#785293"></path>
              <path d="M 341.068 1082.21 C 351.002 1132.15 991.439 1004.77 981.504 954.833 C 886.541 1028.81 360.688 1113.71 341.068 1082.21 Z" fill="#fff" style="mix-blend-mode: soft-light; "></path>
              <g transform-origin="center" style="transform-box: fill-box;">
                <g transform-origin="center" style="transform-box: fill-box;">
                  <g class="sparkle-3000ms" transform-origin="center" style="mix-blend-mode: color-dodge; transform-box: fill-box;">
                    <path d="M 505.12 986.522 C 525.554 1000.17 538.513 1016.64 538.513 1016.64 C 538.513 1016.64 518.343 1010.96 497.909 997.313 C 477.476 983.66 464.516 967.196 464.516 967.196 C 464.516 967.196 484.686 972.868 505.12 986.522 Z" fill="url(#radialGradient-v4QA18bkXZEviTG1QDdntv)"></path>
                    <path d="M 496.119 988.312 C 482.466 1008.75 476.793 1028.91 476.793 1028.91 C 476.793 1028.91 493.257 1015.95 506.91 995.523 C 520.564 975.089 526.236 954.919 526.236 954.919 C 526.236 954.919 509.772 967.878 496.119 988.312 Z" fill="url(#radialGradient-dh4cvWRuz2w58Zb2VLkquc)"></path>
                    <path d="M 500.249 985.553 C 539.249 977.795 572.131 977.871 572.131 977.871 C 572.131 977.871 541.781 990.524 502.781 998.282 C 463.78 1006.04 430.898 1005.96 430.898 1005.96 C 430.898 1005.96 461.248 993.311 500.249 985.553 Z" fill="url(#radialGradient-qpraGBpuXDo4aH1U7CuQzC)"></path>
                    <path d="M 507.879 990.651 C 515.637 1029.65 515.561 1062.52 515.561 1062.52 C 515.561 1062.52 502.908 1032.18 495.15 993.183 C 487.392 954.182 487.468 921.301 487.468 921.301 C 487.468 921.301 500.122 951.651 507.879 990.651 Z" fill="url(#radialGradient-qmtyxCZKH7rWr5XEp257ks)"></path>
                  </g>
                  <g class="sparkle-3000ms" transform-origin="center" style="mix-blend-mode: color-dodge; transform-box: fill-box;">
                    <path d="M 861.213 846.369 C 881.647 860.023 894.607 876.487 894.607 876.487 C 894.607 876.487 874.437 870.814 854.003 857.16 C 833.569 843.507 820.609 827.043 820.609 827.043 C 820.609 827.043 840.78 832.716 861.213 846.369 Z" fill="url(#radialGradient-arneWHKU4MqHvq7iNUFKyQ)"></path>
                    <path d="M 852.212 848.16 C 838.559 868.593 832.886 888.763 832.886 888.763 C 832.886 888.763 849.35 875.804 863.004 855.37 C 876.657 834.936 882.33 814.766 882.33 814.766 C 882.33 814.766 865.866 827.726 852.212 848.16 Z" fill="url(#radialGradient-bnXzmaSJ1HdnfiBQ1wCv4c)"></path>
                    <path d="M 856.342 845.4 C 895.343 837.643 928.225 837.718 928.225 837.718 C 928.225 837.718 897.875 850.372 858.874 858.129 C 819.874 865.887 786.992 865.811 786.992 865.811 C 786.992 865.811 817.342 853.158 856.342 845.4 Z" fill="url(#radialGradient-aCp4Na1Y8UJS3uT5k4onup)"></path>
                    <path d="M 863.973 850.499 C 871.73 889.499 871.655 922.381 871.655 922.381 C 871.655 922.381 859.001 892.031 851.244 853.031 C 843.487 814.031 843.562 781.148 843.562 781.148 C 843.562 781.148 856.215 811.498 863.973 850.499 Z" fill="url(#radialGradient-xzTkxV6wEF5ZPTJDXozgZB)"></path>
                  </g>
                  <g class="sparkle-3000ms" transform-origin="center" style="mix-blend-mode: color-dodge; transform-box: fill-box;">
                    <path d="M 650.496 642.458 C 670.93 656.111 683.889 672.575 683.889 672.575 C 683.889 672.575 663.719 666.902 643.285 653.249 C 622.852 639.596 609.892 623.132 609.892 623.132 C 609.892 623.132 630.062 628.804 650.496 642.458 Z" fill="url(#radialGradient-mRuSgv9tBAGeJBQ9nchN1y)"></path>
                    <path d="M 641.495 644.248 C 627.841 664.682 622.169 684.852 622.169 684.852 C 622.169 684.852 638.633 671.892 652.286 651.459 C 665.939 631.025 671.612 610.855 671.612 610.855 C 671.612 610.855 655.148 623.814 641.495 644.248 Z" fill="url(#radialGradient-vVTkTKQgdy8fbZ9fYwsMQr)"></path>
                    <path d="M 645.625 641.489 C 684.625 633.731 717.507 633.807 717.507 633.807 C 717.507 633.807 687.157 646.46 648.157 654.218 C 609.156 661.976 576.274 661.9 576.274 661.9 C 576.274 661.9 606.624 649.246 645.625 641.489 Z" fill="url(#radialGradient-7aXV7MnzNMxyM9BkXmnjX8)"></path>
                    <path d="M 653.255 646.587 C 661.013 685.588 660.937 718.47 660.937 718.47 C 660.937 718.47 648.284 688.12 640.526 649.119 C 632.768 610.119 632.844 577.237 632.844 577.237 C 632.844 577.237 645.497 607.587 653.255 646.587 Z" fill="url(#radialGradient-3LpDSudFHGt3oSBhSEyjPD)"></path>
                  </g>
                </g>
                <g transform-origin="center" style="transform-box: fill-box;">
                  <g class="sparkle-1200ms" transform-origin="center" style="mix-blend-mode: color-dodge; transform-box: fill-box;">
                    <path d="M 653.562 1018.98 C 666.192 1027.41 674.201 1037.59 674.201 1037.59 C 674.201 1037.59 661.735 1034.08 649.106 1025.65 C 636.477 1017.21 628.467 1007.04 628.467 1007.04 C 628.467 1007.04 640.933 1010.54 653.562 1018.98 Z" fill="url(#radialGradient-khwz9s7TpgURXP4RPuGmaa)"></path>
                    <path d="M 647.999 1020.08 C 639.561 1032.71 636.055 1045.17 636.055 1045.17 C 636.055 1045.17 646.23 1037.17 654.669 1024.54 C 663.108 1011.91 666.614 999.448 666.614 999.448 C 666.614 999.448 656.438 1007.46 647.999 1020.08 Z" fill="url(#radialGradient-2umHEkpnopB8bdjTZc2e6A)"></path>
                    <path d="M 650.552 1018.38 C 674.656 1013.58 694.979 1013.63 694.979 1013.63 C 694.979 1013.63 676.221 1021.45 652.117 1026.24 C 628.012 1031.04 607.689 1030.99 607.689 1030.99 C 607.689 1030.99 626.447 1023.17 650.552 1018.38 Z" fill="url(#radialGradient-sS8wucNj6SaYospDjmgq52)"></path>
                    <path d="M 655.268 1021.53 C 660.063 1045.63 660.016 1065.95 660.016 1065.95 C 660.016 1065.95 652.195 1047.19 647.401 1023.09 C 642.606 998.994 642.653 978.671 642.653 978.671 C 642.653 978.671 650.473 997.429 655.268 1021.53 Z" fill="url(#radialGradient-fP1iZ4Gpgbazr5DKwZGH4K)"></path>
                  </g>
                  <g class="sparkle-1200ms" transform-origin="center" style="mix-blend-mode: color-dodge; transform-box: fill-box;">
                    <path d="M 793.944 678.452 C 806.573 686.89 814.583 697.066 814.583 697.066 C 814.583 697.066 802.117 693.56 789.488 685.121 C 776.859 676.683 768.849 666.507 768.849 666.507 C 768.849 666.507 781.315 670.013 793.944 678.452 Z" fill="url(#radialGradient-fLmEAmE5RJQYzVrFp4g4wy)"></path>
                    <path d="M 788.381 679.558 C 779.943 692.187 776.437 704.654 776.437 704.654 C 776.437 704.654 786.612 696.644 795.051 684.015 C 803.49 671.385 806.995 658.919 806.995 658.919 C 806.995 658.919 796.82 666.929 788.381 679.558 Z" fill="url(#radialGradient-rr74pZQhX2kJjCqK1BZZwr)"></path>
                    <path d="M 790.934 677.853 C 815.038 673.058 835.361 673.105 835.361 673.105 C 835.361 673.105 816.603 680.925 792.499 685.72 C 768.394 690.515 748.071 690.468 748.071 690.468 C 748.071 690.468 766.829 682.647 790.934 677.853 Z" fill="url(#radialGradient-3hGLRveZEayPqKybhikNzA)"></path>
                    <path d="M 795.65 681.004 C 800.444 705.108 800.398 725.431 800.398 725.431 C 800.398 725.431 792.577 706.673 787.783 682.569 C 782.988 658.464 783.035 638.141 783.035 638.141 C 783.035 638.141 790.855 656.899 795.65 681.004 Z" fill="url(#radialGradient-gZZDVbzzJSNbqC5uQ5C9JS)"></path>
                  </g>
                  <g class="sparkle-1200ms" transform-origin="center" style="mix-blend-mode: color-dodge; transform-box: fill-box;">
                    <path d="M 587.322 814.384 C 599.951 822.823 607.961 832.998 607.961 832.998 C 607.961 832.998 595.495 829.493 582.865 821.054 C 570.236 812.615 562.226 802.44 562.226 802.44 C 562.226 802.44 574.693 805.946 587.322 814.384 Z" fill="url(#radialGradient-gPdmiR4Afkqwh45fUg6WH3)"></path>
                    <path d="M 581.759 815.491 C 573.32 828.12 569.814 840.586 569.814 840.586 C 569.814 840.586 579.99 832.576 588.428 819.947 C 596.866 807.318 600.373 794.852 600.373 794.852 C 600.373 794.852 590.197 802.862 581.759 815.491 Z" fill="url(#radialGradient-mXWmpmaxHwzyxE2dBX5uy9)"></path>
                    <path d="M 584.311 813.785 C 608.416 808.991 628.739 809.037 628.739 809.037 C 628.739 809.037 609.98 816.858 585.876 821.653 C 561.772 826.447 541.449 826.401 541.449 826.401 C 541.449 826.401 560.207 818.58 584.311 813.785 Z" fill="url(#radialGradient-x9Hf7VtMpxXUCdtTmsUpus)"></path>
                    <path d="M 589.027 816.937 C 593.822 841.041 593.775 861.364 593.775 861.364 C 593.775 861.364 585.955 842.606 581.16 818.502 C 576.365 794.397 576.412 774.074 576.412 774.074 C 576.412 774.074 584.233 792.832 589.027 816.937 Z" fill="url(#radialGradient-frcvD73HxPi2TLvKH11j7o)"></path>
                  </g>
                  <g class="sparkle-1200ms" transform-origin="center" style="mix-blend-mode: color-dodge; transform-box: fill-box;">
                    <path d="M 712.193 891.089 C 724.822 899.527 732.832 909.703 732.832 909.703 C 732.832 909.703 720.366 906.197 707.736 897.758 C 695.107 889.32 687.097 879.144 687.097 879.144 C 687.097 879.144 699.564 882.65 712.193 891.089 Z" fill="url(#radialGradient-1WgvF66m5M1QmaYEN3r9Hb)"></path>
                    <path d="M 706.63 892.195 C 698.191 904.825 694.685 917.291 694.685 917.291 C 694.685 917.291 704.861 909.281 713.299 896.652 C 721.738 884.023 725.244 871.556 725.244 871.556 C 725.244 871.556 715.068 879.566 706.63 892.195 Z" fill="url(#radialGradient-f4uQ53JPnEioS4B34fmECq)"></path>
                    <path d="M 709.182 890.49 C 733.287 885.695 753.61 885.742 753.61 885.742 C 753.61 885.742 734.852 893.562 710.747 898.357 C 686.643 903.152 666.32 903.105 666.32 903.105 C 666.32 903.105 685.078 895.285 709.182 890.49 Z" fill="url(#radialGradient-h6gZzbajNSBLSsaQVzL2MM)"></path>
                    <path d="M 713.898 893.641 C 718.693 917.745 718.646 938.068 718.646 938.068 C 718.646 938.068 710.826 919.31 706.031 895.206 C 701.236 871.102 701.283 850.779 701.283 850.779 C 701.283 850.779 709.104 869.537 713.898 893.641 Z" fill="url(#radialGradient-nFjBaLPijehfCah2vjYXbW)"></path>
                  </g>
                </g>
                <g transform-origin="center" style="transform-box: fill-box;">
                  <g class="sparkle-1200ms" transform-origin="center" style="mix-blend-mode: color-dodge; transform-box: fill-box;">
                    <path d="M 574.618 573.835 C 582.423 579.05 587.373 585.338 587.373 585.338 C 587.373 585.338 579.669 583.171 571.864 577.956 C 564.06 572.742 559.11 566.453 559.11 566.453 C 559.11 566.453 566.814 568.62 574.618 573.835 Z" fill="url(#radialGradient-84J36AgtDB7R1ZGNP3Hfrq)"></path>
                    <path d="M 571.18 574.519 C 565.966 582.323 563.799 590.027 563.799 590.027 C 563.799 590.027 570.087 585.077 575.302 577.273 C 580.517 569.468 582.684 561.764 582.684 561.764 C 582.684 561.764 576.395 566.714 571.18 574.519 Z" fill="url(#radialGradient-39zoQsxRLkdmreChPuAKK8)"></path>
                    <path d="M 572.758 573.465 C 587.654 570.502 600.213 570.53 600.213 570.53 C 600.213 570.53 588.621 575.363 573.725 578.326 C 558.829 581.289 546.27 581.261 546.27 581.261 C 546.27 581.261 557.862 576.428 572.758 573.465 Z" fill="url(#radialGradient-t2MXhEfzycd5XxaFJSRX49)"></path>
                    <path d="M 575.672 575.412 C 578.635 590.308 578.606 602.867 578.606 602.867 C 578.606 602.867 573.773 591.275 570.81 576.379 C 567.847 561.483 567.876 548.924 567.876 548.924 C 567.876 548.924 572.709 560.516 575.672 575.412 Z" fill="url(#radialGradient-oie7jJKHvWT14RvZssiJBW)"></path>
                  </g>
                  <g class="sparkle-1200ms" transform-origin="center" style="mix-blend-mode: color-dodge; transform-box: fill-box;">
                    <path d="M 717.017 755.025 C 724.822 760.24 729.771 766.528 729.771 766.528 C 729.771 766.528 722.068 764.361 714.263 759.146 C 706.458 753.932 701.509 747.643 701.509 747.643 C 701.509 747.643 709.213 749.81 717.017 755.025 Z" fill="url(#radialGradient-j3F84qTYQesHXHodNeaDbz)"></path>
                    <path d="M 713.579 755.709 C 708.364 763.513 706.198 771.217 706.198 771.217 C 706.198 771.217 712.486 766.267 717.701 758.463 C 722.916 750.658 725.082 742.954 725.082 742.954 C 725.082 742.954 718.794 747.904 713.579 755.709 Z" fill="url(#radialGradient-oNUZNUs5zmqjBPusoDAovs)"></path>
                    <path d="M 715.156 754.655 C 730.052 751.692 742.612 751.721 742.612 751.721 C 742.612 751.721 731.019 756.554 716.123 759.517 C 701.227 762.48 688.668 762.451 688.668 762.451 C 688.668 762.451 700.26 757.618 715.156 754.655 Z" fill="url(#radialGradient-nr9xGKhLHhTMzUU6Cqzad8)"></path>
                    <path d="M 718.071 756.602 C 721.034 771.498 721.005 784.057 721.005 784.057 C 721.005 784.057 716.172 772.465 713.209 757.569 C 710.246 742.673 710.275 730.114 710.275 730.114 C 710.275 730.114 715.108 741.706 718.071 756.602 Z" fill="url(#radialGradient-i6SpMCG1u5iBAHfSwwEBRV)"></path>
                  </g>
                  <g class="sparkle-1200ms" transform-origin="center" style="mix-blend-mode: color-dodge; transform-box: fill-box;">
                    <path d="M 799.711 962.976 C 807.515 968.191 812.465 974.479 812.465 974.479 C 812.465 974.479 804.761 972.312 796.956 967.098 C 789.152 961.883 784.202 955.594 784.202 955.594 C 784.202 955.594 791.906 957.761 799.711 962.976 Z" fill="url(#radialGradient-1gfXToiTo2jVd4GTPConoT)"></path>
                    <path d="M 796.273 963.66 C 791.058 971.464 788.891 979.168 788.891 979.168 C 788.891 979.168 795.18 974.218 800.394 966.414 C 805.609 958.609 807.776 950.905 807.776 950.905 C 807.776 950.905 801.488 955.855 796.273 963.66 Z" fill="url(#radialGradient-j7jZVdez9aNLXUk4hSxjvv)"></path>
                    <path d="M 797.85 962.606 C 812.746 959.643 825.305 959.672 825.305 959.672 C 825.305 959.672 813.713 964.505 798.817 967.468 C 783.921 970.431 771.362 970.402 771.362 970.402 C 771.362 970.402 782.954 965.569 797.85 962.606 Z" fill="url(#radialGradient-eWKRHpQ4fkeqpwCUxpBTBa)"></path>
                    <path d="M 800.764 964.553 C 803.727 979.449 803.698 992.008 803.698 992.008 C 803.698 992.008 798.866 980.416 795.903 965.52 C 792.94 950.624 792.969 938.065 792.969 938.065 C 792.969 938.065 797.801 949.657 800.764 964.553 Z" fill="url(#radialGradient-qLv5Md2P4KD8S9bMecZziK)"></path>
                  </g>
                </g>
              </g>
              <path d="M 872.296 943.475 C 936.166 916.885 1106.46 889.434 1114.22 928.434 C 1121.98 967.435 981.505 954.833 675.333 1089.13 C 675.333 1089.13 720.134 1006.82 872.296 943.475 Z" fill="#966cbc"></path>
            </g>
            <g>
              <path d="M 471.319 291.49 L 520.415 336.89 C 522.415 338.79 525.015 339.89 527.715 340.29 L 594.115 348.19 C 602.915 349.19 608.115 358.49 604.415 366.59 L 576.415 427.29 C 575.315 429.79 574.915 432.59 575.515 435.29 L 588.515 500.89 C 590.215 509.59 583.015 517.39 574.215 516.29 L 507.815 508.39 C 505.115 508.09 502.315 508.59 499.915 509.99 L 441.519 542.69 C 433.819 546.99 424.119 542.59 422.419 533.89 L 409.419 468.29 C 408.919 465.59 407.519 463.19 405.519 461.29 L 356.419 415.89 C 349.919 409.89 351.219 399.29 358.919 394.99 L 417.319 362.29 C 419.719 360.99 421.619 358.89 422.819 356.39 L 450.819 295.69 C 454.519 287.69 464.919 285.59 471.419 291.59 Z" fill="#ead900"></path>
              <g filter="url(#filter-sELgC84soStkVSB1Ut8bwp)" style="mix-blend-mode: soft-light; ">
                <path d="M 438.219 448.69 L 438.219 447.39 C 438.319 447.39 486.319 420.49 486.319 420.49 L 509.315 370.59 L 510.515 370.39 C 508.915 369.79 507.415 368.89 506.215 367.69 L 482.119 345.39 C 475.619 339.39 465.219 341.49 461.519 349.49 L 447.719 379.39 C 446.619 381.89 444.619 383.99 442.219 385.29 L 413.519 401.39 C 405.819 405.69 404.519 416.29 411.019 422.29 L 435.219 444.59 C 436.519 445.79 437.519 447.19 438.219 448.69 Z" fill="rgb(255, 255, 255)" stroke="rgb(255, 255, 255)"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    `;
  }
}

customElements.define('character-ledwizard', CharacterLEDWizard);

