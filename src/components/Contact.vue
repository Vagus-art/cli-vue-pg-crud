<template>
  <div class="d-flex">
      <!-- CONTACT INFO -->
            <div>
              <div class="text-dark h5">{{ contactInfo.name }}</div>
              <div class="text-muted">{{ contactInfo.phone }}</div>
            </div>

            <!-- CONTACT BUTTONS (UPDATE AND DELETE) -->
            <div class="mb-auto mt-auto ml-auto d-flex flex-row">
              <button
                v-on:click="toggleFormUpdate(contactInfo.name,contactInfo.phone,contactInfo.id)"
                class="btn btn-light border"
              >
                <i class="far fa-edit"></i>
              </button>
              <button
                v-on:click="toggleDelete(contactInfo.name,contactInfo.id)"
                class="btn btn-light border ml-1"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: 'Contact',
    props:{
        contactInfo:Object
    }
});
</script>

<style>

</style>