<template>
  <component :is="activeComponent" />
</template>

<script>
import StudentList from './StudentList.vue';

export default {
  name: 'Content',
  data: () => ({
    activeComponent: 'StudentList',
  }),
  components: {
    StudentList,
  },
};
</script>

<style>

</style>
