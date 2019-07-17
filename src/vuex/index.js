//引入
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// const store = new Vuex.store({
//     state:{

//     }
// });



export default new Vuex.Store({
    state: {
        // 决定底部选项卡是否出现
        isok:true,
        isShowMfooter: true,
        isShowMmodel: 0,
        isLogin: 0,
        isShowDetFoot: true,
        isShowsearch: 0,
        orderList: [], //列表页购物车的空数组
        qty: 0,
        username: localStorage.getItem('username') // 用户名
    },
    // 改变仓库的值
    mutations: {
        addItem(state, value) {
            state.orderList.push(value);
        },
        addQty(state, qty) {
            state.qty = qty
        },
        changeshow(state,bool){
            state.isok = bool;
        }
    },
    actions: {

    },
})
