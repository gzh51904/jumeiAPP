<template>
    <div class="cartlist">
        <CartHead/>
        <!-- <CartList/> -->
        <!-- 购物车 -->
        <CartGoods/>
        <CartPrice/>
    </div>


    <!-- <div class="page bg-empty">
        <div class="header">
            <div class="head-back-box">
                <div class="head-back"></div>
            </div>
            <div class="head-title">购物车</div>
            <div class="head-home"></div>
        </div>


        <div class="cart-no-goods">
            <div class="oops"></div>
            <div class="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
            <div class="go-stroll">去逛逛</div>
        </div>
    </div> -->









</template>

    

<script>

    import CartHead from '../components/cart/CartHead.vue';
    // import CartList from '../components/cart/CartList.vue';
    import CartGoods from '../components/cart/CartGoods.vue';
    import CartPrice from '../components/cart/CartPrice.vue';

export default {
    components:{
        CartHead,
        // CartList
        CartGoods,
        CartPrice
    }
}
</script>

<style>
    /* .cart {
        color: #333;
        font-size: .75rem;
        line-height: 1;
        height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
        background-color: #f5f5f5;

    } */

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


/* .page.bg-empty {
    display: flex;
    flex-direction: column;
    height: 100%;
}


.header {
    height: 2.5625rem;
    padding: 0 .85rem;
    font-size: 1rem;
    border-bottom: 1px solid #eee;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.head-back-box {
    width: 1.125rem;
}
.head-back {
    width: .46875rem;
    height: .84375rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAbCAYAAACjkdXHAAAAAXNSR0IArs4c6QAAAlJJREFUOBGVk0trE1EUgJ3JpEkMSrKoSilSig+Ke3FRKCkJVCWCSgMSTIwhycJFXfkLBOlGBFd5QxAFERdNBQu1QwVREEEEEfIXRBQVjckk8TtjJ0yTEicX7pz7ON953lH2jTkqlcqkYRh3er3eY20ctlarHWo2m1uAp+A0xSlcrVaPtNttAecURfno9XoXHXkul8tTrVZrC0cnAT9omhZOJBKf/+u5WCxOd7tdAY8Dvvd4POFkMvlFIh4J5/P5o+jozFnAd36/PxKPx78KKEP9J4a/5DjD6TZTwLdutztsB4XYE6Yds+Qo4AzgG4oUSaVS3wSwj6GwS6XSMXLUAaYBX7lcrrPpdPqHHbLWu+BCoXCCCwGnkC+DweD5WCz201IelP2wqeoc0PYOqPt8vnOjQDFkesajvJgXgIcJdTMQCFwA/D3oaXCv2kIVcIOqRp2AYkjCXsTjpGyQt6lqU9ZOhgpQRvHpjvI61T7tBBQdM2dd17VGo/GQ/TLzO293ifa8FoVRw6x2KBQyaMsVcn6E8sFOp7PB05wfBcpdv1UUqUOVr3L2gFQOYOg5xVwYZWDXIxFFQJWel5HX2P5SVTWayWTkrxoafc/WDR67KF9HSiH381TXMRax7u1yCJZLwB4GMsg8Wx9RrNGFJTto6g0e2PdACnnf5+wG8w/zci6Xe2bpDOVsXdglBu5haIVIWpwvZ7PZNbnfM2w7KGuUbwLexcAE8wnGLsq5I8+iKANoFfgWS4P//JLLPHX4qdfrm9FodAL1BYy0xvJs+aB1Z2jhp796xPNOoWBnswAAAABJRU5ErkJggg==) no-repeat;
    background-size: 100% 100%;
}

.head-title {
    flex: 1;
    text-align: center;
}
.head-home {
    width: 1.125rem;
    height: 1.125rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABFNJREFUWAntmFloU0EUhr1ZarWiFVRU7FsFEX3yRRGXNLjFDUGjqDR0f7CoLyK4ofimD4KK0h0iRY1oxaWuWBV9UxDccTet1Sq0IiXapKnfifeWmty2ub1J9SEDJzN3Zs45//3PTO6ZUYYkoJSXl6/CTGlXV9cMMacoykOqo8XFxXXybKYoZpRramrSOzo6vNhYo9oJqbVNaoD67Ha7Jy8v76fab7iyGNZQFcrKyoYHg8GrPAq4bxaLZd1otUhb+mDUzZwrMldVM1wNiEGfzzesra3tEgBy8PgYlpbm5+f7e3qvrq7OAtxl+qbD5K3MzMxlbrc70HNOPG3DAOvr64f6/f4LGF+I46c2m80BuK96zgA5FpC3GJvG3Ju8yHKj4TYEEObSYK4O5lw4fUEo5xcVFX3RA6f1eb3ecYFAoIHnqcj1tLS0lUZAxr0GWUd2wJ1Rwb3CWU5/4ARkbm5uCy8iS+EFspBNVSdRkLF4SlwAGxoaZFeeAtwK6jfp6emOkpKS5ngcyBx5EZhz0HyJLG5sbDwn0ZCx/kq/IcaQtbW1tRZDa5H3yDzAfaQ2XKqqqiaGQqHbKE5mTV7ghVdjK9iXoT4ZxIACuCoMCDi/hGqg4AREQUHBJ2Gf5ls1GrVCgIz1VvoEWFFRcRxFD/KZEDkJ1bveDMXb7/F4mqxWaw7zJQprWNfVQkRv+r0CZFMcQrEExW/8PTjZebIxElIKCws/ANKJsWZ85KpE6NrWBci3dT+ztyKtrJUF/M8909U20QnI1ywZJ/a/ChEQckDPXAxAwG1HYReKP1BYwgf/kZ5iIvpYMs8BuQhb35FtgNwZbfev2DOhlAlHkAAABdydaIVkPFdWVs7u7Oy8jm35Zm9hIx7W/HQDhLl8OiuRIG+1khBIIjBoBXLk03kRh3bqAtitEecRgAyup30CCTPoTkQeJ8aNFskrWV4+9ODIsh6QpxXodYbD4WsMKHRupPOkUcOJnA/IDWDxYjMMngUWYn+QDivMbfrX4ORFiV4twDbTtEHcQdnFU5AQ4Mqp/4vC+j8GkF/IFAVK78HgbFCXktvVZmRkRNL29vb2kJG0yMybydEBv5FjAn5tZDwbsXeEqN63AW43jRvQeZQBEc3XGRpu7SGZNT69iHau0VzJht1n4T9HksnFPEiW/ARp0mYMVo1v7e9OfAuGi3S5WHY3IrSyMG/SKTKE7+Ic2Lwr7cEqRLFL9bUOwu719Cub5L8uKYBmw5NiMMWgWQbM6qfWYIpBswyY1ddbg3LCkjLqT5X8XxKDTNWL5rvbaQzA7OzsZyj8ZMZMzipjumcmqUEuOJ5cYRbmA1zQxpy/YwA6HI4QCnIfMxLxAXJCkrBJ5jSJC86z2B+BHOMGtjPaVyTdiu4ku91BZjuXfgdsNpF1t/RIiaKnD+gZuwo2xyGSCz5A9ugZ0hLFmDFunYZxsyVXIEsRObcko8il5vmsrKy9LpdLziAx5TcV4b/kFIcMHQAAAABJRU5ErkJggg==) no-repeat;
    background-size: 100% 100%;
}

div {
    display: block;
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
    background: url(../assets/no-card-oops.png) no-repeat;
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
 */

/* .cartlist {
        color: #333;
    font-size: .75rem;
    line-height: 1;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: #f5f5f5;
        padding-bottom: 45px;
} */











</style>
