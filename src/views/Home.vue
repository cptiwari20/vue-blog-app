<template>
  <div class="home">
    Welcome to the Blogging App
    <PostIndex />
  </div>
</template>

<script>
import PostIndex from "@/components/PostIndex.vue";

export default {
  name: "Home",
  components: {
    PostIndex
    // InputField
  },
  methods: {
    // handleInput(e){
    //   console.log(e)
    // }
  }
};
</script>
