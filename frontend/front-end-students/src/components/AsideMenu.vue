<template>
  <v-navigation-drawer permanent  text-align-center>
    <v-img src="../assets/img/A+Educacao.png" aspect-ratio="1" />
    <h2>Módulo Acadêmico</h2>

    <v-divider></v-divider>
    <v-list nav >

      <v-list-item v-for="item in items" :key="item.title" link >
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
      { title: 'Alunos', icon: 'mdi-account-search-outline', value: 'actions' },
      { title: 'Turmas', icon: 'mdi-school' },
      { title: 'Protocolos de Alunos', icon: 'mdi-view-list' },
      { title: 'Solicitações', icon: 'mdi-account-alert' },
      { title: 'Acompanhamentos', icon: 'mdi-note-alert' },
    ],
    right: null,
  }),
};
</script>

<style>

</style>
