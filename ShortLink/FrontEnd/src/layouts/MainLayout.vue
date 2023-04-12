<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark">
        <div class="row full-width justify-between">
          <div class="col-xs-6 col-sm-6 col-md-5 row items-baseline">
            <div class="col-xs-2 col-sm-1 col-md-1">
              <img src="../assets/imgLogo.png" style="max-width: 70%" />
            </div>
            <div
              class="col-xs-6 col-sm-6 col-md-11 text-h4"
              style="font-family: Times New Roman, Times, serif"
            >
              ShortLink
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-3">
            <q-tabs align="left" class="hidden-on-mobile">
              <q-route-tab to="/" class="text-weight-thin">Home</q-route-tab>
              <q-route-tab to="/classificacao" class="text-weight-thin"
                >Top 100</q-route-tab
              >
              <q-route-tab
                to="/entre-ou-cadastre"
                v-if="enable"
                class="text-weight-thin"
                >Sing-in</q-route-tab
              >
              <q-route-tab
                v-if="disable"
                class="text-weight-thin"
                @click="logout"
                >Sair</q-route-tab
              >
            </q-tabs>
          </div>
        </div>
        <q-btn flat round dense icon="menu" class="hidden-on-desktop">
          <q-menu
            class="bg-dark text-white"
            transition-show="rotate"
            transition-hide="rotate"
          >
            <q-list dense style="min-width: 100px">
              <q-item to="/" clickable v-close-popup>
                <q-item-section to="/">Home</q-item-section>
              </q-item>
              <q-item to="/classificacao" clickable v-close-popup>
                <q-item-section>Top 100</q-item-section>
              </q-item>
              <q-separator />

              <q-item
                to="/entre-ou-cadastre"
                v-if="enable"
                clickable
                v-close-popup
              >
                <q-item-section>Sing-in</q-item-section>
              </q-item>
              <q-item v-if="disable" clickable v-close-popup @click="logout">
                <q-item-section>Sair</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const $store = useStore();
    const router = useRouter();

    let token = ref("");
    let disable = ref(false);
    let enable = ref(true);
    token.value = computed({
      get: () => $store.state.user.token,
    });
    if (token.value.value) {
      disable.value = true;
      enable.value = false;
    }

    function logout() {
      $store.commit("user/logoutMutation");
      router.push("/entre-ou-cadastre");
    }
    return {
      token,
      disable,
      enable,
      logout,
    };
  },
};
</script>
<style>
@media (max-width: 500px) {
  .hidden-on-mobile {
    display: none;
  }
}
@media (min-width: 501px) {
  .hidden-on-desktop {
    display: none;
  }
}
</style>
