<template>
  <div id="app">
    <div class="container">
     <Chat></Chat>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css';

import Chat from './components/Chat'

export default {
  name: 'App',
  components: {
    Chat
  },
  
}
</script>

<style>
#app {
  
  margin-top: 5em;
}
</style>
