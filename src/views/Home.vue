<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Hello world" />
    <InputField />

    {{this.$store.state.name}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import InputField from "@/components/InputField.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    InputField
  },
  methods: {
    handleInput(e){
      console.log(e)
    }
  }
};
</script>
