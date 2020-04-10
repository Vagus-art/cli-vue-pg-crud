<template>
  <div class="home">
    <ConList :ContactsList=ContactsList />
  </div>
</template>

<script>
// @ is an alias to /src
import ConList from "@/components/ConList.vue";

export default {
  name: "Home",
  data: function() {
    return {
      ContactsList: [
        {
          name: "hello",
          phone: "world"
        },
        {
          name: "agus",
          phone: "favo"
        }
      ]
    };
  },
  components: {
    ConList
  },
  mounted:function(){
    //this is a placeholder
    fetch("https://pg-clean-api.herokuapp.com/api/contacts/").then(res=>res.json().then(res=>this.ContactsList=res))
  }
};
</script>
