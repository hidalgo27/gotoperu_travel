<template>
  <label class="flex items-center space-x-3">
    <input
        type="checkbox"
        class="form-checkbox h-5 w-5 text-blue-600"
        :checked="isChecked"
        @change="toggle"
    />
    <span class="text-gray-900">{{ label }}</span>
  </label>
</template>

<script>

export default {
  props: {
    label: String,
    modelValue: Boolean
  },
  setup(props, { emit }) {
    const isChecked = ref(props.modelValue)

    const toggle = () => {
      isChecked.value = !isChecked.value
      emit('update:modelValue', isChecked.value)
    }

    return {
      isChecked,
      toggle
    }
  }
}
</script>
