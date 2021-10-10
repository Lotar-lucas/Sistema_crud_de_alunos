<template>
    <StudentList />
</template>

<script>
import StudentList from './StudentList.vue';

export default {
  name: 'Content',
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
