<template>
  <!-- 底部 -->
  <div class="buy-box bgc-f tac fs10">
    <div class="icon-block block-style fl">
      <a
        href="http://h5.jumei.com/s/store/5172.html?fp=goods_detail&amp;fpa=navigation"
        class="store-link fs10"
      >店铺</a>
      <a href="//carth5.jumei.com/cart/show" class="shopping-cart fs10">
        购物车
        <!---->
      </a>
    </div>
    <div class="button-block block-style fl">
      <a class="add-shopping-cart fs14 add-shopping-cart-direct fl add-shopping-cart-new">加入购物车</a>
      <a class="add-shopping-cart add-shopping-cart-direct fs14 fl add-shopping-cart-buy">立即购买</a>
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
.bgc-f {
  background-color: #fff;
}

.buy-box {
    position: fixed;
    bottom: -1px;
    width: 20rem;
    height: 2.61333rem;
    border-top: solid 1px #eee;
    overflow: hidden;
    z-index: 999;
}
.bgc-f {
    background-color: #fff;
}
.tac {
    text-align: center;
}
.fs10 {
    font-size: 10px;
}
div {
    color: inherit;
}

.icon-block {
    width: 6.34667rem;
}

.block-style {
    height: 100%;
    text-align: center;
}
.fl {
    float: left;
}

.buy-box a {
    display: inline-block;
}

a, a:link {
    text-decoration: none;
}

.store-link {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAkCAYAAAAKNyObAAAAAXNSR0IArs4c6QAABGZJREFUWAntmN9vk1UYx+27dcO62XYXwsyIMi6QyBaMEYJOb7xRd7NE6AVsM2Pr2kUSCKjhLzDZBYvG6NqyMjY2ot3EGMKWcOECXDCINxIINkRhgYiOdCOhZb+6zs/zpqd536ZNvdjeIuEkT59zzvM95/me5/x8a3suRwqFQvtTqdQhTFtWVlbKckBWqypJR39omhbu7Ow8ZrPZUsaObcaC5AOBwEEIfZVdv9ZliB33+/2dRj8mcoODgy8kEom7ANyAux0OR09ra+u0scFq5sPhcOXy8nITsxSm31JSfUdHx3Xlo1RlRM/Nze1DuZFJRnFU6tYytbe3P6L/U8Fg8B0I+pLJpJ/yAeVTUxnRAD4VXVJS8rVoqxJr7ru0r+ZIJPK88pshB/sGKuuZzvusuR8VwArt9Xqv4fcyfp2zs7Me5TNDTkUNQ8Dn8y0pgFUackHxBY/MptDJ9ff3b8D4MbJYXl4esoqQ0Y/b7Y5QnkXe5ih7XWw6ucXFRS8htSOjbW1tf4vB6uTxeOYIzqD4JXpe0drExEQppHxSYCt/I7pYiY2oTy3+W5jNdTYO3d2QG4H1rxwfbxmJ9fb2XqT8rrFulfOXurq63jP2afDZLNO6J20MGEFFzJ8Q3wSrSQ7hrVLgrJkUbUzZozLa1ioPqavMpHS/VSK3WXIul+tP0cVOVVVVt4UDBGs1fmJSiMfj1aKLnTiEXxYORPBBKT+/Q3Dj0tLSh9R9W4gcN0k1W72lrKzsZ+7GaCG8nFlc7o2cBAPcBP8UwmNvFAycbrLUtFPpwpGhoaEXJZ8vpY8dOSy7Gcw4292VDyv1YmcgZwUPwZ8YmP0/4A8LhqANaDU1NREyt2C6ian9QZ4xuToYGxsrj0ajYXAN4BOCX1hYONPX11eVCz88POwWu+Cwx9G7IHpSzq9ceIg75+fnR7C9IrOJjOrvOQx1NJ5EHFTKy/RL9Hmn0zkN4fU4eZ9GR5BtyCWuuH3cKufA14G7h+7hAD3HpvprZmammrpGiEgENiLXmNJGIjcMTs40ma4eu93+S0VFxTRrbD11H2D7DHmVfBz8DpbAzcxjkwi8wXtqBIC+ewHlSt/TcTsPg8cSMaZ2CJCs1XxpHBLNPCBnCIADwscB7s0Hpj4KMY+8UgSTISeFdActjLyZ4msQrSR/n/xFSJ3gnX9BcMbEDfMR5VZkJ/ISIi/nq8gAN84Y2pTw0UC/+xG5eeTB8RB9C30afVoGbmrwrPBUR4AXwUlEPnKKkliPR1nDV5RzuVuN6RMWZpOxwso8m+RNZIfymU1O1RdL688R5fxJI6d46dpEjiklqiums8+EtrhgImex74Lu/j/k9DllbgsOySLAkxY5U2Cyyd0hevX8mbKWfxjmjLu8F/G9nYnTvyEEZPoLjLJ81HbHYrEb3BS/ye4VUKEdDM40YmmTlQrZtampqTra1NLVF6qtqREkNK6QzzH6yG9SoHxakc9npw/ToZqNU+3TuDuUgzyZetApwf4L74LplHi/xZwAAAAASUVORK5CYII=) no-repeat center 0.42667rem;
    background-size: 19.5px 18px;
    border-right: 1px solid #eee;
}

.store-link {
    width: 2.50667rem;
    color: #979797;
    height: 1.86667rem;
    padding-top: 1.70667rem;
    padding-left: 0.24rem;
    padding-right: 0.24rem;
    line-height: 10px;
}
.fs10 {
    font-size: 10px;
}

.shopping-cart {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAAAXNSR0IArs4c6QAAAu1JREFUWAntWD1vE0EQ9Z3OdpMIyR0I4QKqpKAIBR22Ay3kB4CM8bdSIYELJEoaC6R0/kayiETFH+AjDnSgIJAQkU2NoIICLBnZZ5v3zJ21Pvm8R3JRmjvpMrszs29eZmZP3lV8//k0Go3lfr9/V1GUq+Px+CyWL1kgfsH2Be+zQCCwlUgk/ljsC6fKQqvFWKvVYrquP4Y6bDHNnYJUG+/NbDb7dq7DHKVjQiQzHA5fIiuIobwB1kPIPQT7LuJWKpUz8LmA9x70a3h1TdMuptPp96Kf3dgRIaNMnwASVlX1QSaTuQ8yYztQ6lutltbpdLZAbBO++8FgcM1J+dRFoKZtMBjcwTjMzDghw3XRaFSH/20MP4DUCvpuk3rZ44gQQK4ZQCzTwsyIAVHOAeaPqAOpDdFmN3ZECGDcTT6Q2bMDstNjzTvagHHOzkfUOyKEBZOtbW1gEchuHAqFvhq2E3Y+on7a1PgPlGq1moa8BYcVyGXR0e0xMvcbmPuI08jlcnWzFSaEsFVPjkajbTjE3A7sBA9kXuG9wQpozEy5XJ6QgZLpLfj9/tfJZPKbCVYqlSaNnM/npxk1bTLJ7d9ut9ncOtb7TX98Sk5h917CvAgO65BPIK9oLBMmMZLBB+x8KpX6aS5yQ0YikREIEWqmX41/+Gmz2Xze6/U+khQSk1IxYM/wKbhN5h+sj9nlN0k35jMiHo//gKJAJXySLNmqMdmlnPccpFQmDoKQ0LRUpl6U8NkFD34aVpnGA29pEfQwY+FzsjRT18OAurXWIyTLpJchL0OyDMjsXg95GZJlQGb3esjLkCwDMrvXQ16GZBmQ2dlDXTrxsChzPiq7ELur4hf/ZwbCL/7IUQWU4ZqxyYXnsoaxoFiv10OyxW7bjZhF4pKLgj8KUvYCch0M5x6l3SZBPJYJMSMY8ih9GnIHlw6Xp5cNUPJszTP2cTw7uCq8zvPZ9PIAZHjpkEKWkhjzNGu97nWbaJc9g1gz1zF/AZ0oLTSYEscdAAAAAElFTkSuQmCC) no-repeat center 0.42667rem;
    background-size: 18px 20px;
    position: relative;
}

.shopping-cart {
    width: 2.50667rem;
    color: #979797;
    height: 1.86667rem;
    padding-top: 1.70667rem;
    padding-left: 0.24rem;
    padding-right: 0.24rem;
    line-height: 10px;
}


/* 加入购物车 立即购买 */


.button-block {
    width: 13.65333rem;
}

.block-style {
    height: 100%;
    text-align: center;
}

div {
    color: inherit;
}

.add-shopping-cart-direct {
    width: 50%;
}

.add-shopping-cart-new {
    background: linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%);
    color: #fe4070;

}
.add-shopping-cart {
    line-height: 2.61333rem;
}
.fs14 {
    font-size: 14px;
}
a {
    text-decoration: none;
}

/* .block-style {
    text-align: center;
} */

.add-shopping-cart-buy {
    background: linear-gradient(142deg, #ff5593 0%, #fe4070 100%);
    color: #fff;
    line-height: 2.61333rem;
}



</style>
