<template>
  <q-page class="column">
    <div class="col text-h4 text-bold text-center q-mt-md">Ranking</div>
    <div class="col row justify-center">
      <q-card class="col-11">
        <PositionsRanking
          v-for="(url, index) in state.urls"
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
import { ref, onMounted, reactive } from "vue";
import axios from "axios";

export default {
  components: { PositionsRanking },

  setup() {
    const state = reactive({
      urls: [],
    });

    const getRanking = async () => {
      try {
        const response = await axios.get("http://localhost:3000/url");
        state.urls = response.data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getRanking();
      setInterval(getRanking, 10000);
    });

    return { state };
  },
};
</script>
PositionsRanking Positions
