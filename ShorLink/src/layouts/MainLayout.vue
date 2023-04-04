<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark">
        <div class="row full-width items-baseline">
          <div
            class="text-h3 col-9"
            style="font-family: 'Times New Roman', Times, serif"
          >
            <img src="../assets/imgLogo.png" style="max-width: 5%" />
            ShortLink
          </div>
          <div class="col-2">
            <q-tabs align="left">
              <q-route-tab to="/entre-ou-cadastre" class="text-weight-thin"
                >Sing-in</q-route-tab
              >
            </q-tabs>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script></script>
