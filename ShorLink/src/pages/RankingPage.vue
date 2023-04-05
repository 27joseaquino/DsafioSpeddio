<template>
  <q-page class="column">
    <div class="col text-h4 text-bold text-center q-mt-md">Ranking</div>
    <div class="col row justify-center">
      <q-card class="col-11">
        <PositionsRanking
          v-for="(url, index) in Urls"
          :key="index"
          :position="index"
          :url="url"
        />
      </q-card>
    </div>
  </q-page>
</template>
<script>
import PositionsRanking from "../components/RankinPage/PositionsRanking.vue";
import { ref } from "vue";
export default {
  components: { PositionsRanking },

  setup() {
    let Urls = ref([
      { urlName: "google.com", acess: 20 },
      { urlName: "facebook.com", acess: 15 },
      { urlName: "insta.com", acess: 14 },
      { urlName: "whats.com", acess: 20 },
      { urlName: "youtube.com", acess: 20 },
      { urlName: "calw.com", acess: 20 },
      { urlName: "canal2.com", acess: 20 },
      { urlName: "canal5.com", acess: 20 },
      { urlName: "cal89.com", acess: 20 },
    ]);

    return { Urls };
  },
};
</script>
PositionsRanking Positions
