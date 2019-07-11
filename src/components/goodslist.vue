<template>
  <div class="goodslist">
    <section class="goods-box">
      <div class="goods-img">
        <a>
          <img
            src="http://mp6.jmstatic.com/product/004/404/4404894_std/4404894_1000_1000.jpg?v=1561554410&amp;imageView2/2/w/640/q/90"
            alt
          />
        </a>
      </div>
      <div class="goods-price-msg bg-f">
        <!--span class="people-img"></span-->
        <p class="tuan-price">
          <b>¥30.9</b>
          <strong>包邮</strong>
        </p>
        <p class="del-price">
          <span>单买价¥39</span>
        </p>
        <p class="tuan_number" style="display: block;">已有1755人参与</p>
        <div id="price-details-box">
          <p class="price-details-box">
            <del>¥299</del>&nbsp;
            <span class="price-details"></span>
          </p>
        </div>
        <div id="countDown" class="surplus_time_pack">
          <div class="end-time detail_down_time">
            <div id="timeWrap" class="font-14 count-down jscount-down">还剩18:21:06</div>
          </div>

          <span class="refund_msg">逾期未成团自动退款</span>
        </div>
      </div>
    </section>

    <section class="goods-msg bg-f mb-10">
      <div class="goods-text-box">
        <span class="goods-num">[2人团]</span>
        BEPERFECT 二代24K黄金棒 电动按摩 赠硅胶洁面仪
      </div>
    </section>

    <div class="select_site">
      <strong class="site_label">配送</strong>
      <p class="site_choice">
        至
        <i></i>
        <span>北京市-市辖区-东城区</span>
      </p>
      <div class="select_warn" style="display: none;"></div>
      <section class="site_box" style="display: none;">
        <article class="site_map">
          <header class="site_map_header">配送至</header>
          <ul class="site_map_list">
            <li class="site_item selected">北京市-市辖区-东城区</li>
            <li class="site_item">其他区域</li>
          </ul>
          <i class="close_site"></i>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
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
div {
  font-size: 14px;
}
.goodslist {
  background: #f5f5f5;
  height: 100%;
  box-sizing: border-box;
}

/* 图片 */
.goods-img {
  width: 100%;
  position: relative;
}
.goods-img a {
  display: block;
  width: 100%;
}
.goods-img img {
  width: 100%;
  display: block;
}

/* 价格 */
.goods-price-msg {
  padding: 10px 12px 12px;
  line-height: 40px;
  margin-bottom: 10px;
  font-weight: 400;
}
.bg-f {
  background-color: #fff;
}
.goods-price-msg .tuan-price {
  display: inline-block;
  margin-left: 0.125rem;
}
.tuan-price {
  font-size: 16px;
}

.tuan-price {
  color: #f33873;
  font-family: arial;
}

.goods-price-msg .del-price {
  font-size: 15px;
}
.goods-price-msg .del-price {
  margin-left: 0.3125rem;
}
.goods-price-msg .del-price {
  display: inline-block;
}
.goods-price-msg .tuan-price b {
  font-weight: 400;
}

.tuan-price b {
  font-size: 24px;
}
.goods-price-msg .tuan-price strong {
  font-size: 11px;
  line-height: 11px;
  padding: 2px;
  border-radius: 4px;
  margin-top: -5px;
  margin-left: 2px;
}

.goods-price-msg .tuan-price strong {
  display: inline-block;
  color: #fff;
  background: #fe4070;
  vertical-align: middle;
  font-weight: 400;
}

.del-price {
  color: #666;
}
.del-price > span {
  font-size: 14px;
}

.del-price > span {
  color: #666;
}

.tuan_number {
  font-size: 14px;
  line-height: 40px;
}

.tuan_number {
  float: right;
  color: #666;
  margin-top: 0.1875rem;
}

.price-details-box {
  margin-bottom: 12px;
}

.price-details,
.price-details-box {
  font-size: 14px;
  line-height: 14px;
  background-size: 12px 12px;
}

#countDown.surplus_time_pack {
  margin-bottom: 0;
  line-height: 18px;
}

#countDown {
  width: 100%;
  overflow: hidden;
  background: #fff;
}
.surplus_time_pack {
  font-size: 13px;
  /* line-height: 14px; */
}
.surplus_time_pack {
  color: #666;
  /* background: #fff; */
}

.detail_down_time {
  width: auto;
  height: auto;
  line-height: inherit;
  position: static;
  margin: auto;
  text-align: center;
  float: left;
  font-size: 0.8125rem;
}
.refund_msg {
  line-height: 15px;
}

.refund_msg {
  float: right;
}

/* 第二 */
.goods-msg {
  padding: 12px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
}
.mb-10 {
  margin-bottom: 10px;
}
.goods-text-box {
  max-height: 80px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

/* 第三 */
.select_site {
    overflow: hidden;
    background: #fff;
    color: #333;
    position: relative;
    padding-left: .61333rem;
    padding-right: .61333rem;
    padding-bottom: .61333rem;
    font-size: .75rem;
    padding-top: .61333rem;
    margin-bottom: .625rem;
}
.site_label {
    font-weight: 400;
    float: left;
    line-height: .8rem;
    width: 17%;
}
.site_choice {
    float: left;
    cursor: pointer;
    color: #333;
    font-size: .74rem;
    line-height: .9375rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 77%;
    height: .9375rem;
    overflow: hidden;
}








</style>

