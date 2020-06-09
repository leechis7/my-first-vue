<template>
  <div class="green Lighten-3 pa-3">
    <h3>회원정보를 수정할 수 있습니다.</h3>
    <p> 수정사항 {{user.name}} </p> 
    <v-text-field v-model="user.name"     label="이름" ></v-text-field>
        <v-text-field v-model="user.address"  label="주소" ></v-text-field>
        <v-text-field v-model="user.age"      label="나이" ></v-text-field>
        <v-text-field v-model="user.phone"    label="전화번호" ></v-text-field>
        <v-radio-group v-model="user.hasDog">
          <v-radio
            label="반려견 있음"
            :value="true"
          ></v-radio>
          <v-radio
            label="반려견 없음"
            :value="false"
          ></v-radio>
        </v-radio-group>
        <v-text-field v-model="user.skill"    label="스킬트리" ></v-text-field>
        <v-btn @click="changeUser">수정 완료</v-btn>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  props: ["name","address","age","phone","hasDog","skill"],
  data: function () {
    return {
      user: {}
    }
  },
  created: function () {
    this.user.name = this.name;
    this.user.address = this.address;
    this.user.age = this.age;
    this.user.phone = this.phone;
    this.user.hasDog = this.hasDog;
    this.user.skill = this.skill;
  },
  methods: {
    changeUser() {
      console.log(this.user);
      this.$emit('child', this.user);
      //eventBus.$emit('userWasEdited', new Date())
      eventBus.userWasEdited(new Date())
    }
  }
}
</script>

<style>
  
</style>
