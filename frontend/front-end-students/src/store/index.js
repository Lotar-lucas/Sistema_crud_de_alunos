import Vue from 'vue';
import Vuex from 'vuex';
import {
  fetchGetAllStudents,
  fetchCreateStudent,
  fetchExcludeStudent,
  fetchEditStudent,
} from '../services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    studentsData: [],
    messageAPI: '',
  },

  mutations: {
    GET_ALL_STUDENTS(state, payload) {
      state.studentsData = payload;
    },
    ADD_MESSAGE_API(state, payload) {
      if (payload.message) {
        state.messageAPI = payload.message;
      }
      state.messageAPI = payload.error;
    },
  },
  actions: {

    async getStudent(context) {
      const responseAPI = await fetchGetAllStudents('GET', 'students');
      context.commit('GET_ALL_STUDENTS', responseAPI.studentsData);
    },

    async deleteStudent(context, { ra }) {
      const responseAPI = await fetchExcludeStudent('DELETE', `students/${ra}`);
      context.commit('ADD_MESSAGE_API', responseAPI);
    },

    async createStudent(context, {
      ra,
      username,
      email,
      cpf,
    }) {
      const responseAPi = await fetchCreateStudent('POST', `students/${ra}`, username, email, cpf);
      if (!responseAPi) {
        // eslint-disable-next-line
        alert('Desculpe!, Por favor revise os dados de cadastro do estudante.');
      }
      console.log(responseAPi, 'oioio');
      context.commit('ADD_MESSAGE_API', responseAPi);
    },

    async editStudent(context, {
      ra,
      username,
      email,
      cpf,
    }) {
      const responseAPI = await fetchEditStudent('PUT', `students/${ra}`, username, email, cpf);
      context.commit('ADD_MESSAGE_API', responseAPI);
    },
  },
  modules: {},
});
