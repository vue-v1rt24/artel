<script setup lang="ts"></script>

<template>
  <div class="preloader-5"></div>
</template>

<style lang="css" scoped>
.preloader-5 {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #337ab7;
  animation: preloader-5-spin 2s linear infinite;
}
.preloader-5:before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #bfe2ff;
  animation: preloader-5-spin 3s linear infinite;
}
.preloader-5:after {
  content: '';
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #337ab7;
  animation: preloader-5-spin 1.5s linear infinite;
}
@keyframes preloader-5-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
