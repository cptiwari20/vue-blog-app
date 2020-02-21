<template>
<div>
    <input :value="name"  v-on:input="$emit('input', $event.target.value)" />
    {{name}}
</div>
</template>


<script>
console.log(name)
export default {
  name: "InputField",
  data: () => ({
      message: 'some'
  }),
  props: {
    input: Function,
    name: String,
    placeholder: String,
    type: String,
    value: String
  }
};
</script>