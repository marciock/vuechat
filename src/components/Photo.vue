<template>
    <div>
         <button class="btn btn-outline-warning" type="button" id="photo" v-on:click="upLoad">
            <span class="fa fa-photo"></span>
        </button>
    </div>
</template>
<script>
export default {
    name:'Photo',
    data:()=>{
        return{
            image:''
        }
    },
    methods:{
        upLoad(){
            let file=document.createElement('input');
            file.type='file';
            file.click();
            file.onchange=()=>{
                
               // let img=window.URL.createObjectURL(file.files[0]);


               // const blob=new Blob(img,{type:'image/jpeg'});
               const reader=new window.FileReader();
               reader.readAsDataURL(file.files[0]);
               reader.onloadend=()=>{
                   console.log(reader.result);

                   //this.$emit('audio-maked',{sound:reader.result})
                   this.$emit('image-maked',{image:reader.result});
               }

                //this.$emit('image-maked',{image:window.URL.createObjectURL(file.files[0])});
            }


        }
    }
}
</script>