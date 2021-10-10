<template>
  <StudentList />
</template>

<script>
import StudentList from './StudentList.vue';

export default {
  name: 'MainContent',
  component: {
    StudentList,
  },
  data: () => ({
    //
  }),
  components: {
    StudentList,
  },
};
</script>

<style>

</style>
