<template>
  <q-page class="column">
    <div class="col-1 text-h4 text-bold text-center q-mt-lg">Ranking</div>
    <div class="col-11 row justify-center">
      <q-card class="q-mt-lg col-11">
        <PositionsRanking
          v-for="(url, index) in data.urls"
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
import { onMounted, reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: { PositionsRanking },

  setup() {
    const $store = useStore();
    let data = reactive({
      urls: [],
    });

    function getRanking() {
      $store.dispatch("url/RankingAction");
      data.urls = computed({
        get: () => $store.state.url.urls,
      });
    }

    onMounted(() => {
      $store.dispatch("url/RankingAction");
      data.urls = computed({
        get: () => $store.state.url.urls,
      });
      setInterval(getRanking, 10000);
    });

    return { data, getRanking };
  },
};
</script>
