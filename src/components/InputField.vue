<template>
<div>
    <input v-model="name" />
    <!-- {{name}} -->
</div>
</template>


<script>
export default {
  name: "InputField",
  data: () => ({}),
  props: {},
  computed: {
    name: {
          get(){
            return this.$store.state.name;
          },
          set(value){
            return this.$store.commit('updateInput', value);
          }
      }
  },
  methods: {
    updateInput(e){
      this.$store.commit('updateInput', e.target.value)
    }
  }
};
</script>