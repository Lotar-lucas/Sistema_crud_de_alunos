<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary >

      <v-list nav dense >
        <v-list-item-group v-model="group"
          color="red" active-class="deep-purple--text text--accent-4" >

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-search-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Administrativo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-finance</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Financeiro</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-clipboard-pulse</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Marketing</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-book-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Acadêmico</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-office-building-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bibliotecas</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar color="#43ACB4" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <h3>Sistema de alunos</h3>
        </v-toolbar-title>
    </v-app-bar>

  </div>
</template>

<script>

export default {
  name: 'MainHeader.vue',
  data: () => ({
    drawer: false,
    group: null,
  }),

};
</script>

<style>

</style>
