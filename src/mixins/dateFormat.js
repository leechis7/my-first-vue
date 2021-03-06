export const dateFormat = {
    data() {
        return {
            mixinData: "내가 커피의 믹스인이다...!"
        }
    },

    methods: {
      getDateAndTime(date) {
        if(date !== null){
            let hour = date.getHours()
            var minutes = date.getMinutes()
            if(String(minutes).length == 1) {
            minutes = String(minutes).padStart(1, '0');
            }
            let fullDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
            return `${fullDate} ${hour}:${minutes}`
        } else {
            return null
        }
      }
    }
}