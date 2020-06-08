<template>
  <div class="red Lighten-3 pa-3">
    <h3>자세한 회원정보를 확인합니다.</h3>
    <p> {{ nameofChild222}} </p>
    <p> {{ aqua }} </p>
    <v-btn @click="elsa()">이름변경</v-btn>
  </div>
</template>

<script>
export default {
    //props: ['nameofChild'],
    props: {
        nameofChild: {
            type: String,
            default: "Mickey"
        }
    },
    data () {
        return {
            nameofChild222: this.nameofChild
        }
    },
    computed: {
        aqua: function () {
            return this.nameofChild222 + ", your're too late"
        } 
    },
    methods: {
        elsa: function () {
            this.nameofChild222 = 'Elsa'
        }
    },
}
</script>

<style>
  
</style>