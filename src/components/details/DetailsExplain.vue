<template>

<section class="Explain">
  <article class="prod_detail bgc-f">
      <div class="yanzhiShow" style="display: none;">
        <div class="yizhidai_wrap">
          <span class="money_vip">借钱专享</span>
          <span class="about_money_text">约¥</span>
          <span class="about_money">0</span>
          <span class="about_money_text stages_num">x期 共</span>
          <span class="delete_price">聚美价 ￥</span>
        </div>
      </div>
      <div class="memeberShow" style="display: none;">
        <div class="price_info">
          <span class="cur_price">￥39</span>
          <div class="downWrap" style>
            <div class="count_down">
              <span>还剩1天14:23:53</span>
            </div>
          </div>
        </div>
        <div class="member-tip-price">
          <del class="cost_price">￥499</del>
          <!---->
          <!---->
        </div>
      </div>
      <div class="normalShow">
        <div class="price_info">
          <span class="cur_price">￥39</span>
          <del class="cost_price">￥499</del>
          <!---->
          <!---->
          <strong>1995人已购买</strong>
        </div>
        <div class="downWrap" style>
          <div class="count_down">
            <span>还剩1天14:23:53</span>
          </div>
        </div>
        <!---->
      </div>
    </article>














     <div class="additional-info bgc-f">
      <!---->
      <!---->
      <!---->
      <!---->
      <div class="select_site">
        <strong class="site_label">地址</strong>
        <p class="site_choice">
          至
          <i></i>北京市-市辖区-东城区
        </p>
        <!---->
        <!---->
        <!---->
      </div>
      <a href="http://h5.jumei.com/pages/2280" class="postage-link additional-list">
        <div class="postage-wrap">
          <div class="postage-type">运费</div>
          <div class="postage-content">
            <span class="tip-word">件数满1件， 全国包邮</span>
            <span class="arrow-icon-right"></span>
          </div>
        </div>
      </a>

      <div class="introduction-wrap additional-list">
        <div class="introductions-content introduction-fold">
          <div class="introduction-type">说明</div>
          <div class="introduction-item">
            <!---->
            <p class="introduction-list-title">
              <span class="instruction-title-icon"></span>
              <span class="instruction-title-text">7天拆封无条件退货</span>
            </p>
            <p class="introduction-list-title">
              <span class="instruction-title-icon"></span>
              <span class="instruction-title-text">非自营(营业执照)</span>
            </p>
            <p class="introduction-list-title">
              <span class="instruction-title-icon"></span>
              <span class="instruction-title-text">7天拆封无条件换货</span>
            </p>
            <p class="introduction-list-title">
              <span class="instruction-title-icon"></span>
              <span class="instruction-title-text">支持分期</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

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
.bgc-f {
  background-color: #fff;
}








.Explain {
  height: 100%;
}

.prod_detail {
  width: 20rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 0.64rem;
  padding-right: 0.64rem;
  padding-top: 0.8rem;
  position: relative;
}
.bgc-f {
  background-color: #fff;
}
div {
  color: inherit;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
.prod_detail {
  width: 20rem;
  box-sizing: border-box;
  padding-left: 0.64rem;
  padding-right: 0.64rem;
  padding-top: 0.8rem;
  position: relative;
}
.price_info {
  overflow: hidden;
  width: 100%;
  color: #f33873;
  height: 1.49333rem;
}
.price_info .cur_price {
  float: left;
  font-size: 28px;
  line-height: 1.49333rem;
}
.price_info .cost_price {
  float: left;
  margin-left: 0.21333rem;
  color: #666666;
  font-size: 13px;
  line-height: 0.74667rem;
  margin-top: 0.53333rem;
  text-decoration: line-through;
}
.price_info strong {
  float: right;
  text-align: right;
  font-weight: 400;
  color: #666;
  font-size: 13px;
  margin-top: 0.375rem;
}
.downWrap {
  overflow: hidden;
}
.member-tip-price {
  margin-top: 0.26667rem;
  overflow: hidden;
}
.count_down {
  margin-top: 0.66667rem;
  overflow: hidden;
  color: #666666;
  font-size: 13px;
}
.memeberShow {
  width: 100%;
}
.normalShow {
  width: 100%;
}
.price_info strong {
  float: right;
  text-align: right;
  font-weight: 400;
  color: #666;
  font-size: 13px;
  margin-top: 0.375rem;
}
.count_down span {
  float: left;
  width: 50%;
  text-align: left;
}

.desc_wrap {
  padding-top: 0.53333rem;
  padding-bottom: 0.53333rem;
  padding-left: 0.64rem;
  padding-right: 0.64rem;
  line-height: 1.06667rem;
  width: 20rem;
  box-sizing: border-box;
}
.normal_desc {
  line-height: 1.25rem;
}









/* 地址、运费。说明 */

.bgc-f {
  background-color: #fff;
}

.additional-info {
  margin-bottom: 8px;
}
.select_site {
  overflow: hidden;
  background: #fff;
  color: #999;
  font-size: 13px;
  position: relative;
  margin-left: 0.61333rem;
  margin-right: 0.61333rem;
  padding-top: 0.61333rem;
  padding-bottom: 0.61333rem;
  border-bottom: 1px solid #eee;
}
.site_label {
  font-weight: normal;
  float: left;
  line-height: 15px;
  width: 22%;
}
.site_choice {
  float: left;
  cursor: pointer;
  color: #333;
  font-size: 13px;
  line-height: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 77%;
  height: 15px;
  overflow: hidden;
}
.site_choice i {
  display: inline-block;
  width: 0.50667rem;
  height: 0.64rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAAAAXNSR0IArs4c6QAAA0RJREFUOBGVVUtIlFEUPmd+nXQRPTRIwog0sSLcKNQiclR8ZFkWU0a4iMCiopwhSctisCBBmbFVZC16mL0ztCBJHYki3GlGJBm5kRZpZQt1bJzTd3/9h39GRb3wz73nnO989zzuvcM0y5CdZatpzH8Ipl34EvDFEskwCX8j5pdkDTzg1rof4a5sVojLFUFv/1aSyFnoB4mpiQLSS6wNEQViSGgLsRTCFg9iNyUlV3H9sX8GR5BM9rqW08jIMzhsJI2c1OZ+xMxiAM2zZDjt2NADXT9ZaR+3en4pu0X9iP2xBqKnWMZAk8btnodzESk8d7ifkFXSsFxKE/RcSm5EKr1ORsMfKhDRZqSVzx2eQWWYb+g1s4qqaSJ97buo8Cx5FatobByFpePs9TTORxJun0o5cJuiIxNYMhynKEBnyOtOCk9Nss6tpUlfOfbchGJ8oSVR1fy6esBMKCJMNudndPmmBYVEqPxiBlFu+Try+3rQtWRE3QZMIvnGeySjTB2V4ND9WJqwWX4EQBvQ9ntBq7Hw+S6BpAup506rrki6o4XE74JcbMCmZu5GUMVogMROnaNQM6QUNKUlRMu6nBKiUwILziHHqG4OQFg/A0D0HbrUMH0qsEofNixIXQZUmqhLYCus10MRWg3R5DuxOX4D2E5iSUcqR5B6eigOku7PPRYYG1Bku+Q4VppB7K3tIo2zkeo26BuJA9spgvLYW/fejJP88hUI6CAiBg9ai9378J03gxa6FpuzQmyl/YrHordWpAoRlOuvxUJZgJOc0jhEg9vDlxWPagBxZ919mHpo1I86LWJMcC38PuHA31VeOpnurkWcRP0OIN09C6FDevsRlZ0iI08YBz5Ixu21H1HEC0j31nzp4gquQUT12LyS39R0G5sH3zOlmLpnjlbcMyvtWJbFLpffABqz2F1WGhrxYtNRpJdtRKXswciUoBu0aPVcx1Pnn9nr93PkGojiSIsqMhMp/xAypeD2q8OYCrA6ivqVKJ0xUKfTWB8mq1YwjTNM+hySptkimU4bTQaaUZciHNRXqFMh6tAAeTd31HWYscZ6TjIFQCQFuCp3QOCGiD8ZSzF73c2G86JnEGZKemmvZDmy5nP+D74lOy0KY7RNAAAAAElFTkSuQmCC)
    no-repeat center center;
  background-size: 100% 100%;
  margin: -2px 3px 0 3px;
  vertical-align: middle;
}
.select_site:after {
  content: "";
  position: absolute;
  width: 0.32rem;
  height: 0.64rem;
  top: 0.69333rem;
  right: 0.42667rem;
  /* background-image: url(../img/lt.png); */
  background-repeat: no-repeat;
  background-size: contain;
}

a {
  color: #333;
}
a,
a:link {
  text-decoration: none;
}
.postage-link {
  display: block;
}

.additional-list {
  margin-left: 0.64rem;
  margin-right: 0.64rem;
  border-bottom: 1px solid #eee;
}
.postage-wrap {
  overflow: hidden;
  line-height: 0;
}
.postage-type {
  padding: 0.64rem 0;
}
.postage-type {
  width: 22%;
  color: #999;
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  vertical-align: top;
  float: left;
}
.postage-wrap .postage-content {
  color: #333;
  font-size: 13px;
  line-height: 13px;
}
.postage-content {
  display: inline-block;
  width: 78%;
  overflow: hidden;
  position: relative;
  padding-top: 0.64rem;
  padding-bottom: 0.50667rem;
}
.postage-content .tip-word {
  overflow: hidden;
  width: 96%;
}
.postage-content span {
  display: inline-block;
}
.arrow-icon-right {
  width: 0.32rem;
  height: 0.64rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAaBAMAAAB1IXBvAAAAElBMVEUAAACenp6ampqampqampqZmZko0meuAAAABXRSTlMAFdTEtTuxabkAAAAmSURBVAjXY3AWYAADU0UILRQEEWBUpaZAMIyGicPUUcZFuBvmDwDUOwlrl6IFYQAAAABJRU5ErkJggg==) no-repeat;
  background-size: contain;
  position: absolute;
  top: 0.69333rem;
  right: 0.42667rem;
}

.additional-list:last-child {
  border-bottom: none;
}
.additional-list {
  margin-left: 0.64rem;
  margin-right: 0.64rem;
  /* border-bottom: 1px solid #eee; */
}

.introduction-fold .introduction-type {
  padding: 0.64rem 0;
}
.introduction-type {
  width: 22%;
  color: #999;
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  vertical-align: top;
  float: left;
}

.introduction-fold .introduction-item {
  padding-top: 0;
  padding-bottom: 0.82667rem;
  padding-right: 0.64rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAOBAMAAADDIxFwAAAAFVBMVEUAAACenp6ampqampqampqioqKZmZkqMn9dAAAABnRSTlMAFdTMxBasZ/mSAAAATElEQVQI12NwFmCAAUYTBjNFOE8omUEoSQAmpaYIxmAAEgcTMCkICZOCUjBBCA0XgzAgQjBJiBRMUhAkBZdUAknBJdOAUnDAagyRAgAImgod62z06gAAAABJRU5ErkJggg==)
    no-repeat no-repeat;
  background-size: 0.64rem 0.32rem;
  background-position: right 0.8rem;
  margin-right: 0.32rem;
}
.introduction-item {
  overflow: hidden;
  line-height: 0;
}
.introduction-fold .introduction-item p {
  padding-right: 0.53333rem;
  padding-top: 0.64rem;
  display: inline-block;
}


.introduction-list-title span {
  display: inline-block;
}
.instruction-title-icon {
  width: 12px;
  height: 12px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABVxJREFUWAnVmU1sVFUUx899MzTtBssGpMQ4LuoCF04iatGolC5MrNCGxPhVgUajbkwoKLLCCYnxCygudWMlTWMkUVErcdG0fsSWCIkm6sJuNIZq48LSRWnqvHf8n/Pem7nT+XjPzpuW3mQ6d96995xf78e555xnKKHCuZxDk3NbaCnVpiKb3Bna2TprcjkvCRVmpUL4oZdupEV3DzH3EnEWcrYwU8qWZwy5+D1LZH4gYz6h5tRn5ou3/rL7xK3/b1DuPLKP2H0RCjoYBBAwTeR8RQ5dAfQMOWZGlXvchtY28mgbkfcA+rajL75oikzqpBk/9VFcSOkXG5S7Bu7D/LzJxB3GmF8wdBhQ583YKdSjC3cd2U4e94C1j5m3GzJTmP+jZmzwm+jRMUD5YK6Zfp97B8u6H8L/ANxxun/j2ZXuPd3LX8/vB/QJ/NM3YUnO0s2tz5mh3GIt4Jozyg8e2kpL2FtEO7CsJyjT+kaUwFrK7DadgN/mXsb2OI7nl6iJe82XZ/60+9j1qqDcefh2LNModtVGSpknzNjpz+2BSdW56/DD5PIINuE8FrjbjJ/+sZLsiqDBTH6PAXl8MHjw50qDk3rGnQO3QdYoPmnM7J2VZtZZrkyXRJZbZnIVIEV/MBHdqhO6lWEZWBmoHBz02aHL3eCZtFkUFltMdfsMdjOsn1XEBMnploPTqD1pqSurqk7oFgY1h1aPElCxk2qCcLqtPqtbFcsiZhAstuICqNw4YszFTiZlgmxFceuqGwzCordgMLAAKtei3jgw5nGFNqyfXChy+/lXtapRUHUwcHfLtbjSGycuNO8e2ANz9C2+j1Ub4zOYYbR3BGzBYbqW3ysOhtzd1QYn8RwH5DEc1I9x198LU/Qqdx/bVFUuWJRJPDSUcOl7YPmn4zoYVYXXaFBIj4dxon1XkPmiGX39n2pDhEWY8I/BjSyAij8JV61BZTkkAH6ilhZ4UlFFmNTXJUe9GTi96k9GjQva+a5nbuE7+u+O070K5G5z4bW/I8eLjysOOaIHDR90OcTpjVEEkpb+naa8N8XZA3D/GBNUudQFKSLBpGwIcZxCjBN65pV1Fp+67mYchGCf0bOU7X+72Fis1Q0pokImxGEOGVfCA6GvOjPaHvwxl9+7CB9yqPiMX+Bsf8lNlgikKAiZwOjQBvKdVaatReURtd7M07BmHxR6sXeUswdz8jsxSBUWMIHR0ZBWokUJxGIWNcibMk9hjHj/fmF+he95fgQhRsEEBac73sEJ5djfYNJIFmG3E9xEs360aPeqXTcTuTy1Zx7FNXFBe+Jc0obmx0M7WTekCNUIljQ3EBh8xN0IaWujlbeac7klajX7sA3GCKDhLk8EUtUJk7CFBh9LiBPVriFtOU/NJ2ZiaJHSTXvJdUfMtYWrJp8/R6mWXbHsZA3JwiJM4fZKa1/JYCx47MfdFCtOt3WYy+8u4PeT9rO668gBYGVYsisiS5c+SLNM4XlfcFPVraceAT4D90HGVJgCCp0SbIXUSclgkCQH1rqAQVnAFKJgdouFdw1M4tc2ytxw61p5+X5i4uqv4LhiJgZ3hnTFGZUnyAVJmoUkg7FWBbqVASw2QsmMSgN3Hnof+6AP92zPakeimjXxGM47D5vxMwds0NIZlRYkrPD3kqRZggyG3b9hddUlqR3R7TOU6CqbUWldFykdAfVzP6Yb1TQs2aQuiTQ0oKhs6IBo2HQkyapk9CrOaMizLtKOBdj1kMgNYeUbfub1nRq3YRX4en/ZUAYsr2+QuMBzeYGAcDvi9Q3ReWpJfxre3cvlRf2ueZiiBtvt/MiHKZr/bnMhWEz4hdh/ShitVNYLLpAAAAAASUVORK5CYII=)
    no-repeat no-repeat;
  background-size: contain;
  vertical-align: top;
  position: relative;
  top: 1px;
}

.introduction-fold .introduction-item p {
  padding-right: 0.53333rem;
  padding-top: 0.64rem;
}
.introduction-item p {
  color: #333;
  font-size: 13px;
  line-height: 13px;
}


</style>
