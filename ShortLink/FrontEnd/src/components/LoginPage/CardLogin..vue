<template>
  <q-card>
    <q-tabs class="tabs" v-model="tab">
      <q-tab label="Login" name="login" class="bg-primary" />

      <q-tab label="Cadastro" name="cadastro" class="bg-primary" />
    </q-tabs>
    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      horizontal
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-tab-panel name="login">
        <q-card-section>
          <q-input
            color="teal"
            outlined
            v-model="email"
            label="Email"
            class="q-pb-md"
          />
          <q-input
            color="teal"
            outlined
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="Senha"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section class="row justify-center q-pa-none q-pb-md">
          <q-btn rounded color="primary" class="col-10" label="Entrar" />
        </q-card-section>
      </q-tab-panel>

      <q-tab-panel name="cadastro">
        <q-card-section>
          <q-input
            color="teal"
            outlined
            v-model="name"
            label="Nome"
            class="q-pb-sm"
          />
          <q-input
            color="teal"
            outlined
            v-model="email"
            label="Email"
            class="q-pb-sm"
          />
          <q-input
            color="teal"
            outlined
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="Senha"
            class="q-pb-sm"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            no-error-icon
            v-model="confirmPasswd"
            outlined
            :type="isPwd ? 'password' : 'text'"
            label="Confirmar Senha"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section class="row justify-center q-pa-none q-pb-md">
          <q-btn rounded color="primary" class="col-10" label="Cadastrar" />
        </q-card-section>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let isPwd = ref(true);
    let confirmPasswd = ref("");
    let password = ref("");
    let email = ref("");
    let name = ref("");
    let tab = ref("login");

    return {
      name,
      password,
      email,
      confirmPasswd,
      isPwd,
      tab,
    };
  },
};
</script>
