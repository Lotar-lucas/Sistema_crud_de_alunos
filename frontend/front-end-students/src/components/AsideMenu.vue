<template>
  <v-card
    align-stretch
    height="auto"
    width="auto"
    class="mx-auto"
  >
    <v-navigation-drawer permanent >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Aplicação
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
</template>

<script>
export default {
  name: 'AsideMenu',
  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard' },
      { title: 'Alunos', icon: 'mdi-image' },
    ],
    right: null,
  }),
};
</script>

<style>

</style>
