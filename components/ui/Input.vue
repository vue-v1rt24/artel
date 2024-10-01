<script setup lang="ts">
const { type = 'text', bg = 'var(--green-50)' } = defineProps<{
  name: string;
  placeholder: string;
  type?: 'text' | 'email' | 'tel';
  bg?: string;
}>();
</script>

<template>
  <label class="label_group">
    <input
      v-if="type === 'tel'"
      :type
      :name
      class="inp"
      placeholder=""
      v-maska="'+7 (###) ###-##-##'"
    />

    <input v-else :type :name class="inp" placeholder="" />

    <span class="label_group__title">{{ placeholder }}</span>
  </label>
</template>

<style lang="css" scoped>
.label_group {
  position: relative;
  width: 460px;
  height: 80px;
  background-color: v-bind(bg);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 32px;
}

.label_group__title {
  position: absolute;
  font-weight: 300;
  font-size: 18px;
  line-height: 90%;
  color: var(--gray-text);
  transform: translateY(0);
  transition: font-size var(--transition-speed), transform var(--transition-speed);
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

  &:focus + .label_group__title {
    font-size: 13px;
    transform: translateY(-16px);
  }
}

.inp:not(:placeholder-shown) + .label_group__title {
  font-size: 13px;
  transform: translateY(-16px);
}
</style>
