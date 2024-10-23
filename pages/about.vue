<script setup lang="ts">
const slider = useTemplateRef('slider');
const before = useTemplateRef('before');
const after = useTemplateRef('after');
const resize = useTemplateRef('resize');

const isActive = ref(false);

//
const beforeAfterSlider = (x: number) => {
  if (!slider.value || !before.value || !resize.value) return;

  let shift = Math.max(0, Math.min(x, slider.value.offsetWidth));

  before.value.style.width = shift + 'px';
  resize.value.style.left = shift + 'px';
};

//
onMounted(() => {
  if (!slider.value) return;

  slider.value.addEventListener('mousedown', () => {
    isActive.value = true;
  });

  slider.value.addEventListener('mouseup', () => {
    isActive.value = false;
  });

  slider.value.addEventListener('mouseleave', () => {
    isActive.value = false;
  });

  //
  slider.value.addEventListener('mousemove', (evt: MouseEvent) => {
    if (!isActive.value) return;
    beforeAfterSlider(evt.clientX);
  });

  // Для мобильного
  slider.value.addEventListener('touchstart', () => {
    isActive.value = true;
  });

  slider.value.addEventListener('touchend', () => {
    isActive.value = false;
  });

  slider.value.addEventListener('touchcancel', () => {
    isActive.value = false;
  });

  slider.value.addEventListener('touchmove', (evt: TouchEvent) => {
    if (!isActive.value) return;

    // const x = evt.changedTouches[0].clientX - slider.value!.getBoundingClientRect().left;
    const x = evt.changedTouches[0].clientX - slider.value!.offsetLeft;
    beforeAfterSlider(x);
  });
});
</script>

<template>
  <div>
    О компании

    <!--  -->
    <div class="slider_bx" ref="slider">
      <div class="slider_before" ref="before">
        <img src="http://176.53.163.5:5000/wp-content/uploads/2024/10/do-1.jpg" alt="" />
      </div>

      <div class="slider_after" ref="after">
        <img src="http://176.53.163.5:5000/wp-content/uploads/2024/10/posle-1.jpg" alt="" />
      </div>

      <div class="slider_resize" ref="resize" data-type="resize"></div>
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

  /*  */
  img {
    max-width: none;
  }
}

.slider_before {
  width: 50%;
  overflow: hidden;
  z-index: 2;
}

/*  */
.slider_resize {
  position: absolute;
  top: 0;
  left: 50%;
  width: 5px;
  height: 100%;
  background-color: white;
  cursor: e-resize;
}
</style>
