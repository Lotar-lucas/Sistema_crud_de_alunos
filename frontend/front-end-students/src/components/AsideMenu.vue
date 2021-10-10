<template>
  <v-navigation-drawer permanent >
    <v-img
      src="../assets/img/A+Educacao.png"
      aspect-ratio="1"
    />
    <v-divider></v-divider>

    <v-list nav >

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
</template>

<script>
export default {
  name: 'AsideMenu',
  data: () => ({
    items: [
      { title: 'Buscar', icon: 'mdi-account-search-outline' },
      { title: 'Cadastrar alunos', icon: 'mdi-account-plus' },
    ],
    right: null,
  }),
};
</script>

<style>

</style>
