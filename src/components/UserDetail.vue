<template>
  <div class="red Lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <v-list dense>
      <v-list-item>
        <v-list-item-content>이름:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{ name }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>주소:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{ address }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>나이:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{ age }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>전화번호:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{ phone }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>반려견 유무:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{ hasDogKr }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>스킬트리:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{ skill }}
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>수정일자:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{ getDateAndTime(editedDate) }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { eventBus} from '@/main.js'
import { dateFormat } from '../mixins/dateFormat.js'
export default {
  data() {
    return {
      editedDate : null
    }
  },
  props: [ 'name', 'address', 'age', 'phone', 'hasDog', 'skill' ],
  computed: {
    hasDogKr() {
      return this.hasDog === true ? "있음" : "없음"
    }
  },
  created() {
    eventBus.$on('userWasEdited', (date) => {
      this.editedDate = date
      console.log("event on: " + date)
    })
  },
  mixins: [dateFormat]
}
</script>

<style>
  
</style>