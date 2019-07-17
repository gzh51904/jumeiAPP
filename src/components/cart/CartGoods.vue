<template>
  <div>
    <div class="count-down">
      <div class="clock-icon"></div>
      <div class="timer-text">11:32.1</div>
      <div class="clock-msg">结算时间结束后，商品可能被抢空，请尽快结算</div>
    </div>
    <div class="groups">
      <div>
        <div class="group">
          <div class="group-header">
            <span class="check-box-checked"></span>
            <div class="group-title">思品伊族发货</div>
            <span class="arrow-wrapper">
              <span></span>
            </span>
          </div>
          <div class="group-info" style="display: none;">
            <div></div>
            <div class="group-info-bottom"></div>
          </div>
          <div class="group-content">
            <div>
              <div class="item">
                <span class="check-box-checked"></span>
                <div class="item-content">
                  <div class="img-title">
                    <div class="img-wrap">
                      <img
                        src="https://p2.jmstatic.com//product/074/768/df3184362074768216_std/s_df3184362074768216_200_200.jpg"
                        alt="BEPERFECT 小巨蛋热喷蒸脸器"
                      />
                    </div>
                    <div class="text-wrap">
                      <span class="title">BEPERFECT 小巨蛋热喷蒸脸器</span>
                      <div class="sub-title-1">
                        <span>BP-XXX 白色 BP-XXX 白色</span>
                        <span>×2</span>
                      </div>
                      <div class="price-edit">
                        <span class="price">¥59</span>
                        <span class="edit">编辑</span>
                      </div>
                    </div>
                    <div class="text-wrap" style="display: none;">
                      <span class="title">BEPERFECT 小巨蛋热喷蒸脸器</span>
                      <div class="number-editor">
                        <span class="decrease"></span>
                        <span>2</span>
                        <span class="increase"></span>
                      </div>
                      <div class="price-edit">
                        <span class="price editing">¥59</span>
                        <div class="actions">
                          <span class="delete">删除</span>
                          <span class="gap-line"></span>
                          <span class="action-finish">完成</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="discount-detail">
                    <div class="discount-item">
                      <span>满减</span>
                      <div class="promo-rule">
                        <span>每满99元减20元</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group-tail red">
            <div class="icon">免</div>
            <span>已享新用户满39元包邮</span>
          </div>
        </div>
      </div>
      <!-- <div>
        <div class="group">
          <div class="group-header">
            <span class="check-box-un-checked"></span>
            <div class="group-title">聚美优品发货</div>
            <span class="arrow-wrapper">
              <span></span>
            </span>
          </div>
          <div class="group-info" style="display: none;">
            <div></div>
            <div class="group-info-bottom"></div>
          </div>
          <div class="group-content">
            <div>
              <div class="item">
                <span class="check-box-un-checked"></span>
                <div class="item-content">
                  <div class="img-title">
                    <div class="img-wrap">
                      <img
                        src="https://p1.jmstatic.com/product/002/347/2347651_std/2347651_200_200.jpg"
                        alt="小迷糊玻尿酸补水亮颜面膜套装"
                      />
                    </div>
                    <div class="text-wrap">
                      <span class="title">小迷糊玻尿酸补水亮颜面膜套装</span>
                      <div class="sub-title-1">
                        <span>25ml*7片*1盒+25ml*7片*2盒</span>
                        <span>×1</span>
                      </div>
                      <div class="price-edit">
                        <span class="price">¥59.9</span>
                        <span class="edit">编辑</span>
                      </div>
                    </div>
                    <div class="text-wrap" style="display: none;">
                      <span class="title">小迷糊玻尿酸补水亮颜面膜套装</span>
                      <div class="number-editor">
                        <span class="decrease"></span>
                        <span>1</span>
                        <span class="increase"></span>
                      </div>
                      <div class="price-edit">
                        <span class="price editing">¥59.9</span>
                        <div class="actions">
                          <span class="delete">删除</span>
                          <span class="gap-line"></span>
                          <span class="action-finish">完成</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="discount-detail">
                    <div class="discount-item">
                      <span>满赠</span>
                      <div class="promo-rule">
                        <span>小迷糊满299送礼包</span>
                      </div>
                    </div>
                    <div class="discount-item">
                      <span>满赠</span>
                      <div class="promo-rule">
                        <span>小迷糊满199送礼包</span>
                      </div>
                    </div>
                    <div class="show-more"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="over-lay" style="display: none;">
      <div class="dialog">
        <div class="dialog-header">
          <span></span>
          <span class="dialog-close">
            <span></span>
          </span>
        </div>
        <div class="dialog-content"></div>
        <div class="dialog-tail"></div>
      </div>
    </div>

  </div>

  <!-- 全选，结算 -->
  
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

html {
    background-color: #f5f5f5; 
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    color: #333;
    font-size: .75rem;
    line-height: 1;
}

/* 限时 */
.count-down {
    padding: 0 .5rem;
    height: 1.875rem;
    color: #999;
    background: #fff;
    display: flex;
    align-items: center;
}

.count-down .clock-icon {
    width: .9375rem;
    height: .9375rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwlJREFUSA3FVzGLE1EQnnmXwkYRixMP1C7+gHRiYXJooYUBBbGzVpAkgoVYbCEphLsEQWs7ETy4FFooJhZiZX7AXadCBAtPFEXhbsdv5t0uu7mYXcLt3UCyb3dn5pv33ryZb5lyiASBo3c/T1MY1imUCjEvkMiCmTKPMB6R4yE5t0pnDr7nIAiz3PI0BbkeHKCP328R8W0RmZ+mG71j5q9EskQnDz/kJ8Gf6Pn49b/AUm1dxkw6QnJcjeBwHf+rNCevSfgTHTk0MmfffiwQywna4nMArCPAsukTf4ZRkwfLK6Y39rcDGIZMtdZ9XO+aA8YSstzhfrc/ZjvxVmqNGgJ7APvKtn2b+sv3ELgkDVLAHrT5VISuMvEmZtCgQefxuFHSwaSx+ak2b2CFulixEjM9o37nWtKPSxnaTA10g+b4PL/tPkoqp3Sn3KiN2poP4g2diK5i0iSese6pSPjcZqqgb5YHScVZx7LYqtKWvPIzd1eiPbcZW/YikbxzaeQBlWrzhf6yAvK+sGUqmqx6UiB+qXFkNHuxREPdU32RJdjHC/rL0rP3Pk+GdkLseALYigPOqSlo9o5lXy7HGUrmE769GmoCCpJVJEQ+j8xby3tkMnAmvlbfCGBdsbQKOiuDpup6Ey129SEKkApKL4D9QbeKtKsgE5xp1VMBprOCrzdaBouWCANNxsVdJqq9RYJHGOhspRjn7++4mMTPcgzCs41UDU6aIJle8qBzMX4WY7DoUvsu82vzWKyQYwCnaH+Zkg4qwmD6UrImTlS21kaE1pdPMJOj+TQTWto+VUAcnDEHvbF+qoMCJcZwHwAMumISXioQctu11G1Q4p4zjoT9Qus6ZU28IHT1japVttwAL3OemIEjqXjmMFN2T4sXgKy+vY4sKabvTkrMwJGgUCFjDtPczPBusXVTfSuGkkD1EM9uX4iARQA2iPVvK1MAY1gx5jDD5JIm2+xjxbMPbkfsw/BSisYw94bsxUsdBWCJsNf0NgLX605CT2sgLL3CCH0KfD8+YVIBFPDR9g8XKbh4Mp47hQAAAABJRU5ErkJggg==);
    background-size: 100% 100%;
}

.count-down .timer-text {
    width: 3.4375rem;
    margin-left: .15625rem;
    font-size: .875rem;
    color: #fe4070;
}
.count-down .clock-msg {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}


/* 购物车商品列表===================== */
.groups {
    margin-top: .5rem;
}

.groups .group {
    margin-bottom: .5rem;
    background: #fff;
}


/*=-----店铺名-=----------------  */
.groups .group .group-header {
    position: relative;
    background: #fff;
    height: 2.5rem;

    display: flex;

    align-items: center;
    padding-left: .5rem;
    border-bottom: 1px #eee solid;
}

.check-box-un-checked {
    display: block;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 100% 100%;
    width: 1.25rem;
    height: 1.25rem;
}

.groups .group .group-header .group-title {
    margin-left: .5rem;
    max-width: 47%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.groups .group .arrow-wrapper {
    padding: 1.25rem;
    position: absolute;
    right: 0;
    top: 0;
}




/* ——————商品———————————————————————————————————————————————— */
.group-content {
    height: 100%;
}
.groups .group .group-content .item {
    overflow: hidden;
    min-height: 5.25rem;
    display: -ms-flexbox;
    display: flex;
    padding: 0 .75rem 0 .5rem;
}

.groups .group .group-content .item .check-box-checked {
    margin-top: 2.8125rem;
}

.check-box-checked, .groups .group .group-content .item .check-box-checked {
    display: block;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 100% 100%;
    width: 1.25rem;
    height: 1.25rem;
}

.groups .group .group-content .item .item-content {
    flex: 1;
}

.groups .group .group-content .item .item-content .img-title {
    display: -ms-flexbox;
    display: flex;
    margin-left: .5rem;
    padding-bottom: .625rem;
}

/* -=========图片----------- */
.groups .group .group-content .item .item-content .img-title .img-wrap {
    width: 5.25rem;
    height: 5.25rem;
    position: relative;
    margin-top: .625rem;
}
.groups .group .group-content .item .item-content .img-title .img-wrap img {
    width: 100%;
    height: 100%;
}

fieldset, img {
    border: 0;
}   

.text-wrap {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: .625rem;
    margin-top: .5rem;
    -ms-flex: 1;
    flex: 1;
}

.text-wrap .title {
    display: -webkit-box;
    width: 14.5625rem;
    max-height: 2.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    line-height: 1.25rem;
    text-align: left;
    -webkit-line-clamp: 2;
    word-break: break-all;
}

.text-wrap .sub-title-1 {
    margin-top: .1875rem;
    line-height: .75rem;
    height: .75rem;
    color: #999;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.text-wrap .sub-title-1 span:first-child {
    display: block;
    max-width: 12.1875rem;
    font-size: .6875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.text-wrap .price-edit {
    margin-top: .3125rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    height: 1.375rem;
}

.text-wrap .price-edit .price {
    width: 12.5625rem;
    display: block;
    font-size: .9375rem;
    color: #fe4070;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.text-wrap .price-edit .edit {
    display: block;
}




/* --------------满减--------------- */
.groups .group .group-content .item .item-content .discount-detail {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: .5rem;
    position: relative;
}

.groups .group .group-content .item .item-content .discount-detail .discount-item {
    margin-bottom: .625rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}

.groups .group .group-content .item .item-content .discount-detail .discount-item>span {
    height: 1rem;
    border-radius: 1.25rem;
    font-size: .625rem;
    color: #fe4070;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 .3125rem;
    border: 1px solid #fe4070;
}

.groups .group .group-content .item .item-content .discount-detail .discount-item .promo-rule {
    font-size: .6875rem;
    max-width: 13.71875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1rem;
}

.groups .group .group-content .item .item-content .discount-detail .discount-item .promo-rule>span {
    margin-left: .15625rem;
}



/* 新用户免减 -----------*/
.groups .group .group-tail {
    height: 2.25rem;
    display: flex;
    padding-left: .5rem;
    background: #fff;
    align-items: center;
    border-top: 1px #eee solid;
}
.red {
    color: #fe4070;
}

.groups .group .red .icon {
    border: 1px solid #fe4070;
}
.groups .group .group-tail .icon {
    width: 1rem;
    height: 1rem;
    display: flex;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    font-size: .625rem;
}

.groups .group .group-tail span {
    margin-left: .5rem;
}









</style>
