new Vue({
    el: '#app',
    data: {
      currentTab: 'login',
      loginEmail: '',
      loginPassword: '',
      signupName: '',
      signupEmail: '',
      signupPassword: ''
    },
    methods: {
      login: function() {
        alert('Login: ' + this.loginEmail + ' Senha: ' + this.loginPassword);
      },
      signup: function() {
        alert('Nome: ' + this.signupName + ' Email: ' + this.signupEmail + ' Senha: ' + this.signupPassword);
      }
    }
  });