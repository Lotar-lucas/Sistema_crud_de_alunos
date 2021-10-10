<template>
  <div id=app>
    <MainHeader />
    <v-main >
      <v-container d-flex flex-row >
        <AsideMenu />
        <MainContent />
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import AsideMenu from '../components/AsideMenu.vue';
import MainContent from '../components/MainContent.vue';

export default {
  name: 'Home',
  data: () => ({
    //
  }),

  components: {
    MainHeader,
    AsideMenu,
    MainContent,
  },
  methods: {
    //
  },
};
</script>
