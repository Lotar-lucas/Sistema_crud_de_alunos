<template>
  <v-data-table
    :headers="headers"
    :items="studentsData"
    item-key="RA"
    class="elevation-2"
    :search="search"
    :custom-filter="filterOnlyCapsText"
    >
    <template v-slot:top>
      <v-container class="d-flex flex-wrap" >
        <v-text-field
          v-model="search"
          label="Buscar Aluno"
          class="mx-3 align-content-center"></v-text-field>
        <StudentForm class="align-content-center"/>
      </v-container>
        <button @click="edit(item)" class="btn ">Editar</button>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import StudentForm from './StudentForm.vue';

export default {
  name: 'StudentList',
  data: () => ({
    search: '',
    students: [],
  }),
  beforeMount() {
    this.fetchStudents();
  },
  components: {
    StudentForm,
  },
  computed: {
    ...mapState(['studentsData', 'messageAPI']),
    headers: () => [
      { text: 'Registro Acadêmico', value: 'RA' },
      { text: 'Nome', value: 'username' },
      { text: 'CPF', value: 'CPF' },
      { text: 'Email', value: 'email' },
      { text: 'Ações', value: '' },
    ],
  },
  methods: {
    ...mapActions(['getStudent']),
    filterOnlyCapsText(value, search) {
      return value != null
      && search != null
      && typeof value === 'string'
      && value.toString().toLocaleLowerCase().indexOf(search) !== -1;
    },
    fetchStudents() {
      this.$store.dispatch('getStudent');
    },
  },
};
</script>

<style>

</style>
