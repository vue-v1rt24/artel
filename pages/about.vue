<script setup lang="ts">
const slider = useTemplateRef('slider');

//
onMounted(() => {
  slider.value?.addEventListener('mousemove', (evt: MouseEvent) => {
    const x = evt.offsetX;

    (slider.value!.lastChild as HTMLDivElement).style.width = x + 'px';
  });

  console.log(slider.value?.firstChild);
  console.log(slider.value?.lastChild);
});
</script>

<template>
  <div>
    О компании

    <!--  -->
    <div class="slider_bx" ref="slider">
      <div class="slider_before">
        <img src="http://176.53.163.5:5000/wp-content/uploads/2024/10/do-1.jpg" alt="" />
      </div>

      <div class="slider_after">
        <img src="http://176.53.163.5:5000/wp-content/uploads/2024/10/posle-1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.slider_bx {
  position: relative;
  width: 785px;
  height: 442px;
  overflow: hidden;
}

/*  */
.slider_before,
.slider_after {
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  overflow: hidden;
  transition: all ease 0.1s;
  /* transition: width ease 0.2s; */

  /*  */
  img {
    max-width: none;
  }
}

.slider_after {
  width: 50%;
  will-change: width;
}
</style>
