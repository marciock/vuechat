import Vue from 'vue'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

//Vue.config.productionTip = false
//const option={path:''}

//export const SocketIO=io('http://localhost:3000');
 Vue.use(new VueSocketIO({
     debug:true,
     connection:io()
 }))