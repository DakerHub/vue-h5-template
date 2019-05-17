<template>
  <div class="effect-success">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="main">
      <div class="main-gou"></div>
    </div>
    <div>
      <div v-for="i in 6" :key="i" class="lines">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EffectSuccess'
}
</script>

<style lang="scss" scoped>
$size: 40px;
$active-color: #6adf9b;
$active-inner-color: #fff;

.effect-success {
  height: $size;
  width: $size;
  position: relative;
  border-radius: 50%;
  .circle {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    border: thin solid $active-color;
    transform: scale(0);
    &:nth-child(1) {
      animation: bounch-out-line 0.4s 0.2s ease-out forwards;
    }
    &:nth-child(2) {
      animation: bounch-out-line 0.4s 0.4s ease-out forwards;
    }
    &:nth-child(3) {
      animation: bounch-out-line 0.4s 0.6s ease-out forwards;
    }
  }
  .main {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: $active-color;
    border-radius: 50%;
    z-index: 2;
    animation: bounch-out-main 1.2s cubic-bezier(0.22, 0.61, 0.77, 1.37) forwards;
    .main-gou {
      display: inline-block;
      height: 0;
      width: 0;
      border-top: 2px solid $active-inner-color;
      border-left: 2px solid $active-inner-color;
      box-sizing: border-box;
      transform: rotate(-135deg);
      margin-top: -4px;
      animation: main-gou 0.4s 0.6s forwards;
    }
  }
  .lines {
    position: absolute;
    z-index: 3;
    left: 0;
    top: $size / 2 - 1px;
    display: block;
    height: 2px;
    width: 100%;
    transform-origin: 50% 50%;
    div {
      width: 0;
      height: 100%;
      transform: translateX($size / 2);
      background-color: $active-color;
      animation: move 0.4s 0.6s forwards;
    }
  }
}
@for $i from 1 through 6 {
  .lines:nth-of-type(#{$i}) {
    transform: rotate(60deg * ($i - 1));
  }
}

@keyframes bounch-out-main {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounch-out-line {
  0% {
    transform: scale(0);
  }
  50% {
    border-width: $size / 2;
  }
  100% {
    transform: scale(1.5);
    border-width: 0;
  }
}

@keyframes move {
  0% {
    width: 0;
    opacity: 0;
    left: $size / 2;
  }
  50% {
    width: 10px;
    opacity: 1;
    transform: translateX(-15px);
  }
  100% {
    width: 0;
    transform: translateX(-15px);
  }
}

@keyframes main-gou {
  0% {
    height: 0;
    width: 0;
  }
  50% {
    width: 10px;
    height: 0;
  }
  100% {
    width: 10px;
    height: 20px;
  }
}
</style>
