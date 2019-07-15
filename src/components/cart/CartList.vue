<template>
  <div class="cart-no-goods">
    <div class="oops"></div>
    <div class="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
    <div class="go-stroll">去逛逛</div>
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

.cart-no-goods {
    flex: 1;
    background: #fff;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cart-no-goods .oops {
    width: 5.375rem;
    height: 5.125rem;
    background: url(../../assets/no-card-oops.png) no-repeat;
    background-size: 100% 100%;
}

.cart-no-goods .empty-cart {
    font-size: .875rem;
    line-height: .9375rem;
    color: #333;
    margin-top: 1rem;
    padding: 0 .75rem;
    text-align: center;
}

.cart-no-goods .go-stroll {
    width: 7.8125rem;
    height: 2.25rem;
    border-radius: 1.25rem;
    color: #fff;
    background: #fe4070;
    line-height: 2.25rem;
    text-align: center;
    margin-top: 1.4375rem;
    font-size: .8125rem;
}







</style>
