<template>
  <div class="home">
    Create a new blog
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
