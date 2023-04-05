<template>
  <q-page class="bg-background">
    <div class="row full-width q-mb-xl q-mt-xl">
      <div
        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row q-pa-md justify-center"
      >
        <q-card class="col-xs-12 col-sm-12 col-md-10">
          <div
            class="text-center text-h4 q-mb-md"
            style="font-family: Merriweather"
          >
            <!-- style="font-family: Merriweather" -->
            Copie e cole a URL para ser encurtada
          </div>

          <q-input
            icon="link"
            v-model="url"
            standout="bg-dark"
            bg-color="dark"
            label-color="white"
            class="text-h6 text-bold q-ml-sm"
            label="URL"
          >
            <template v-slot:prepend> <q-icon name="link" /> </template>

            <template v-slot:after>
              <q-btn
                color="purple"
                label="SHORT"
                size="lg"
                class="q-mr-sm"
              /> </template
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
        <div class="row justify-evenly q-mt-xl">
          <div
            class="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 q-ml-sm q-mb-md row justify-center"
          >
            <CardImg :link="img1" :text="text1" />
          </div>
          <div
            class="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 q-ml-sm q-mb-md row justify-center"
          >
            <CardImg :link="img2" :text="text2" />
          </div>
          <div
            class="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 row justify-center"
          >
            <CardImg :link="img3" :text="text3" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardImg from "src/components/LoginPage/CardImg.vue";
import { ref } from "vue";

export default {
  name: "IndexPage",
  setup() {
    let img1 = ref(
      "https://i.pinimg.com/564x/01/c5/3a/01c53a8a5fca75f0ce72eb97d465be81.jpg"
    );
    let img2 = ref(
      "https://i.pinimg.com/564x/bd/86/d4/bd86d48b277d3512d4cf04bc2845931a.jpg"
    );
    let img3 = ref(
      "https://i.pinimg.com/564x/01/fe/24/01fe249df16055acc26aa27c8795e00e.jpg"
    );
    let text1 = ref("URL's extremamente Curtas");
    let text2 = ref("Faça quantas URL's quiser gratuitamente");
    let text3 = ref(" Reponsivo para qualquer tipo de dispositivo");
    let url = ref("");
    let shortUrl = ref("");
    return {
      url,
      shortUrl,
      img1,
      img2,
      img3,
      text1,
      text2,
      text3,
    };
  },
  components: { CardImg },
};
</script>
<style scoped>
@font-face {
  font-family: Merriweather;
  src: url(../assets/fonts/Merriweather/Merriweather-BlackItalic.ttf);
}
</style>
