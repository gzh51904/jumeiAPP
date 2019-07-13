<template>
  <div class="details">
    <!-- <Particulars/> -->
    <DetailsHead/>
    <DetailsSlide/>
    <DetailsExplain/>
    <DetailsComment/>
    <DetailsDescribe/>
    <DetailsBuy/>

  </div>
</template>

<script>

// import Particulars from './views/Particulars.vue';

import DetailsHead from '../components/details/DetailsHead.vue';
import DetailsSlide from '../components/details/DetailsSlide.vue';
import DetailsExplain from '../components/details/DetailsExplain.vue';
import DetailsComment from '../components/details/DetailsComment.vue';
import DetailsDescribe from '../components/details/DetailsDescribe.vue';
import DetailsBuy from '../components/details/DetailsBuy.vue';

export default {
//   data(){
//     return{

//     }
//   },
//   name: 'details',
  components: {
    // Particulars
    DetailsHead,
    DetailsSlide,
    DetailsExplain,
    DetailsComment,
    DetailsDescribe,
    DetailsBuy

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */

}

#Details {
    background-color: #f5f5f5 
}


</style>
