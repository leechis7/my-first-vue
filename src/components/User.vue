<template>
  <div class="blue lighten-3 pa-3">
    <h1>User Component</h1>
    <p>Name: {{ name }} </p>
    <v-btn @click="changeName()">이름 변경</v-btn>
    <hr>
    <v-layout row wrap>
        <v-flex xs12 sm6>
            <UserDetail :nameofChild="name"></UserDetail>
        </v-flex>
        <v-flex xs12 sm6>
            <UserEdit></UserEdit>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  components: {
      UserDetail,
      UserEdit
  },

  data () {
    return {
        name: 'Vue JS'
    }
  },

  methods: {
      changeName () {
          this.name = "Heming"
      }
  }
}
</script>

<style>
  
</style>