<template>
  <q-card class="my-card row justify-center">
    <img class="full-width col-12" :src="link" style="max-width: 50%" />

    <q-card-section>
      <q-separator />
      <div class="text-h6 align-center">{{ text }}</div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: ["link", "text"],
  setup(props) {
    console.log(props.link);
    return {};
  },
};
</script>
<style scoped></style>
