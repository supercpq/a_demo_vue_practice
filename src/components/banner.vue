<template>
    <div style="width:80%;height: 100px;margin-left: 10%;">
        <div class="mydiv">
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
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name:'BanneR'
}
</script>

<style>

</style>