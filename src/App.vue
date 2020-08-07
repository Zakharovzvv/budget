<template>
  <div id="app">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalance"/>
    <BudgetList :list="operationsList"/>
  </div>

</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';
import { mapGetters } from 'vuex';
import {mapActions} from 'vuex';


export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  data: () => ({
    // list: {
    //   1: {
    //     type: 'Income',
    //     comment: 'First income',
    //     value: 100,
    //     id: 1,
    //   },
    //   2: {
    //     type: 'Outcome',
    //     comment: 'First outcome',
    //     value: -50,
    //     id: 2,
    //   }
    // },
  }),
  computed: {
    ...mapGetters('operations', ['operationsList']),
    totalBalance() {
      return Object.values(this.operationsList)
          .reduce((acc, item) => acc + item.value, 0);
    },
   },
  mounted:function () {
    this.$root.$on('deleteItem',this.onDeleteItem);
  },
  methods: {

    onDeleteItem(id) {
      this.$delete(this.operationsList, id);
    },
    ...mapActions('operations',['addNewOperation']),
    onFormSubmit(data) {
      this.addNewOperation(data);
      // const newObj = {
      //   ...data,
      //   id: String(Math.random())
      // };
      // this.$set(this.list, newObj.id, newObj);
    },

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
