<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <form @submit.prevent="postClient">
        <v-row>
          <v-col>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="user.email"
                  :error-messages="errors"
                  label="E-mail"
                  prepend-inner-icon="mdi-email"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="password"
                rules="required|verify_password"
              >
                <v-text-field
                  prepend-inner-icon="mdi-lock-outline"
                  :error-messages="errors"
                  autocomplete="current-password"
                  v-model="user.password"
                  label="Mot de passe"
                  :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="() => (value = !value)"
                  :type="value ? 'password' : 'text'"
                  @input="(_) => (user.password = _)"
                ></v-text-field>
                <v-row class="my-5">
                  <v-col class="ma-0" cols="6" md="6" sm="6">
                    <v-btn text class="text-lowercase px-0" color="info">
                      mot de passe oublié ?
                    </v-btn>
                  </v-col>
                  <v-col class="text-right ma-0" cols="6" md="6" sm="6">
                    <v-btn
                      text
                      class="text-lowercase px-0"
                      color="primary"
                      @click="showDialogRegister"
                    >
                      Inscrivez-vous !
                    </v-btn>
                    <div>c'est gratuit.</div>
                  </v-col>
                </v-row>
              </validation-provider>
              <v-row>
                <v-col class="text-right ma-0">
                  <v-btn type="Login" :disabled="invalid" color="info">
                    Se connecter
                  </v-btn>
                </v-col>
              </v-row>
            </validation-observer>
          </v-col>
        </v-row>
      </form>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  props: ["id", "nom", "date_naiss", "email", "tel"],
  data() {
    return {
      clients: {
        id: null,
        nom: "",
        date: null,
        email: null,
        tel: "",
      },
    };
  },
  methods: {
    postClient() {
      axios
        .post("http://localhost:3000/api/clients", this.clients)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
