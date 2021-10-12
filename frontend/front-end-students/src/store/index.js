import Vue from 'vue';
import Vuex from 'vuex';
import { fetchGetAllStudents, fetchCreateStudent } from '../services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    studentsData: [],
    messageAPI: {},
  },

  mutations: {
    GET_ALL_STUDENTS(state, payload) {
      state.studentsData = payload;
    },
    CREATE_STUDENT(state, payload) {
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
    async createStudent(context, {
      ra,
      username,
      email,
      cpf,
    }) {
      // console.log(username);
      const responseAPi = await fetchCreateStudent('POST', `students/${ra}`, username, email, cpf);

      console.log(responseAPi);
      context.commit('CREATE_STUDENT', responseAPi);
      // students/1020133/
    },
  },
  modules: {},
});
