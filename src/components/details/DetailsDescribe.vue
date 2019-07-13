<template>

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane  label="图文详情" name="first">
                <div class="detail_msg_img pr bgc-f">
                    <p>
                        <img src="http://p0.jmstatic.com//jpartner/ueditor/partner/970036ac0623f1a49b3e9c33b5023d78.jpg" title="1535612060241594.jpg">
                        <img src="http://p0.jmstatic.com//jpartner/ueditor/partner/bcac28d6f8e35ac2f104f9d8b0e83871.jpg" title="1535612060529782.jpg">
                        <img src="http://p0.jmstatic.com//jpartner/ueditor/partner/0d0691f6949494b94b42b0582f8b279b.jpg" title="1535612060334263.jpg">
                        <img src="http://p0.jmstatic.com//jpartner/ueditor/partner/787f8ecaacabc621826352e195efba41.jpg" title="1535612061152942.jpg">
                    
                    
                    </p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="产品参数" name="second">产品参数</el-tab-pane>
            <el-tab-pane label="评论" name="third">童话里的故事都是骗人的</el-tab-pane>
            <!-- <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
        </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
    
.detail_msg_img img {
    display: block;
    width: 100%;
}

   

</style>
