<template>
    <div>
        <div class="form-group">
            <label for="alias">Nome</label>
            <input type="text" id="alias" name="alias" class="form-control">
        </div>
        <div class="form-group border " id="content"  >
            <div v-for="c in content" v-bind:key="c">
                <strong>{{c.name}} :</strong><span>{{c.message}}</span>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group-append" id="buttons-send">
             <input type="text" id="message"  class="form-control" aria-describedby="buttons-send">
           
               <button class="btn btn-outline-success" type="button" id="send" v-on:click="clickSend()">
                   <span class="fa fa-send"></span>
               </button>
               <Audio></Audio>
               
               <button class="btn btn-outline-warning" type="button" id="send">
                   <span class="fa fa-photo"></span>
               </button>
            </div>
        </div>

    </div>
</template>
<script>
import io from 'socket.io-client'
import Audio from './Audio'

const socket=io('http://localhost:3000')

export default {
    name:'Chat',
    
        data:()=>{
            return{
                sendData:{name:'',message:''},
                content:{name:'',message:''}
            }
        },
    components:{
        Audio
    },
    
    sockets:{
        connect:()=>{
            console.log('Conectado');
        },
        customEmit:(val)=>{
            console.log(val);
        },
        
    },
    methods:{
        clickSend(){
            
            this.sendData.message=document.getElementById('message').value;
            this.sendData.name=document.getElementById('alias').value;
            
            socket.emit('mensagem',this.sendData);
            
            
        },
        
        
    },
    created(){
        socket.on('conteudo',d=>{
            this.content.name=d.name;
            this.content.message=d.message;
        })
        
    }
    
    
        
    
}
</script>
<style>
#content{
    height: 10em;
    width: auto;
}
</style>