<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="flex flex-center"
        style="font-family: Lato;"
      >
        <!--        <div id="particles-js"></div>-->
        <q-card
          :style="$q.platform.is.desktop ? 'width:55%;' : ''"
          class="row my-card items-center q-pa-none q-ma-none shadow-24"
        >
          <q-card-section
            v-if="$q.platform.is.desktop"
            class="col-md-4 col-lg-4 col-sm-12 sol-xs-12 items-start float-left"
            style="background-color: #1f509d"
            :style="{'height':(win_height-270)+'px'}"
            horizontal
          >
            <div class="full-width items-center q-px-lg">
              <br /><br />
              <div class="text-weight-bolder text-white text-h5">Facebook helps you connect and share with the people in your life.</div>

              <br /><br />

              <div>
                <img
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                  style="width: 100%"
                />
              </div>

            </div>
          </q-card-section>
          <q-card-section class="col-md-8 col-lg-8 col-sm-12 sol-xs-12 float-left">
            <q-card-section class="items-center">
              <div>
                <div
                  v-if="!$q.platform.is.desktop"
                  class="text-weight-bolder text-center q-mb-md text-primary text-h6"
                >Quasar Shopping</div>
                <q-form
                  :style="$q.platform.is.desktop ? 'width:55%;margin: auto;' : 'margin: auto;'"
                  class="q-gutter-md"
                >
                  <span class="text-h4 text-weight-bold">Sign into an account</span>
                  <br />

                  <div class="row">

                  </div>

                  <q-input
                    dense
                    type="email"
                    outlined
                    v-model="email"
                    label="Mobile number or email"
                    lazy-rules
                  />

                  <q-input
                    dense
                    type="password"
                    outlined
                    v-model="password"
                    label="New Password"
                    lazy-rules
                  />

                  <div class="q-pa-md">
                    <div class="q-gutter-sm">

                    </div>

                  </div>

                  <div>
                    <q-btn
                      class="text-capitalize"
                      size="sm"
                      style="width:75px"
                      dense
                      label="Sign Up"
                      to="/home"
                      type="button"
                      color="primary"
                    />
                    <q-btn
                      class="float-right text-capitalize"
                      size="sm"
                      style="width:75px"
                      dense
                      label="Sign Out"
                      type="button"
                      color="primary"
                    />
                  </div>

                </q-form>

              </div>

            </q-card-section>
          </q-card-section>

        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  data () {
    return {
      firstname: 'Toussaint',
      lastname: 'Alexander',
      password: '@123sEcrEt456!',
      date: '2019/02/01',
      remember_me: false
    }
  },
  async SignIn () {
    try {
      const user = await Auth.signIn(username, password);
    } catch (error) {
      console.log('Error Signing In', error)
    }
  },
  async resendConfirmationCode () {
    try {
      await Auth.resendSignUp(username)
      console.log('Code Resent Succesfully')
    } catch (err) {
      console.log('Error Resending Code: ', err)
    }
  }
</script>

<style>
.my-card {
  /*width: 55%;*/
  height: 30%;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  /*background: linear-gradient(145deg, #abbaab 15%, #ffffff 70%);*/
  /*background: linear-gradient(145deg,#f7f8f8 11%, #627e79 75%);*/
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

.login-form {
  position: absolute;
}
</style>
