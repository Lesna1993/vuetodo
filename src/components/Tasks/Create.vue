<template>
  <section>
    create
    <el-row>
      <el-form ref="form" :model="task" label-width="120px">
        <el-input v-model="task.text"/>
        <el-date-picker v-model="task.completedBy"/>
        <el-checkbox label="Priority" name="task.priority"></el-checkbox>
        <el-button type="primary" @click="saveTask">Create</el-button>
      </el-form>
    </el-row>
  </section>
</template>
<script>
export default {
  props: ['lastId'],
  data() {
    return {
      task: {
        text: '',
        completedBy: '',
        completedAt: '',
        priority: false,
        active: true,
        id: 0,
      },
    };
  },
  methods: {
    saveTask() {
      this.task.id = this.lastId + 1;
      this.$emit('save', this.task);
    },
  },
};
</script>
