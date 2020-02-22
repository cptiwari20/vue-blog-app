<template>
  <div>
      <v-alert
      border="top"
      color="red lighten-2"
      dark
        >
        A new Blog has been created
        </v-alert>
    Here will be the blog post {{blogs.length}} will appear
    <ul>
        <li v-for="(blog, index) in blogs" :key="index">{{blog.title}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: mapState({
        blogs: state => state.blogs
    })
}
</script>
