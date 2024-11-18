<script setup lang="ts">
const { type = 'text', bg = 'var(--green-50)' } = defineProps<{
  name: string;
  placeholder: string;
  type?: 'text' | 'email' | 'tel';
  bg?: string;
}>();

//
const modelValue = defineModel();

//
const inp = useTemplateRef('inp');

//
onMounted(() => {
  if (!inp.value) return;

  inp.value.addEventListener('blur', () => {
    if (inp.value!.value.length > 0) {
      inp.value!.classList.add('open');
    } else {
      inp.value!.classList.remove('open');
    }
  });
});
</script>

<template>
  <label class="label_group">
    <input
      v-if="type === 'tel'"
      :type
      :name
      class="inp"
      placeholder=""
      ref="inp"
      v-maska="'+7 (###) ###-##-##'"
      v-model="modelValue"
    />

    <input v-else :type :name class="inp" placeholder="" ref="inp" v-model="modelValue" />

    <span class="label_group__title">{{ placeholder }}</span>
  </label>
</template>

<style lang="css" scoped>
.label_group {
  position: relative;
  width: 100%;
  height: 80px;
  background-color: v-bind(bg);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 32px;

  /*  */
  @media (max-width: 768px) {
    height: 70px;
    padding: 0 28px;
  }

  @media (max-width: 480px) {
    height: 60px;
    padding: 0 24px;
  }
}

.label_group__title {
  position: absolute;
  font-weight: 300;
  font-size: 18px;
  line-height: 90%;
  color: var(--gray-text);
  transform: translateY(0);
  transition: font-size var(--transition-speed), transform var(--transition-speed);

  /*  */
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

/* Инпут */
.inp {
  width: 100%;
  font-family: var(--font-family);
  font-weight: 300;
  font-size: 18px;
  line-height: 90%;
  color: var(--main-green);
  background-color: transparent;
  border: none;
  transform: translateY(6px);
  padding: 0;

  &:focus + .label_group__title,
  &.open + .label_group__title {
    font-size: 13px;
    transform: translateY(-16px);
  }

  /*  */
  @media (max-width: 768px) {
    font-size: 16px;
  }
}
</style>
