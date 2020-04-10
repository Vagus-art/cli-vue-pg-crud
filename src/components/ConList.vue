<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Contacts</h3>
      <Searchbar />
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-left" v-for="(Contact,x) in ContactsList" v-bind="x">
          <Contact :contactInfo="Contact" />
        </li>
      </ul>
    </div>
    <div class="card-footer"></div>
  </div>
</template>

<script>
import Vue from "vue";
import Searchbar from "./Searchbar";
import Contact from "./Contact";

export default Vue.extend({
  props: {
    ContactsList: Array
  },
  name: "ConList",
  components: { Searchbar, Contact }
});
</script>

<style>
</style>