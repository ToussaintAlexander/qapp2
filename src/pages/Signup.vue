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
                  <span class="text-h4 text-weight-bold">Create an account</span>
                  <br />
                  <span class="text-h6 text-weight-bold">It's quick and easy</span>

                  <div class="row">

                    <q-input
                      dense
                      outlined
                      v-model="firstname"
                      label="First Name"
                      lazy-rules
                    />

                    <q-space></q-space>

                    <q-input
                      dense
                      outlined
                      v-model="lastname"
                      label="Last Name"
                      lazy-rules
                    />

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

                  <div class="text-weight-bolder text-h6">Birthday</div>

                  <div
                    class="q-pa-md"
                    style="max-width: 300px"
                  >
                    <q-input
                      filled
                      v-model="date"
                      mask="date"
                      :rules="['date']"
                    >
                      <template v-slot:append>
                        <q-icon
                          name="event"
                          class="cursor-pointer"
                        >
                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date
                              v-model="date"
                              @input="() => $refs.qDateProxy.hide()"
                            />
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>

                  <div class="text-weight-bolder text-h6">Gender</div>

                  <div class="q-pa-md">
                    <div class="q-gutter-sm">
                      <q-radio
                        v-model="shape"
                        val="female"
                        label="Female"
                      />
                      <q-radio
                        v-model="shape"
                        val="male"
                        label="Male"
                      />
                      <q-radio
                        v-model="shape"
                        val="custom"
                        label="Custom"
                      />
                    </div>

                    <div class="q-px-sm">
                      By clicking Sing-Up, you agree to our Terms, Data Policy and
                      <br />Cookie Policy. You may receive SMS notifications from us and
                      <br />can opt out at any time. <strong>{{ shape }}</strong>
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
                      class="float-right text-blue-9 text-capitalize"
                      size="sm"
                      style="width:75px;border: 1px solid #36669e;"
                      dense
                      label="Sign In"
                      type="button"
                    />
                  </div>

                  <div class="text-weight-bolder text-h6 q-pa-lg">Create a Page for a celebrity, band or business.</div>

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
import MainLayout from '../layouts/MainLayout'
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  data () {
    return {
      firstname: 'Toussaint',
      lastname: 'Alexander',
      password: '@123sEcrEt456!',
      date: '2019/02/01',
      remember_me: false,

      username: ' ',
      code: ' ',
      signIn: ' '
    }
  },
  created () {
    this.$emit('update:layout', MainLayout)

    this.isUserSignedIn()
    AmplifyEventBus.$on('authState', info => {
      if (info == 'signedIn') {
        this.isUserSignedIn()
      } else {
        this.signedIn = false
      }
    })
  },
  methods: {
    async signUp () {
      try {
        const user = await Auth.signUp({
          username,
          password,
          attributes: {
            email,
            phone_number

          }
        })
        console.log({ user })
      } catch (error) {
        console.log('Error Signing Up:', error)
      }
    },
    async isUserSignedIn () {
      try {
        const userObj = Auth.currentAuthenticatedUser()
        this.signedIn = true
        console.log(userObj)
      } catch (err) {
        this.signedIn = false
        console.log(err)
      }
    }
  },
  async confirmSignUp () {
    try {
      await Auth.confirmSignUp(username, code)
    } catch (error) {
      console.log('Error Confirming Sign Up', error)
    }
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
