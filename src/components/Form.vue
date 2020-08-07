<template>
  <ElCard class="form-card">
    <ElForm ref="addItemForm" :model="formData" :rules="rules" >
      <ElFormItem label="Type" prop="type">
        <ElSelect class="form-select" v-model="formData.type" placeholder="Choose type">
          <ElOption label="Income" value="Income"/>
          <ElOption label="Outcome" value="Outcome"/>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comment" prop="comment">
        <ElInput v-model="formData.comment"/>
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value"/>
      </ElFormItem>
      <ElButton type="primary" @click="onFormSubmit">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
	export default {
		name: 'Form',
		data: () => ({
			formData: {
				type: 'Income',
				comment: '',
				value: 0
			},
      rules: {
				type: [{
					required: true,
					message: 'Please select type',
					trigger: 'blur'
				}],
				comment: [{
					required: true,
					message: 'Please input comment',
					trigger: 'change'
				}],
				value: [
					{
						required: true,
						message: 'Please input value',
						trigger: 'change'
					},
					{
						type: "number",
						message: 'Value must be a number',
						trigger: 'change'
					}
				],
			}
		}),
		methods: {
			onFormSubmit() {
				this.$refs.addItemForm.validate(valid => {
					if (valid) {
						this.$emit('submitForm', { ...this.formData });
						this.$refs.addItemForm.resetFields();
					}
				});
			}
		}
	};
</script>

<style lang="sass" scoped>
  .form-card
    max-width: 50%
    margin: 0 auto

    .form-select
      width: 100%

</style>
