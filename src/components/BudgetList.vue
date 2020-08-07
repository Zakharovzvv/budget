<template>
    <div class="budget-list-wrap">
        <ElCard :header="header">
            <template v-if="isEmpty">
                <div class="list-item" v-for="(item,prop) in list" :key="prop">
                    <BudgetListItem :item="item"/>
                </div>
            </template>
            <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
         </ElCard>
    </div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem';
  export default {
    name: "BudgetList",
    components: { BudgetListItem },
    comments:{
      BudgetListItem
    },
    props:{
      list:{
        type:Object,
        default:()=>({})
      }
    },
    data:()=>({
      header:"Budget  list",
      emptyTitle:"Empty list",
    }),
    computed:{
      isEmpty(){
        return Object.keys(this.list).length;
         }
    },

  }
</script>

<style lang="sass" scoped>
.budget-list-wrap
    max-width: 50%
    margin: 0 auto
    padding: 1%


</style>
