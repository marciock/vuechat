<template>
    <div>
        <button class="btn btn-outline-info" id="play" type="button" v-on:click="newSound()" >
            <span v-bind:class="microphone"></span>
        </button>
        
        
        
                   
        
    </div>
</template>
<script>

export default {
    name:'Audio',
    data:()=>{
        return {
            sound:false,
            microphone:'fa fa-microphone',
            chunk:[]
        }
    },
    
    methods:{
        
        newSound(){
           

                 //media.start();

                if(this.sound===false){
                this.sound=true;
                this.microphone='fa fa-stop'
                
                }else{
                this.sound=false;
                this.microphone='fa fa-microphone'
                
            }
            
                       
            

        },
        
             

    },
    computed:{
        
       
    }
}
</script>