<template>
    <!-- <mt-swipe :auto="0" :show-indicators="false" width="200px" >
        <mt-swipe-item class="mt-swipe-item" v-for="item in picture " :key="item.img "><img src="item.img" alt=""></mt-swipe-item>
       
    </mt-swipe>
     -->

    <!-- <div class="block">
    <span class="demonstration">Click 指示器触发</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in picture" :key="item.img">
         <img src="item.img" alt="" >
      </el-carousel-item>
    </el-carousel> 
  </div> -->


   <div class="goods-img">
      <a>
        <img src="../../assets/DetailsImg/swipe1.jpg" />
      </a>
    </div>







</template>

<script>
    // import Vue from "vue";

    // import { Swipe, SwipeItem } from 'mint-ui';
    // Vue.component(Swipe.name, Swipe);
    // Vue.component(SwipeItem.name, SwipeItem);

    // import {carousel,carouselItem} from 'element-ui';
    // Vue.use(carousel);
    // Vue.use(CarouselItem);



export default {
    // data(){
    //     return {
    //         picture :[
    //             {
    //                img: require("../../assets/DetailsImg/swipe1.jpg")
    //             },{
    //                img: require("../../assets/DetailsImg/swipe2.jpg")
    //             },{
    //                img: require("../../assets/DetailsImg/swipe3.jpg")
    //             },{
    //                img: require("../../assets/DetailsImg/swipe4.jpg")
    //             }]
    //     }
    // }
}
</script>

<style>
    /* .mt-swipe-item{
        width: 100%;
        height: 100px;
        background-color: #f00;
        overflow: hidden;
    } */

    /* .el-carousel__item  {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
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
.bgc-f {
  background-color: #fff;
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


</style>
