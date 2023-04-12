<template>
  <q-page class="row bg-dark">
    <div
      class="inform row justify-center items-center justify-evenly col-md-12"
    >
      <div class="flex col-xs-8 col-sm-5 col-md-3 col-lg-2 col-xl-1">
        <q-img
          class="logo full-width"
          src="../assets/imgLogo.png"
          style="max-width: 80%"
        />

        <div class="q-mr-lg col-xs-12 col-sm-10 col-md-3 col-lg-2 col-xl-1">
          <span class="nameproject text-h2 text-weight-bold text-white"
            >ShortLink</span
          >
        </div>
      </div>
      <div class="col-xs-11 col-sm-11 col-md-3 col-lg-2 col-xl-1">
        <CardLogin />
      </div>
    </div>
  </q-page>
</template>

<script>
import CardLogin from "src/components/LoginPage/CardLogin.vue";

export default {
  components: { CardLogin },
};
</script>
