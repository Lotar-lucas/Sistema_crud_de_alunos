<template>
  <div>
    <MainHeader />
    <v-main >
      <!-- Provides the application the proper gutter -->
      <v-container d-flex flex-row align-stretch>
        <v-card
          height="400"
          width="256"
          class="mx-auto"
        >
          <v-navigation-drawer permanent >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Application
                </v-list-item-title>
                <v-list-item-subtitle>
                  subtext
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
        <v-content>opsaiosiadoi</v-content>

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
  },
  methods: {
    //
  },
};
</script>
