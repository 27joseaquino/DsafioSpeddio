<template>
  <q-page class="row bg-dark">
    <div
      class="inform row justify-center items-center justify-evenly col-md-12"
    >
      <div class="flex">
        <q-img class="logo" src="../assets/imgLogo.png" />

        <div class="q-mr-lg col-xs-10 col-sm-8 col-md-3 col-lg-2 col-xl-1">
          <span class="nameproject text-h2 text-weight-bold text-white"
            >ShortLink</span
          >
        </div>
      </div>
      <div class="col-xs-11 col-sm-8 col-md-3 col-lg-2 col-xl-1">
        <CardLogin />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CardLogin from "src/components/LoginPage/CardLogin..vue";
export default defineComponent({
  components: { CardLogin },
});
</script>
