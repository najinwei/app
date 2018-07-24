<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].picturegoto">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].picturelocation">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].picturelocation">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].picturename }}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item, index) in slides"
          @click="goto(index)"
      >
        <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
  export default {
   props: {
      slides: {//设置参数类型
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 1000
      },
    },
    created: function () {
   /* var  nowIndex=0;
      this.slides[nowIndex].picturelocation="";
      this.slides[nowIndex].picturegoto="";
      this.slides[nowIndex].picturename="";*/
    },
    data () {
      return {
        nowIndex: 0,//页码数
        isShow: true,
    /*   picturelocation:"",
        picturegoto:"",
        picturename:""*/
      }
    },
    computed: {//计算属性
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        }
        else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        }
        else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      goto (index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        }, 10)
        //console.log(this.slides);
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      }
    },
    mounted () {
      this.runInv();
    }
  }
</script>

<style scoped>
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(900px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }
  .slide-show {
    position: relative;
    margin: .25rem .25rem 0 .25rem;
    width: 420px;
    height: 216px;
    overflow: hidden;
    margin-left:-15px;
  }
  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }
  .slide-img {
    width: 100%;
  }
  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }
  .slide-pages li .on {
    text-decoration: underline;
  }

</style>
