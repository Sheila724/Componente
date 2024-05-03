new Vue({
  el: '#app',
  data: {
    currentTab: 'login',
    loginFormEmail: '',
    loginFormPassword: '',
    signupFormName: '',
    signupFormEmail: '',
    signupFormPassword: ''
  },
  methods: {
    slide(tab) {
      this.currentTab = tab;
    },
    loginFormSubmit() {
      // Aqui você pode implementar a lógica para o envio do formulário de login
    },
    signupFormSubmit() {
      // Aqui você pode implementar a lógica para o envio do formulário de inscrição
    }
  },
  watch: {
    currentTab(newTab) {
      if (newTab === 'login') {
        this.$refs.loginForm.style.marginLeft = "0%";
        this.$refs.signupText.style.marginLeft = "0%";
      } else if (newTab === 'signup') {
        this.$refs.loginForm.style.marginLeft = "-50%";
        this.$refs.signupText.style.marginLeft = "-50%";
      }
    }
  }
});