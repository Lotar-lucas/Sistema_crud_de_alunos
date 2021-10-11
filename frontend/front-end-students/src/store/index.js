import Vue from 'vue';
import Vuex from 'vuex';
import fetchAPI from '../services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    studentsData: [],
    username: '',
    email: '',
    cpf: '',
  },

  mutations: {
    GET_ALL_STUDENTS(state, payload) {
      state.studentsData = payload;
    },
    CREATE_STUDENT(state, payload) {
      state.username = payload.username;
      state.email = payload.email;
      state.cpf = payload.cpf;
    },
  },
  actions: {
    async getStudent(context) {
      const responseAPI = await fetchAPI('GET', 'students');
      context.commit('GET_ALL_STUDENTS', responseAPI.studentsData);
    },
    async createStudent(context, datas) {
      console.log(context);
      const responseAPi = await fetchAPI('POST', `students/${ra}`, { username, email, cpf });
      context.commit('CREATE_STUDENT', responseAPi);

      // students/1020133/
    },
  },
  modules: {},
});
