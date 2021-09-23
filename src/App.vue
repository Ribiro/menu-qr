<template>
  <v-app>
    <v-app-bar app>
      <Header />
    </v-app-bar>

    <v-content class="grey lighten-4">
      <router-view class="mx-4 mb-4"></router-view>
    </v-content>

    <v-footer  class="white" style="margin: auto; padding: 10px; max-width: inherit;" >
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
  import Header from "./components/common/Header";
  import Footer from "./components/common/Footer";
  export default {
    name: 'App',

    components: {
      Header,
      Footer
    },

    data: () => ({
      //
    }),
  };
</script>
