<template>
  <div>
    <h1>{{ title }}</h1>  
    <h2>{{ dragon }}</h2>  
    <button @click="vov">추가</button>
    <home-component></home-component>
    <dragon></dragon>
  </div>
</template>

<script>
import HomeComponent from "./Home.vue";

export default {
  components: {
    HomeComponent //HomeComponent: HomeComponent
  },
  data: function () {
    return {
      title: "Hellow2",
      dragon: 1
    }  
  },
  methods: {
    vov: function () {
      this.dragon++;
      //console.log(this.dragon);
    }
  }
};
</script>
