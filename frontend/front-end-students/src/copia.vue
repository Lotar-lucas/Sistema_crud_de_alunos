<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="studentsData"
    >
      <template v-slot:item.name="props">
        <v-edit-dialog
          :return-value.sync="props.item.name"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          {{ props.item.name }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.name"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.iron="props">
        <v-edit-dialog
          :return-value.sync="props.item.iron"
          large
          persistent
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.iron }}</div>
          <template v-slot:input>
            <div class="mt-4 text-h6">
              Update Iron
            </div>
            <v-text-field
              v-model="props.item.iron"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
    </v-data-table>

    <v-snackbar
      v-model="snack"
      :timeout="3000"
      :color="snackColor"
    >
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          v-bind="attrs"
          text
          @click="snack = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';
// import StudentForm from './StudentForm.vue';

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
    // StudentForm,
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
