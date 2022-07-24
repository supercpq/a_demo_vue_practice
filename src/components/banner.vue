<template>
   
        <div class="mydiv">
            <!-- <el-row :gutter="100"> -->
                <ul class="nav nav-tabs">
                    <li>
                        <router-link replace 
                        class="list-group-item" 
                        active-class="active" 
                        to="/chart1">输出电压
                        </router-link>
                    </li>
                    <li>
                        <router-link replace 
                        class="list-group-item" 
                        active-class="active" 
                        to="/chart2">输出电流
                        </router-link>
                    </li>
                    <li>
                        <router-link replace 
                        class="list-group-item" 
                        active-class="active" 
                        to="/chartall">全显示
                        </router-link>
                    </li>
                   
                </ul>
            <!-- </el-row> -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>


export default {
    name:'BanneR',
    components: {
    
  },
}
</script>

<style>

</style>