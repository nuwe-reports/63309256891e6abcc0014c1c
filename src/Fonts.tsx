import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'Get Schwifty';
        src: url('./getschwifty.woff2') format('woff2'),
        url('./getschwifty.woff2') format('woff2');
        font-weight: 72;
        font-style: normal;
        font-stretch: normal;
        font-display: swap;
      }
`}
  />
);

export default Fonts;
