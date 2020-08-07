<template>
    <div class="total-value" >Balance
    <span :class="classTotal">{{total}}</span>
    </div>
</template>

<script>
	export default {
		name: 'TotalBalance',
      props:{
			total:{
				type:Number,
                default:0
            }
      },
    computed:{
		  classTotal(){
          return{
            'green':this.total>0,
            'red':this.total<0,
            'black':this.total===0,
          }
      }
    },
	};
</script>

<style lang="sass" scoped>
.total-value
    font-size: 2em
    text-transform: uppercase
    text-align: center
    margin: 1%
.green
  color: green
.red
  color: red
.black
  color: black
</style>
