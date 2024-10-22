<script setup lang="ts">
const checkbox = useTemplateRef('checkbox');

//
watch(
  () => useIsCloseModal().value,
  (val) => {
    if (val && checkbox.value?.checked) {
      checkbox.value.checked = false;
    }
  },
);
</script>

<template>
  <label class="checkbox_bx">
    <input type="checkbox" name="checkbox" class="checkbox" ref="checkbox" />
    <span>Я согласен с <NuxtLink to="/">политикой конфиденциальности</NuxtLink></span>
  </label>
</template>

<style lang="css" scoped>
.checkbox_bx {
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 16px;
  line-height: 90%;
  color: var(--gray-text);
  display: flex;
  align-items: center;
  column-gap: 18px;
  cursor: pointer;
  margin-top: 16px;

  /*  */
  @media (max-width: 768px) {
    font-size: 15px;
    column-gap: 16px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
}

.checkbox {
  position: relative;
  appearance: none;
  width: 23px;
  height: 23px;
  background-color: var(--green-50);
  border-radius: 4px;
  flex-shrink: 0;
  cursor: pointer;
  outline: 1px solid transparent;
  transition: outline var(--transition-speed);

  &:hover {
    outline-color: var(--medium-green);
  }

  &:checked {
    background-color: var(--main-green);
    outline-color: transparent;
  }

  /*  */
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
}

.checkbox::before {
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  height: 7px;
  width: 11px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  opacity: 0;
  transition: opacity var(--transition-speed);
}

.checkbox:checked::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .checkbox::before {
    top: 4px;
    left: 4px;
  }
}

/*  */
.checkbox_bx a {
  color: inherit;
  text-decoration: underline;
}

/*  */
.checkbox.just-validate-error-field {
  outline-color: var(--red);
}
</style>
