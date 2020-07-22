<template>
<div>
    <div v-if="sound===false">
        <button class="btn btn-outline-info" id="play" type="button"  v-on:click="newSound(true)" >
            <span class="fa fa-microphone"></span>
        </button>
  
    </div>
    <div v-if="sound===true">
        <button class="btn btn-outline-info" id="stop" type="button"  v-on:click="stopSound(false)" >
                    <span class="fa fa-stop"></span>
        </button>
    </div>

</div>
</template>
<script>

let mr;

export default {
    name:'Audio',
    data:()=>{
        return {
            sound:false,
            chunks:[],
        }
    },
    
    methods:{
        newSound(value){
            
            this.sound=value;

            navigator.mediaDevices.getUserMedia({audio:true}).then(stream=>{

                 mr=new MediaRecorder(stream);
                 
                console.log(mr);
                if(this.sound===true){
                    this.chunks=[];
                    mr.ondataavailable=data=>{
                        
                        //console.log(data.data);
                        this.chunks.push(data.data);
                    }
                    mr.start();
                }
         
                
            })
        },
        stopSound(){
            this.sound=false;
            mr.stop(); 
            mr.onstop=()=>{
                console.log('stop');
               const blob=new Blob(this.chunks,{type:'audio/ogg;code=opus'});
               this.chunks=[];
               const reader=new window.FileReader();
               reader.readAsDataURL(blob);
               reader.onloadend=()=>{
                   console.log(reader.result);

                   this.$emit('audio-maked',{sound:reader.result})
               }
            }

            
        }
      

        },
        
             

    
}
</script>
