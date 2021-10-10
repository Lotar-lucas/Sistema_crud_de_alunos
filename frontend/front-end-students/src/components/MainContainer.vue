<template>
  <v-container class="grey lighten-5"  >
        <v-row no-gutters>
          <v-col xs="12" sm="12" md="4" lg="4" xl="3">
            <AsideMenu />
          </v-col>
          <v-col xs="12" sm="12" md="8" lg="8" xl="9" >
            <Content />
          </v-col>
        </v-row>
        <router-view></router-view>
      </v-container>
</template>

<script>
import AsideMenu from './AsideMenu.vue';
import Content from './Content.vue';

export default {
  name: 'MainContainer',
  data: () => ({
    //
  }),
  components: {
    AsideMenu,
    Content,
  },
};
</script>

<style>

</style>
