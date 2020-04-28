<template>
  <div class="brand">
    <nav class="nav-head border-1px">
      <i></i>
      <router-link to="/search"></router-link>
    </nav>
    <div class="left-menu" ref="leftMenu">
      <ul>
        <li v-for="(item, index) in datas" :key="item.type" :class="{'current': currentIndex === index}">
          <div>{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="right_wrapper">
      <ul>
        <li v-for="item in datas" class="section" :key="item.type">
          <h1 class="title">{{ item.name }}</h1>
          <!--<ul>-->
            <!--<li v-for="good in item.goods" :key="good.id">-->
              <!--<div>-->
                <!--<img :src="">-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import api from '../../js/api';

  export default {
    data() {
      return {
        datas: [],
        listHeight: [],
        scrollY: 0
      };
    },
    created() {
      api.getCategoryData().then((response) => {
        console.log(response.data);
        this.datas = response.data;
        // 操作dom时一定要在$nextTick里
        this.$nextTick(() => {

        });
      });
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      }
    },
    methods: {
      _initScroll() {
        let scroll = new BScroll('left-menu');
      },
      _calculateHeight() {

      }
    },
    components: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../assets/scss/mixins";

  .brand {
    position: relative;
    background-color: #ededed;
    .nav-head {
      height: 50px;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      position: fixed;
      background-color: white;
      @include border-1px(rgba(7, 17, 27, 0.1));
      i {
        display: inline-block;
        width: 78px;
        height: 20px;
        background-size: 78px 20px;
        @include bg-image('./images/tuzi_word');
        margin: 15px auto;
      }
      a {
        display: inline-block;
        width: 21px;
        height: 21px;
        background-size: 21px 21px;
        @include bg-image('./images/search');
        margin: 15px;
        position: absolute;
        right: 10px;
      }
    }
  }
</style>
