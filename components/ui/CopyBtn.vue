<script setup lang="ts">
defineProps<{
  email: string;
}>();
</script>

<template>
  <div @click="copyBuffer" class="copy">
    <span class="hidden">{{ email }}</span>
    <ImagesCopy />
  </div>
</template>

<style lang="css" scoped>
.copy {
  position: relative;
  width: 34px;
  height: 34px;
  background-color: var(--green-50);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color var(--transition-speed);

  /*  */
  svg {
    pointer-events: none;
    color: var(--main-green);
    transition: color var(--transition-speed);
  }

  /*  */
  @media (hover: hover) {
    &:hover {
      background-color: var(--green-akcent);

      svg {
        color: white;
      }
    }
  }

  @media (hover: none) {
    &:active {
      background-color: var(--green-akcent);

      svg {
        color: white;
      }
    }
  }
}

/*  */
.hidden {
  display: none;
}
</style>
