<template>
  <ElDialog
      :visible.sync="dialogVisible"
      width="30%">
    <span slot="title"> {{title}}</span>
    <span>{{ body }}</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">Cancel</el-button>
    <el-button type="primary" @click="confirm">Confirm</el-button>
  </span>
  </ElDialog>
</template>

<script>
export default {
name: "ConfirmationDialog",
  props:{
  dialogVisible:{
    type:Boolean,
    default:false
  },
    title:{
    type:String,
      default: 'Confirmation'
    },
    body:{
      type:String,
      default: 'Confirmation body'
    }
  },
  data:()=>({

  }),
  methods: {
    cancel() {
      this.dialogVisible = false;
      this.$emit("canceled");
    },
    confirm() {
      this.dialogVisible = false;
      this.$emit("confirmed");
    },
  }
  }
</script>

<style scoped>

</style>
