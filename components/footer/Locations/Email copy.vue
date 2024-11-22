<script setup lang="ts">
const { email } = defineProps<{
  email: string;
}>();

//
const isCopy = ref(false);
const isVisibleMessage = ref(false);

//
const copyBuffer = () => {
  isCopy.value = true;
  isVisibleMessage.value = true;

  navigator.clipboard.writeText(email);

  setTimeout(() => (isCopy.value = false), 500);
  setTimeout(() => (isVisibleMessage.value = false), 3000);
};
</script>

<template>
  <div class="email" @click="copyBuffer">
    <span>{{ email }}</span>

    <div class="email__copy">
      <ImagesCopy v-if="!isCopy" />
      <ImagesCheckBoxBlack v-else />
    </div>
  </div>

  <!--  -->
  <div :class="['copy_success', { open: isVisibleMessage }]">Почта скопирована</div>
</template>

<style lang="css" scoped>
.email {
  white-space: nowrap;
  display: flex;
  column-gap: 12px;
  cursor: pointer;

  /*  */
  span {
    border-bottom: 1px solid transparent;
    transition: border var(--transition-speed);

    /*  */
    @media (hover: hover) {
      .email:hover & {
        color: var(--green-akcent);
        border-color: var(--transition-speed);
      }
    }

    @media (hover: none) {
      .email:active & {
        color: var(--green-akcent);
        border-color: var(--transition-speed);
      }
    }
  }
}

/*  */
.email__copy {
  width: 34px;
  height: 34px;
  background-color: var(--green-50);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color var(--transition-speed);

  /*  */
  svg {
    transition: color var(--transition-speed);
  }

  /*  */
  @media (hover: hover) {
    .email:hover & {
      background-color: var(--green-akcent);

      svg {
        color: white;
      }
    }
  }

  @media (hover: none) {
    .email:active & {
      background-color: var(--green-akcent);

      svg {
        color: white;
      }
    }
  }
}

/*  */

.copy_success {
  position: fixed;
  bottom: 30px;
  right: -100%;
  z-index: 10;
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 18px;
  line-height: 90%;
  color: #fff;
  background-color: var(--main-green);
  box-shadow: 0 2px 15px 0 rgba(4, 4, 4, 0.3);
  border-radius: 80px;
  padding: 14px 24px;
  transition: right 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /*  */
  @media (max-width: 576px) {
    font-size: 13px;
    padding: 12px 18px;
  }

  /*  */
  &.open {
    right: 10px;
  }
}
</style>
