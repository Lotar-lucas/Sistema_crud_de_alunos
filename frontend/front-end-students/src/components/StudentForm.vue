<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px" >

      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" >
          Cadastrar Aluno
        </v-btn>
      </template>

      <v-card>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >

          <v-card-title>
            <span class="text-h5">Cadastrar Aluno</span>
          </v-card-title>

          <v-card-text>

              <v-row>
                <v-col cols="12" >
                  <v-text-field
                  v-model="username"
                  :counter="50"
                  :rules="nameRules"
                  label="Nome"
                  hint="Nome Completo"
                  persistent-hint
                  required >
                  </v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    hint="exemplo@exemplo.com"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="ra"
                    label="RA"
                    :counter="6"
                    :rules="RARules"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="cpf"
                    label="CPF"
                    :rules="CPFRules"
                    hint="Sem traços ou pontos"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

          </v-card-text>
          <v-card-actions>
            <small>*Todos os campos obrigatórios</small>

            <v-spacer></v-spacer>
            <v-btn
              color="red darken-1"
              text
              @click="dialog = false"
            >
              Cancelar
            </v-btn>
            <v-btn color="blue darken-3" text @click='createStudentOfDatabase'>
              Salvar
            </v-btn>

          </v-card-actions>

        </v-form>
      </v-card>

    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'StudentForm',
  data: () => ({
    dialog: false,
    valid: true,
    username: '',
    email: '',
    ra: '',
    cpf: '',
    nameRules: [
      (v) => !!v || 'Nome é obrigatório',
      (v) => (v && v.length <= 50) || 'O nome deve ter menos de 50 caracteres',
      (v) => /[a-zA-Z|ç|À-ú](?!.*[/.\-/_])$/g.test(v) || 'Nome deve ser válido',
    ],
    emailRules: [
      (v) => !!v || 'E-mail é obrigatório',
      (v) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
    ],
    RARules: [
      (v) => {
        const RaSizeArray = [];
        RaSizeArray.push(...v);
        return RaSizeArray.length < 7 || 'RA deve ter menos de 7 caracteres';
      },
    ],
    CPFRules: [
      (v) => {
        const CpfSizeArray = [];
        CpfSizeArray.push(...v);
        return CpfSizeArray.length < 12 || 'CPF deve ter menos de 11 caracteres';
      },
      (v) => /^-?\d+\d*$/g.test(v) || 'CPF deve ter somente números',
    ],
  }),
  computed: {
    ...mapState(['studentsData,username,email,cpf,ra']),
  },
  methods: {
    ...mapMutations(['CREATE_STUDENT']),
    createStudentOfDatabase() {
      this.dialog = false;
      this.$store.dispatch('createStudent', {
        ra: this.ra,
        username: this.username,
        email: this.email,
        cpf: this.cpf,
      });
      console.log('passei no form');
      this.$store.dispatch('getStudent');
      // console.log('entrei no student Form');
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style>

</style>
