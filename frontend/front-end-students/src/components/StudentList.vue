<template>
  <v-data-table
    :headers="headers"
    :items="studentsData"
    sort-by="RA"
    class="elevation-1">

    <template v-slot:top>
      <v-toolbar flat >

        <v-toolbar-title>Consulta de alunos</v-toolbar-title>

        <v-divider class="mx-4" inset vertical ></v-divider>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" max-width="500px" >

          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2"
            v-bind="attrs" v-on="on" >
              Cadastrar Aluno
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>

                <v-row>
                  <v-col cols="12" >
                    <v-text-field v-model="editedItem.username" label="Nome"></v-text-field>
                  </v-col>

                  <v-col cols="12" >
                    <v-text-field v-model="editedItem.email" label="E-mail"></v-text-field>
                  </v-col>

                  <v-col cols="12" >
                    <v-text-field v-model="editedItem.ra" label="RA" ></v-text-field>
                  </v-col>

                  <v-col cols="12" >
                    <v-text-field v-model="editedItem.cpf" label="CPF" ></v-text-field>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="blue darken-1" text @click="close" >
                Cancelar
              </v-btn>

              <v-btn color="blue darken-1" text @click="save" >
                Salvar
              </v-btn>

            </v-card-actions>

          </v-card>

        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">

          <v-card>
            <v-card-title class="text-h5">
              Tem certeza de que deseja excluir o(a)aluno(a)?
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>

          </v-card>

        </v-dialog>

      </v-toolbar>

    </template>
<!-- parte de cima ta tabela  -->
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <!-- <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template> -->
  </v-data-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,

    headers: [
      { text: 'Registro acadêmico', value: 'RA' },
      { text: 'Nome', value: 'username' },
      { text: 'CPF', value: 'CPF' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],

    desserts: [],
    editedIndex: -1,

    editedItem: {
      ra: '',
      username: '',
      email: '',
      cpf: '',
    },

    defaultItem: {
      ra: '',
      username: '',
      email: '',
      cpf: '',
    },
  }),

  computed: {
    ...mapState(['studentsData', 'messageAPI']),

    formTitle() {
      return this.editedIndex === -1 ? 'Editar aluno' : 'Novo aluno';
    },
  },

  watch: {
    dialog(val) {
      return val || this.close();
    },
    dialogDelete(val) {
      return val || this.closeDelete();
    },
  },

  beforeMount() {
    this.initialize();
    this.$store.dispatch('getStudent');
  },

  methods: {
    ...mapActions(['getStudent', 'deleteStudent', 'createStudent', 'editStudent']),
    initialize() {},

    editItem(item) {
      this.editedIndex = -1;
      // console.log(item.email);
      // console.log(item.RA);
      // console.log(item.username);
      // console.log(item.CPF);

      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      await this.$store.dispatch('deleteStudent', { ra: this.editedItem.RA });
      await this.$store.dispatch('getStudent');
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },
    async save() {
      await this.$store.dispatch('createStudent', {
        ra: this.editedItem.ra,
        username: this.editedItem.username,
        email: this.editedItem.email,
        cpf: this.editedItem.cpf,
      });
      await this.$store.dispatch('getStudent');
      // Object.assign(this.desserts[this.editedIndex], this.editedItem);
      // } else {
      //   this.desserts.push(this.editedItem);
      // }
      this.close();
    },
  },
};
</script>
