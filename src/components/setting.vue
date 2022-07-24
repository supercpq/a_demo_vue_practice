<template>
    <div>
        <ul class="nav nav-tabs" style="float:right">
            <li>
                <el-button @click="setFocus">选择图表的最大数据数</el-button>
            </li>
            <li>
                <el-select v-model="value" @change="setNum(value)" ref="content">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </li>
        </ul>
     </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
    name:'SetTing',
    data() {
      return {
        options: [{
          value: '16',
          label: '16'
        }, {
          value: '32',
          label: '32'
        }, {
          value: '64',
          label: '64'
        }],
        value: '32'
      }
    },
    methods: {
        ...mapMutations({setNum:'SETNUM'}),
        setFocus() {
            this.$refs.content.focus()
           
        }
    }
  }
</script>

<style>

</style>