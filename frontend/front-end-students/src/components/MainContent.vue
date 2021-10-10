<template>
  <v-container d-flex>
    <StudentList />
  </v-container>
</template>

<script>
import StudentList from './StudentList.vue';

export default {
  name: 'MainContent',
  component: {
    StudentList,
  },
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
      { text: 'Registro Acadêmico', value: 'RA' },
      { text: 'Nome', value: 'name' },
      { text: 'CPF', value: 'CPF' },
      { text: 'Email', value: 'email' },
    ],
  },
  components: {
    StudentList,
  },
  methods: {
    filterOnlyCapsText(value, search) {
      console.log(search);
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
