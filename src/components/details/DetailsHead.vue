<template>
  <header class="headerBar">
    <nav class="touch-header">
      <a href="###" id="touch-header-back" class="touch-header-back"></a>
      <div class="touch-header-title">BEPERFECT 萌宠可爱款硅胶洁面仪</div>
      <a class="touch-header-home" href="###"></a>
    </nav>
  </header>

  <!-- <header class="headerBar">
    <div id="jumei_location" class="jumei_location" style="display: block;">
      <img
        src="(data:image/png;base64,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) center no-repeat"
        class="guide_logo"
      />
      <div class="txt">
        <p class="txt_11">聚美优品·我为自己代言</p>
        
      </div>
      <a id="jumei_lo">前往聚美</a>
      <div id="close_banner">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEUAAADu7u7y8vLt7e3w8PDu7u7u7u7v7+/v7+/u7u7x8fHv7+/w8PD////////39/f19fXS0tKYmJjNzc3FxcUebRjIAAAADnRSTlMAo/j27N3EsYBZT0AgCw2xnhUAAADVSURBVDjLhZNBFoQgCEC1zLRMsLr/WaenEvloko2L/0tAUI8IXk/jOGkf1Fsss8EaZl4EXi0CxBIQAe3acjcQJmlwD7zpG7MBeruFwqVB3BUuFVfzGwSnPEqmlrgMm+vHvwLgcglz5XAmAsdJxqxUMPSDtKfKd1LBBOURIht0UKBXGq+TDfqeBK2mLLCRJRYmNWaBjcxZGLtCe8Uhr5BJpjbJZ5mHKBPQU6OYN4YJr61O3OruY30/N9juwHyOHIDrDW137D8WB+Lg5OpFkKvXX97u+v8AVSErTb/YhHcAAAAASUVORK5CYII="
          alt="关闭"
        />
      </div>
    </div>
    <nav class="touch-header">
      <a href="javascript:history.go(-1);" id="touch-header-back" class="touch-header-back"></a>
      <div class="touch-header-title">安娜贝拉海藻面膜30ml*10片</div>
      <a class="touch-header-home" href="//h5.jumei.com/"></a>
    </nav>
  </header> -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}

.headerBar {
    width: 100%;
    background: #ffffff;
        .touch-header {
            text-align: center;
            height: 2.347rem;
            position: relative;
            margin: 0;
            padding: 0;
            width: 100%;
            z-index: 1;
            border-bottom: 1px solid #eee;
                .touch-header-back {
                    position: absolute;
                    left: 0rem;
                    top: 0;
                    width: 2.0rem;
                    height: 2.347rem;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAgBAMAAAAGZY7BAAAAFVBMVEUAAACenp6ampqampqampqioqKZmZkqMn9dAAAABnRSTlMAFdTEtRaUUOCdAAAALElEQVQY02OAAmEHKINRzQDKEkoSgAkp0lmIwQwohGAhZGE6BlbQACYY7AAA4FEM29fcwlcAAAAASUVORK5CYII=) center no-repeat;
                    background-size: 0.4rem 0.8rem;
                    // background: url(../../assets/DetailsImg/gt.png) center no-repeat;
                }
                a {
                  color: #333;
                }
                .touch-header-title {
                    display: block;
                    text-align: center;
                    margin: 0px 2.1875rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 14px;
                    color: #333;
                    height: 2.347rem;
                    line-height: 2.347rem;
                }
                .touch-header-home {
                    width: 1.067rem;
                    height: 1.067rem;
                    position: absolute;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAQlBMVEUAAACcnJyampqZmZmampqZmZmZmZmampqcnJyampqampqampqhoaGampqampqbm5ubm5uampqampqampqampqZmZltVD3vAAAAFXRSTlMAH1/ws3Dleja8j2kNq6NEK8Wbg1AbiYnwAAAAvUlEQVQ4y+3TWw6DMAxE0XFt0kCh79n/VissBKJgvAHujyVyEAERbKqmahVpDb0mc1eyE+nIa+ou47wksnE3y9y5jPd5c5dJX7kBoYyv+52BC/ey9N19y2YjH+Qn+K7fP9dhtw/5wFxVvhHUkRVTT+UdYW9qnd2Agwbqc5xSaDjMWMRdi6R2lMZXn8H+xQGFgjRhgdGLET2DtJpDbQXeMfRxwhMGa4Vy9M8u3Wl9cApsdZRFGaayeoBpwGxyP+1/EvyNg9nzAAAAAElFTkSuQmCC) center center no-repeat;
                    background-size: contain;
                    top: 0.64rem;
                    right: 0.693rem;
                }
        }
}


div {
    color: inherit;
}
// .headerBar {
//     width: 100%;
//     background: #ffffff;
//       #jumei_location {
//         background: url(../../assets/DetailsImg/jumei.png);
//         background-repeat: repeat;
//         height: auto;
//         overflow: hidden;
//         position: relative;
//         top: 0px;
//         width: 100%;
//         z-index: 1;
//           .guide_logo {
//             width: 42px;
//             margin-top: 6px;
//             margin-left: 8px;
//             margin-right: 12px;
//             float: left;
//             display: block;
//           }
//           .guide_logo {
//               margin-bottom: 8px;
//           }
//           img {
//             border: 0;
//           }
//           .txt {
//               color: #444;
//               width: 148px;
//               margin-left: 58px;
//               padding-top: 2px;
//               overflow: hidden;
//               white-space: nowrap;
//               -o-text-overflow: ellipsis;
//               text-overflow: ellipsis;
//                   .txt_11 {
//                       font-size: 14px;
//                       font-weight: bold;
//                       height: 27px;
//                       line-height: 27px;
//                       font-family: '\9ED1\4F53',Arial,Verdana,Sans-serif;
//                   }
//           }
//           #jumei_lo {
//               position: absolute;
//               top: 13px;
//               width: 84px;
//               height: 30px;
//               line-height: 30px;
//               text-align: center;
//               color: #fff;
//               border: none;
//               border-radius: 20px;
//               right: 22px;
//               font-size: 12px;
//               background: #FE4478;
//           }
//           #close_banner {
//               position: absolute;
//               top: 5px;
//               right: 5px;
//               overflow: hidden;
//                   img {
//                       width: 12px;
//                       height: 12px;
//                   }
//           }

//     }
//     .touch-header {
//             text-align: center;
//             height: 2.347rem;
//             position: relative;
//             margin: 0;
//             padding: 0;
//             width: 100%;
//             z-index: 1;
//             border-bottom: 1px solid #eee;
//                 .touch-header-back {
//                     position: absolute;
//                     left: 0rem;
//                     top: 0;
//                     width: 2rem;
//                     height: 2.347rem;
//                     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAgBAMAAAAGZY7BAAAAFVBMVEUAAACenp6ampqampqampqioqKZmZkqMn9dAAAABnRSTlMAFdTEtRaUUOCdAAAALElEQVQY02OAAmEHKINRzQDKEkoSgAkp0lmIwQwohGAhZGE6BlbQACYY7AAA4FEM29fcwlcAAAAASUVORK5CYII=) center no-repeat;
//                     background-size: 0.4rem 0.8rem;
//                     // background: url(../../assets/DetailsImg/gt.png) center no-repeat;
//                 }
//                 a {
//                   color: #333;
//                 }
//                 .touch-header-title {
//                     display: block;
//                     text-align: center;
//                     margin: 0px 2.1875rem;
//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                     font-size: 14px;
//                     color: #333;
//                     height: 2.347rem;
//                     line-height: 2.347rem;
//                 }
//                 .touch-header-home {
//                     width: 1.067rem;
//                     height: 1.067rem;
//                     position: absolute;
//                     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAQlBMVEUAAACcnJyampqZmZmampqZmZmZmZmampqcnJyampqampqampqhoaGampqampqbm5ubm5uampqampqampqampqZmZltVD3vAAAAFXRSTlMAH1/ws3Dleja8j2kNq6NEK8Wbg1AbiYnwAAAAvUlEQVQ4y+3TWw6DMAxE0XFt0kCh79n/VissBKJgvAHujyVyEAERbKqmahVpDb0mc1eyE+nIa+ou47wksnE3y9y5jPd5c5dJX7kBoYyv+52BC/ey9N19y2YjH+Qn+K7fP9dhtw/5wFxVvhHUkRVTT+UdYW9qnd2Agwbqc5xSaDjMWMRdi6R2lMZXn8H+xQGFgjRhgdGLET2DtJpDbQXeMfRxwhMGa4Vy9M8u3Wl9cApsdZRFGaayeoBpwGxyP+1/EvyNg9nzAAAAAElFTkSuQmCC) center center no-repeat;
//                     background-size: contain;
//                     top: 0.64rem;
//                     right: 0.693rem;
//                 }
//     }
//  }
</style>
