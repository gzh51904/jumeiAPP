<template>
  <div class="submit-bottom submit-bottom-padding">
    <div class="sub-info">
      <span class="check-box-checked"></span>
      <span class="all-check-text">全选</span>
      <div class="summary">
        <div>
          <span>合计</span>
          <span class="red">¥118</span>
        </div>
      </div>
    </div>
    <div class="submit-btn go-to-submit">
      去结算
      <span>(2)</span>
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

html {
    background-color: #f5f5f5; 
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    color: #333;
    font-size: .75rem;
    line-height: 1;
}


.submit-bottom.submit-bottom-padding {
    bottom: 4.2625rem;
}
.submit-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 0.15625rem #eee;
    height: 3.0625rem;
    display: -ms-flexbox;
    display: flex;
    background: #fff;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 .75rem 0 .5rem;
    z-index: 1;
}

.submit-bottom .sub-info {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}

.check-box-un-checked {
    display: block;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 100% 100%;
    width: 1.25rem;
    height: 1.25rem;
}

submit-bottom .sub-info .all-check-text {
    font-size: .875rem;
    color: #333;
    margin-left: .75rem;
}

.submit-bottom .sub-info .summary {
    margin-left: .6875rem;
    color: #999;
    display: flex;
    flex-direction: column;
}

.submit-bottom .sub-info .summary>div:nth-child(1) {
    display: flex;
    align-items: center;
}

.submit-bottom .sub-info .summary>div .red {
    font-size: 1rem;
    margin-left: .3125rem;
}
.red {
    color: #fe4070;
}

/* 去结算—————————————————————————— */
.submit-bottom .go-to-submit {
    background: #fe4070;
}
.submit-bottom .submit-btn {
    width: 7.8125rem;
    height: 2.25rem;
    font-size: .875rem;
    color: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 1.25rem;
}








</style>
