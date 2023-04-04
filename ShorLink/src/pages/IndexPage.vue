<template>
  <q-page class="bg-background">
    <div class="row full-width q-mb-xl q-mt-xl">
      <div class="col-12 row q-pa-md justify-center">
        <q-card class="col-10">
          <div
            class="text-center text-h4 q-mb-md"
            style="font-family: Merriweather"
          >
            Copie e cole a URL para ser encurtada
          </div>

          <q-input
            v-model="text"
            standout="bg-dark"
            bg-color="dark"
            label-color="white"
            class="text-h6 text-bold"
            label="URL"
          >
            <template v-slot:after>
              <q-btn color="purple" label="SHORT" size="lg" /> </template
          ></q-input>
          <div>
            {{ shortUrl }}
          </div>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="text-h5 text-bold q-mb-sm flex flex-center">
          Encurte e Compartilhe
        </div>
        <div class="text-body1 flex flex-center">
          Suas URLs encurtadas podem ser usadas em publicações, blogs, fóruns,
          emails, mensagens instantâneas e outros locais.
        </div>
        <div class="row justify-evenly">
          <div class="col-1">
            <img class="full-width" src="../assets/img/link.png" />
          </div>
          <div class="col-1">
            <img class="full-width" src="../assets/img/gratis.png" />
          </div>
          <div class="col-1">
            <img class="full-width" src="../assets/img/responsivo.png" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "IndexPage",
  setup() {
    let text = ref("");
    let shortUrl = ref("");
    return {
      text,
      shortUrl,
    };
  },
};
</script>
<style scoped>
@font-face {
  font-family: Merriweather;
  src: url(../assets/fonts/Merriweather/Merriweather-BlackItalic.ttf);
}
</style>
