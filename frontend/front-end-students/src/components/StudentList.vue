<template>
  <div>
    <div class="alert" :class="{active_alert:activAlert}">
      <p>{{messageAPI}}</p>
    </div>

    <v-data-table :headers="headers" :items="studentsData" sort-by="RA" class="elevation-1">

      <template v-slot:top>
        <v-toolbar flat >
          <v-toolbar-title>Consulta de alunos</v-toolbar-title>

          <v-divider class="mx-4" inset vertical ></v-divider>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px" >
            <template v-slot:activator="{ on, attrs }">

              <v-btn color="#43ACB4" dark class="mb-2" v-bind="attrs" v-on="on">
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
                      <v-text-field
                      v-model="editedItem.username"
                      label="Nome"
                      :counter="50"
                      :rules="nameRules"
                      hint="Nome Completo"
                      persistent-hint
                      required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" >
                      <v-text-field
                      v-model="editedItem.email"
                      label="E-mail"
                      hint="exemplo@exemplo.com"
                      persistent-hint
                      :rules="emailRules"
                      required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" >
                      <v-text-field
                      v-model="editedItem.RA"
                      label="RA"
                      :counter="6"
                      :rules="RARules"
                      persistent-hint
                      required
                      :disabled='!isEdit'
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" >
                      <v-text-field
                      v-model="editedItem.CPF"
                      label="CPF"
                      :rules="CPFRules"
                      hint="Sem traços ou pontos"
                      persistent-hint
                      required
                      :disabled='!isEdit'
                      ></v-text-field>
                    </v-col>
                  </v-row>

                </v-container>
                  <small>*Todos os campos obrigatórios</small>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="red" darken-1 text @click="close" >
                  Cancelar
                </v-btn>

                <v-btn color="#43ACB4" darken-1 bold text @click="save" >
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

      <template v-slot:item.actions="{ item }">
        <v-icon small color="#43ACB4" class="mr-2" @click="editItem(item)" >
          mdi-pencil
        </v-icon>

        <v-icon small color="red" @click="deleteItem(item)" >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

    <div class='alert' :class="{active_alert:activAlert}">
      <p clas='alert_menssage'>{{menssageAlert}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    menssageAlert: 'Estudante criado ou editado com sucesso',
    activAlert: false,
    validateEdit: false,

    nameRules: [(v) => !!v || 'Nome é obrigatório',
      (v) => (v && v.length <= 50) || 'O nome deve ter menos de 50 caracteres',
      (v) => /[a-zA-Z|ç|À-ú](?!.*[/.\-/_])$/g.test(v) || 'Nome deve ser válido',
    ],

    emailRules: [(v) => !!v || 'E-mail é obrigatório', (v) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'],

    RARules: [
      (v) => {
        const RaSizeArray = [];
        RaSizeArray.push(...v);
        return RaSizeArray.length < 7 || 'RA deve ter menos de 7 caracteres';
      },
    ],

    CPFRules: [(v) => /^-?\d+\d*$/g.test(v) || 'CPF deve ter somente números',
      (v) => {
        const CpfSizeArray = [];
        CpfSizeArray.push(...v);
        return CpfSizeArray.length < 12 || 'CPF deve ter menos de 11 caracteres';
      },
    ],

    headers: [
      { text: 'Registro acadêmico', value: 'RA' },
      { text: 'Nome', value: 'username' },
      { text: 'CPF', value: 'CPF' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],

    editedItem: {
      RA: '',
      username: '',
      email: '',
      CPF: '',
    },

    defaultItem: {
      RA: '',
      username: '',
      email: '',
      CPF: '',
    },
  }),

  computed: {
    ...mapState(['studentsData', 'messageAPI']),

    isEdit() {
      return !this.validateEdit;
    },

    formTitle() {
      return !this.validateEdit ? 'Novo aluno' : 'Editar aluno';
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

  created() {
    this.$store.dispatch('getStudent');
  },

  methods: {
    ...mapActions(['getStudent', 'deleteStudent', 'createStudent', 'editStudent']),

    messageError() {
      if (this.messageAPI) {
        this.activAlert = true;
        console.log(this.messageAPI);
        this.alert(this.messageAPI);
      }
    },

    alert(message) {
      this.menssageAlert = message;
      this.activAlert = true;
      setTimeout(() => {
        this.activAlert = false;
      }, 4000);
    },

    editItem(item) {
      this.validateEdit = true;
      this.editedItem = { ...item };
      this.dialog = true;
    },
    deleteItem(item) {
      this.validateEdit = false;
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      await this.$store.dispatch('deleteStudent', { ra: this.editedItem.RA });
      await this.$store.dispatch('getStudent');
      this.closeDelete();
    },
    close() {
      this.validateEdit = false;
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
      });
    },
    closeDelete() {
      this.validateEdit = false;
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
      });
    },
    async save() {
      if (this.validateEdit) {
        await this.$store.dispatch('editStudent', {
          ra: this.editedItem.RA,
          username: this.editedItem.username,
          email: this.editedItem.email,
          cpf: this.editedItem.CPF,
        });

        await this.$store.dispatch('getStudent');
        this.alert();
        this.close();
      }
      await this.$store.dispatch('createStudent', {
        ra: this.editedItem.RA,
        username: this.editedItem.username,
        email: this.editedItem.email,
        cpf: this.editedItem.CPF,
      });
      this.alert();

      await this.$store.dispatch('getStudent');
      this.validateEdit = false;
      this.close();
    },
  },
};
</script>

<style >

.alert {
  position: absolute;
  top: 200px;
  color:#ffff;
  z-index: 10;
  width: 500px;
  height: 50px;
  text-align: center;
  border-radius: 40px;
  display: none;
  box-shadow: 0px 3px 4px rgba(0,0,0,.1), 0px, 4px, 10px rgba(0,0,0,.2);
}

.active_alert {
  animation: fadeInDown .3s forwards;
  display: inline-block;
  background-color: #43ACB4;
}

@keyframes fadeInDown {
  from {
    transform: translate3d(0, -60px, 0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
}

.alert_menssage {
  background-color: #43ACB4;
  padding: 20px 40px;
  border: 2px solid black;
}

.disable {
  disabled: true;
}
</style>
