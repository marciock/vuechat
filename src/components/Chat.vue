<template>
    <div>
        <div class="form-group">
            <label for="alias">Nome</label>
            <input type="text" id="alias" v-model="alias" class="form-control">
        </div>
        <div class="form-group border space"  >
        <ul>
            <li v-for="(content,index) in contents" :key="index" >
                <strong>Nome: {{content.name}} </strong><span v-html="content.message"></span>
            </li>
        </ul>
        </div>
        <div class="form-group">
            <div class="input-group-append" id="buttons-send">
             <input type="text" id="message"  class="form-control" aria-describedby="buttons-send" v-model="message">
           
               <button class="btn btn-outline-success" type="button" id="send" v-on:click="clickSend(alias,message)">
                   <span class="fa fa-send"></span>
               </button>
               <Audio @audio-maked="showAudio"></Audio>
               
               <button class="btn btn-outline-warning" type="button" id="photo">
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
                alias:'',
                message:'',
                sendData:{name:'',message:''},
                contents:[]
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
            
            this.sendData.message=this.message;
            this.sendData.name=this.alias;
            
            socket.emit('mensagem',this.sendData);
            
            
        },
        showAudio(load){
            this.sendData.name=this.alias;
            this.sendData.message=`<audio src="${load.sound}" controls="true"></audio>`;

            socket.emit('mensagem',this.sendData);
        }
        
        
    },
    created(){
        socket.on('conteudo',d=>{
            this.contents.push({'name':d.name,'message':d.message})
        })
        
    }
    
    
        
    
}
</script>
<style>
.space{
    height: 10em;
}
</style>