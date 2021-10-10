<template>
  <div id=app>
    <MainHeader />
    <v-main >
      <MainContainer />
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainContainer from '../components/MainContainer.vue';

export default {
  name: 'Home',
  data: () => ({
    //
  }),

  components: {
    MainHeader,
    MainContainer,
  },
  methods: {
    //
  },
};
</script>
