<template>
  <div>
    <MainHeader />
    <v-main >
      <v-container d-flex flex-row >
        <AsideMenu />
        <v-content>
          <v-div>
            <v-container class="grey lighten-5">
              <v-row no-gutters>
                <template v-for="n in 1">
                  <v-col :key="n">
                    <v-card
                      class="pa-2"
                      outlined
                      tile
                    >
                      Espaço
                    </v-card>
                    <v-card
                      class="pa-8"
                      outlined
                      tile
                    >
                      <div>
                        <!--  aqui lista de alunos -->
                      </div>
                      Espaço 2
                    </v-card>
                  </v-col>
                  <v-responsive
                    v-if="n === 2"
                    :key="`width-${n}`"
                    width="100%"
                  ></v-responsive>
                </template>
              </v-row>
            </v-container>
          </v-div>
        </v-content>

        <!-- If using vue-router -->
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

export default {
  name: 'Home',
  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard' },
      { title: 'Alunos', icon: 'mdi-image' },
    ],
    right: null,
  }),

  components: {
    MainHeader,
    AsideMenu,
  },
  methods: {
    //
  },
};
</script>
