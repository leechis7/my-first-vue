<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }} </p>
    <p> {{ getDateAndTime(createdAt)}}</p>
    {{ helloToMixin }}
  <hr>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <UserDetail 
      v-bind:name="name" v-bind:address="address"
      v-bind:age="age" v-bind:phone="phone"
      v-bind:hasDog="hasDog" v-bind:skill="skill"
      ></UserDetail>
    </v-flex>
    <v-flex xs12 sm6>
      <UserEdit
      v-bind:name="name" v-bind:address="address"
      v-bind:age="age" v-bind:phone="phone"
      v-bind:hasDog="hasDog" v-bind:skill="skill"
      @child="parents"
      ></UserEdit>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'
import { dateFormat } from '@/mixins/dateFormat.js'

export default {
  components: {
      UserDetail,
      UserEdit
  },

  data () {
    return {
      name: "Heming",
      address: "Tokyo",
      age: 28,
      phone: '080-2313-8282',
      hasDog: false,
      skill: ["html","css","js","vue"],
      createdAt: null
    }
  },

  computed: {
    helloToMixin() {
      return this.mixinData + " .. 반갑소 !"
    }
  },

  created() {
    this.createdAt = new Date()
  },

  methods: {
      changeName () {
          this.name = "Heming"
      },
      parents (user) {
        console.log("parent호출");
        this.name = user.name;
        this.address = user.address;
        this.age = user.age;
        this.phone = user.phone;
        this.hasDog = user.hasDog;
        this.skill = user.skill;
      }
  },

  mixins: [dateFormat]
}
</script>

<style>
  
</style>