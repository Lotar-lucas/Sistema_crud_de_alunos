<template>
    <v-data-table
      :headers="headers"
      :items="students"
      item-key="RA"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
      flex-row
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Buscar Aluno"
          class="mx-3"
        ></v-text-field>
      </template>
    </v-data-table>

</template>

<script>
export default {
  name: 'StudentList',
  data: () => ({
    search: '',
    name: '',
    students: [
      {
        RA: 123456,
        name: 'Lucas Lotar',
        CPF: '03565767019',
        email: 'Lucas.Lotar@gmail.com',
      },
      {
        RA: 213546,
        name: 'Thais Pazzin',
        CPF: '08545767059',
        email: 'Thais@gmail.com',
      },
      {
        RA: 756478,
        name: 'Rosangela',
        CPF: '07542767079',
        email: 'RoChocolate@gmail.com',
      },
    ],
  }),
  computed: {
    headers: () => [
      {
        text: 'Registro Acadêmico',
        value: 'RA',
      },
      { text: 'Nome', value: 'name' },
      { text: 'CPF', value: 'CPF' },
      { text: 'Email', value: 'email' },
    ],
  },
  methods: {
    filterOnlyCapsText(value, search) {
      console.log(value);
      return value != null
      && search != null
      && typeof value === 'string'
      && value.toString().toLocaleLowerCase().indexOf(search) !== -1;
    },
  },
};
</script>

<style>

</style>
