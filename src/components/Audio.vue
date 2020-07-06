<template>
    <div>
        <button class="btn btn-outline-info" id="play" type="button">
            <span class="fa fa-music"></span>
        </button>
        
        <audio    id="audio" >
                   
        </audio>
    </div>
</template>
<script>
const audio=document.getElementById('audio')
export default {
    name:'Audio',
    
    methods:{
        handleSuccess:(stream)=>{
            //const audio=document.getElementById('audio')
            
            if(window.URL){
                audio.src=window.URL.createObjestURL(stream);
            }else{
                audio.src=stream;
            }
        }
    },
    created(){
        navigator.mediaDevices.getUserMedia({audio:true,video:false}).then(this.handleSuccess)
    }
}
</script>