<template>
  <v-row align-center="center" justify="center">
    <v-col cols="12" sm="8" md="4" align-center="center">
      <v-card width="500" class="elevation-4 text-left" shaped color= #C71585k>
        <v-card-title>Login</v-card-title>
        <v-card-subtitle>Login to your dashboard</v-card-subtitle>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              v-model="auth.email"
            ></v-text-field>

            <v-text-field
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="auth.password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="text-center">
          <v-btn
            class="login-button"
            @click="login"
            depressed
            large
            >Login</v-btn
          >
          <v-btn class="reset-button" @click="forgotPassword" depressed large
            >Forgot Password</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-snackbar
        :timeout="4000"
        v-model="snackbar"
        absolute
        bottom
        center
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password).then((userCredential) => {
        const user = userCredential.user
        //we are signed in
        $nuxt.$router.push('/')
      })
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      })
    },
    
    async signup() {
      console.log("strted")
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        this.$router.push('/aftersignup')
      } catch (e) {
        handleError(e)
      }
    },

    forgotPassword() {
      let that = this
      this.$fire.auth.sendPasswordResetEmail(this.auth.email)
      .then(function (){
        that.snackbarText = 'reset link sent to ' + that.auth.email
        that.snackbar = true
      })
      .catch(function (error) {
        that.snackbarText = error.message
        that.snackbar = true
      })
    }
  }
}
</script>

<style>

</style>

  