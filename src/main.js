import Vue from 'vue'
import App from './App.vue'
//import socket from './socket'
import socket from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

//Vue.config.productionTip = false
//const option={path:''}


 Vue.use(new VueSocketIO({
     debug:true,
     connection:socket('http://localhost:3000')
 }))

new Vue({
  
  render: h => h(App),
}).$mount('#app')
