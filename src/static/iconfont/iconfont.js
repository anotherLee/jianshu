import {createGlobalStyle} from 'styled-components'

const GlobalIcon = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1573645573586'); /* IE9 */
    src: url('./iconfont.eot?t=1573645573586#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1573645573586') format('woff'),
    url('./iconfont.ttf?t=1573645573586') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1573645573586#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
export default GlobalIcon

