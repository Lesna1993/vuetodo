<template>
  <div class="home">
    <h1>Title</h1>
    <create-task :last-id="tasks[tasks.length - 1].id" @save="addTask"></create-task>
    <index-task all-tasks="tasks" :active="true"></index-task>
    <index-task all-tasks="tasks" :active="false"></index-task>
  </div>
</template>

<script>
import CreateTask from '@/components/Tasks/Create.vue';
import IndexTask from '@/components/Tasks/Index.vue';

export default {
  name: 'home',
  components: { CreateTask, IndexTask },
  data() {
    return {
      tasks: [
        {
          text: 'First task',
          completedBy: '',
          completedAt: '',
          priority: false,
          active: true,
          id: 0,
        },
      ],
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
  },
};
</script>
