<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section avatar> {{ position + 1 }} </q-item-section>
      <q-item-section>
        <q-item-label lines="1">{{ url.link }}</q-item-label>
        <q-item-label caption lines="2" class="text-grey-5">
          <span class="text-weight-bold">Acessos: {{ url.count }} </span>
        </q-item-label>
      </q-item-section>
      <q-separator class="bg-amber" />
    </q-item>

    <q-separator color="primary" />
  </div>
</template>
<script>
export default {
  props: ["position", "url"],
  setup(props) {
    console.log(props.url);
  },
};
</script>
