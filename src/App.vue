<template>
<v-app>
    <v-navigation-drawer app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <router-link :to="item.path">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link> 
        </v-list-item>
      </v-list>
    </v-navigation-drawer >
  <v-content>  
    <v-container fluid>
      <router-view />
    </v-container>
  </v-content>
</v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    drawer: true,
    items: [
      { title: 'Home', icon: 'mdi-home-city', path: '/' },
      { title: 'My Blogs', icon: 'mdi-account', path: '/blogs' },
      { title: 'Create', icon: 'mdi-account-group-outline', path: '/create' },
    ],
    mini: true,
  }),
  methods: {
    drawer(){}
  }
};
</script>
