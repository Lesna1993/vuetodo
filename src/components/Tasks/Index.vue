<template>
  <section>
    index
    {{ tasks }}
  </section>
</template>
<script>
  export default {
    props: ['allTasks', 'active'],
    data() {
      return {
        tasks: [],
      };
    },
    created() {
      this.tasks = this.allTasks.filter(task => task.active === this.active);
    },
  };
</script>
