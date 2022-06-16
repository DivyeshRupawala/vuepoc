import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from 'vuex'
import $bus from './event'

const store = createStore({
    state () {
      return {
        count: 20,       
        selectRow: {"id": 100, "FIRST_NAME": "Steven","LAST_NAME": "King", "EMAIL": "SKING", "PHONE_NUMBER": "515.123.4567", "HIRE_DATE": "1987-06-17", "SALARY": 24000, "DEPARTMENT_ID": 90, "Image": "https://www.oracle.com/webfolder/technetwork/jet/Images/dvt/10.png"},
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setSelectedRow (state, pSelectRow) {
        state.selectRow = pSelectRow;
      }
    }
  })

const app = createApp(App);
//createApp(App).mount("#app");
app.use(store).mount("#app");
// store.commit('increment')
app.config.globalProperties.$bus = $bus;