<template>
  <q-app id="inspire">
    <q-content>
      <q-container
        class="fill-height"
        fluid
      >
        <q-row
          align="center"
          justify="center"
        >
          <q-col
            cols="12"
            sm="8"
            md="4"
          >
            <q-card class="elevation-12">
              <q-toolbar
                color="primary"
                dark
                flat
              >
                <q-toolbar-title>Login form</q-toolbar-title>
                <q-spacer />

              </q-toolbar>
              <q-card-text>
                <q-form>
                  <q-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  />

                  <q-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </q-form>
              </q-card-text>
              <q-card-actions>
                <q-spacer />
                <q-btn color="primary">Login</q-btn>
              </q-card-actions>
            </q-card>
          </q-col>
        </q-row>
      </q-container>
    </q-content>
  </q-app>
</template>

<script>
export default {
  data () {
    return {
      email: ' ',
      shape: ' '
    }
  },
  props: {
    source: String
  }
}
</script>
