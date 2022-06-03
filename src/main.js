import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

//const app = createApp(App);
createApp(App).mount("#app");
// app.use(store)
// store.commit('increment')

console.log(store.state.count) // -> 1
