<template>
	<div class="space">
		<div class="button_bar">
			<span @click="add_Bold">B</span>
			<span @click="add_Italic" >I</span>
			<span @click="add_Underline">U</span>
			<span @click="add_article">⇧</span>
		</div>

		<div class="content_space">

		<div class="input_space">
			<textarea ref="ref_md_edit" v-model="markString"></textarea>
		</div>

		<div class="perview_space">
			<p v-html="htmlString"></p>
		</div>

       </div>
		
	</div>
 
</template>

<script>
import marked from 'marked'
import bus from './bus.js'
export default {
  name: 'addBlog',
  data(){
  	return {
  		markString:'',
  		htmlString:'',
  		newblogs:'',
  		id:0
  	}
  },
  watch:{
  	markString:function(value){
  		marked.setOptions({
  			renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: true,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
  		})
  		this.htmlString=marked(value);
  	}
  },
  methods:{
  	add_Underline(){
  		  this.changeSelectedText("<u>","</u>");
         

  	},
  	add_Italic(){
      this.changeSelectedText("***","***")
  	},
  	add_Bold(){
    this.changeSelectedText("**","**")
  	},

      changeSelectedText(startString,endString){
        let t = this.$refs.ref_md_edit
        if (window.getSelection) {
          if (t.selectionStart != undefined && t.selectionEnd != undefined) {

            let str1 = t.value.substring(0, t.selectionStart)
            let str2 = t.value.substring(t.selectionStart, t.selectionEnd)
            let str3 = t.value.substring(t.selectionEnd)

            let result = str1 + startString + str2 + endString + str3
            t.value = result
            this.markString = t.value
          }
        }
      },
  	add_article(){
  		this.newblogs=this.htmlString;
  		this.id++;
  		window.localStorage.setItem('article'+this.id,this.newblogs);
        // bus.$emit('loardtext',params);
  	}

  },created(){

  
  }
}
</script>


<style scoped>
  .space{
    width:100%;
    height: 700px;
  }
.button_bar{
  width: 100%;
  height: 40px;
  margin-top: 20px;
  line-height: 40px;
  background-color:rgba(34,232,32,0.5);
}
.button_bar span{
  padding: 0 20px 0 20px;
  font-size: 16px;
  font-weight: bold;

}
.content_space{
  width: 100%;
  display: flex;
  height:100%;
  justify-content: space-around;
}
.input_space{
  width: 50%;
  height: 100%;
  background-color: rgba(187,255,255,0.5);
}
.input_space>textarea{
  width: 100%;
  height: 100%;
  border:none;
}
.perview_space{
 width: 50%;
  height: 100%;
  background-color: rgba(174,238,238,0.5);
}
</style>
