<template>
<div class="list-item">
  <ConfirmationDialog :title="confirmDialogTitle" :body="confirmDialogBody"  @canceled="deleteCancel" @confirmed="deleteOK" :dialogVisible="deleteConfirmDialogVisible"/>
  <i :class="classIcon"></i>
  <span class="budget-comment">{{this.item.comment}}</span>
  <span class="budget-value">{{this.item.value}}</span>
  <ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>
</div>

</template>

<script>
import ConfirmationDialog from '@/components/ConfirmationDialog';
export default {
name: "BudgetListItem",
  components: { ConfirmationDialog },
  comments:{
    ConfirmationDialog
  },
  data:()=>({
    deleteConfirmDialogVisible: false,
    selectedItemId:-1,
    confirmDialogTitle:'Delete confirmation',
    confirmDialogBody:'',
  }),
  props:{
  item:{
    type:Object,
    default:()=>({})
  }
  },
  methods:{
    deleteCancel(){
      this.deleteConfirmDialogVisible=false;
      this.selectedItemId=-1;
    },
    deleteOK(){
      this.deleteConfirmDialogVisible=false;
      this.$root.$emit("deleteItem",this.selectedItemId);
      this.selectedItemId=-1;
    },
    deleteItem(id){
      this.confirmDialogBody=`Operation ${id} will be deleted`;
      this.deleteConfirmDialogVisible=true;
      this.selectedItemId=id;

    }
  },
  computed: {
    classIcon() {
      return {
        'el-icon-top': this.item.type == 'Income',
        'el-icon-bottom': this.item.type == 'Outcome'
      }
    }
  }
  }
</script>

<style lang="sass"  scoped>
.list-item
  display: flex
  align-items: center
  margin: 1%
.budget-value
  font-weight: bold
  margin-left: auto
  margin-right: 5%
.budget-comment
  margin-left: 1%

</style>
