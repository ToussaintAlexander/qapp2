<template>
  <q-page class="bg-deep-purple-1">
    <div class="row bg-primary">

      <div class="col">

        <div style="max-width:650px; text-align:center;margin-left:auto; margin-right:auto">

          <div class="text-h4 text-bold text-white q-mt-xl q-pt-xl q-pb-lg">Learn Fullstack Development from Industry Experts</div>
          <div class="text-h6 text-bold text-white q-pl-lg q-pr-lg q-pb-sm">Join codeguru.io Community Today to Get Started</div>

          <q-input
            color="black"
            bg-color="white"
            filled
            placeholder="Your Email"
            class="q-pl-lg q-pr-lg"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
            <template v-slot:append>
              <q-btn color="purple">Start Learning</q-btn>
            </template>
          </q-input>
        </div>
      </div>
      <div class="col gt-sm">

        <q-img
          src="/statics/home.png"
          style="max-height:600px;max-width:600px;margin-left:auto; margin-right:auto; display:block"
        ></q-img>

      </div>
    </div>
    <div class="row">

      <div class="text-h5 text-bold q-px-md q-pt-sm">Latest Lesson</div>

    </div>
    <div class="row">

      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="text-h5 text-bold q-pl-md q-pr-md">Featured Lessons</div>
    </div>
    <div class="row">
      <div class="col-12 col-md">
        <div class="q-pa-md">
          <q-card class="my-card">
            <div class="row">

              <div class="col-12 col-md q-pa-sm">

                <q-img src="statics/featured_courses/getting_started_quasar.png"></q-img>

              </div>
              <div class="col-12 col-md">

                <div class="text-h4 text-bold q-pl-md q-pt-md">Getting Started with Quasar and AWS-Amplify Frameworks</div>
                <div class="text-bold text-h6 q-pa-md">In this will course you will learn about how to setup development environment for creating multiplatform applications</div>
              </div>

            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
