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
            v-model="user.emailInput"
            label="Email"
            class="q-pb-md"
          />
          <q-input
            color="teal"
            outlined
            v-model="user.passwordInput"
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
          <q-btn
            rounded
            color="primary"
            @click="login"
            class="col-10"
            label="Entrar"
            @keyup="login"
          />
        </q-card-section>
      </q-tab-panel>

      <q-tab-panel name="cadastro">
        <q-card-section>
          <q-input
            color="teal"
            outlined
            v-model="user.nameInput"
            label="Nome"
            class="q-pb-sm"
          />
          <q-input
            color="teal"
            outlined
            v-model="user.emailInput"
            label="Email"
            class="q-pb-sm"
          />
          <q-input
            color="teal"
            outlined
            v-model="user.passwordInput"
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
            v-model="user.confirmPasswdInput"
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
          <q-btn
            rounded
            color="primary"
            class="col-10"
            label="Cadastrar"
            @click="register"
            @keyup="register"
          />
        </q-card-section>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive } from "vue";

export default {
  setup() {
    const $store = useStore();
    const router = useRouter();
    let isPwd = ref(true);

    let user = reactive({
      nameInput: "",
      emailInput: "",
      passwordInput: "",
      confirmPasswdInput: "",
    });

    let tab = ref("login");

    function login() {
      $store.dispatch("user/loginAction", user);
      const token = computed({
        get: () => $store.state.user.token,
      });
      if (token.value) {
        router.push("/");
      }
    }
    function register() {
      $store.dispatch("user/registerAction", user);
    }
    return {
      user,
      isPwd,
      tab,
      login,
      register,
    };
  },
};
</script>
