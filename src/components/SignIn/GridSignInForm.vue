<template>
  <div class="my-n4">
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6">
          <text-field-sign-in-form/>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
import TextFieldSignInForm from "./TextFieldSignInForm.vue";
export default {
 components:{
     TextFieldSignInForm
 }
}
</script>

<style>

</style>