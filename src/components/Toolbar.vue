 <template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          facebook
        </q-toolbar-title>

        <div class="row">

          <div
            class="col"
            no-wrap
            justify-end
          >Email or Phone</div>

          <div class="col">Password</div>

          <div class="col"></div>

        </div>

        <div class="row">

          <div class="col">
            <q-input
              bg-color="blue"
              v-model="search"
              filled
              type="search"
              hint="Search"
            />
          </div>

          <q-separator></q-separator>

          <div class="col">
            <q-input
              bg-color="green"
              v-model="search"
              filled
              type="search"
              hint="Search"
            />
          </div>

          <div class="col">
            <q-btn
              color="amber"
              glossy
              label="Log In"
            />
          </div>

        </div>

      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
