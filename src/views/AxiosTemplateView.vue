<template>
  <div>
    帳號: <input type="text" v-model="form.account" /> 密碼:
    <input type="text" v-model="form.password" />
    <button @click="insertAccount">送出</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: '',
        password: ''
      },
      account: '',
      password:'',
      formData: {}
    }
  },
  methods: {
    async postForm() {
      const response = await this.axios.post('/create_account', this.form)
      return response
    },
    async insertAccount() {
      try {
        const response = await this.postForm()
        // 專注在 status 200 處理
        const { data } = response
        alert(data.message)
      } catch (exception) {
        // 處理 status 200 狀況之外
        console.error(exception)
      }
    },
    async getAccount() {
      const response = await this.axios.get('/get_account?account=1009999')
      return response
    }
  },
  async created() {
    try {
      const accountData = await this.getAccount()
      this.formData = { ...accountData }
    } catch (exception) {
      console.error(exception)
    }
  }
}
</script>
