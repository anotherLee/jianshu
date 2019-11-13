import {createGlobalStyle} from 'styled-components'

const GlobalIcon = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1573560722558'); /* IE9 */
    src: url('./iconfont.eot?t=1573560722558#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1573560722558') format('woff'),
    url('./iconfont.ttf?t=1573560722558') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1573560722558#iconfont') format('svg'); /* iOS 4.1- */
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

