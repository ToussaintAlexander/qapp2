<template>
  <q-layout view="lHh Lpr lFf">
    <q-resize-observer @resize="onResize" />
    <q-header>
      <q-toolbar>

        <q-toolbar-title>
          <!-- Quasar App -->
          <q-img
            src="statics/logo/horizontal-white.png"
            style="max-height:250px;max-width:250px; display:block"
          ></q-img>
        </q-toolbar-title>

        <div class="gt-sm">
          <q-btn
            flat
            rounded
            label="Courses"
            class="q-mr-xs"
          />
          <q-btn
            outline
            rounded
            label="Sign Up"
            class="q-mr-md"
            :to="{ path: 'signup' }"
          />
          <q-btn
            outline
            rounded
            label="Sign In"
            :to="{ path: 'signin' }"
          />
        </div>
        <div>
          <q-btn
            class="lt-md"
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            icon="menu"
            aria-label="Menu"
          />

        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-5"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >Essential Links</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      user: ' ',
      signIn: 'false',
      essentialLinks: [
        {
          title: 'Courses',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Sign Up',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Sign In',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        }

      ]
    }
  },
  computed: {
    isLoggedIn () {
      return this.signedIn
    }
  },
  mounted: {
    mounted () {
      this.$AmplifyEventBus.$on('authState', info => {
        this.signedIn = true
      })
    }
  },
  beforeCreate () {
    this.$Auth
      .currentAuthenticatedUser()
      .then(user => {
        this.user = user
        this.signedIn = true
      })
      .catch(() => {
        this.signedIn = false
      })
  },
  methods: {
    // openURL,
    async signOut () {
      await this.$Auth
        .signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err))
      this.signedIn = false
      parent.signedIn = false
      this.$router.push({ name: 'signout' })
    }
  }
}
</script>
