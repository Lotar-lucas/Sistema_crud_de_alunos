<template>
  <StudentList />
</template>

<script>
import StudentList from './StudentList.vue';

export default {
  name: 'Content',
  data: () => ({
    activeComponent: 'welcomeScreen',
  }),
  components: {
    StudentList,
  },
};
</script>

<style>

</style>
