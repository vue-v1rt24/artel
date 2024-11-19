<script setup lang="ts">
const { email } = defineProps<{
  email: string;
}>();

//
const isCopy = ref(false);

//
const copyBuffer = () => {
  isCopy.value = true;
  navigator.clipboard.writeText(email);

  setTimeout(() => (isCopy.value = false), 500);
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
</style>
