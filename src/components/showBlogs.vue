<template>
	<div id="show-blogs">
	<div class="triangle"><span></span></div>
		<div id="showblogs">
			<div class="single-blog" v-for="blog in this.blogs">
				<router-link v-bind:to="blog.id">
				<h1>{{blog.title}}</h1>
				 </router-link>
				<span>{{blog.date}}</span>
				<span class="delete" @click="deleteSingleBlog">DELETE</span><div class="span_triangle"></div>
				<article>
					{{blog.content}}
			    </article>
			   
			
			</div>

	    </div>
   
     		<div id="page">
			<button @click="reducePage">上一页</button>
			<p>{{currentPage}}/{{pageCount}}</p>
			<button @click="addPage">下一页</button>
        </div>
	
	</div>
</template>

<script>
import marked from 'marked'
import bus from './bus.js'
export default {
  name: 'showBlogs',
  data(){
  	return {
  		blogs:[],
  		middleBlogs:[],
		search:"",
		total:null,
		currentPage:1,
		pageSize:4,
		pageCount:null,
		id:''
		
		

  	}
  	
  },
  watch:{
			currentPage:function(){
				this.showBlog();
			}

		},
	methods:{
		showBlog(){
			this.total=this.middleBlogs.length;
			this.pageCount=Math.ceil(this.total/this.pageSize);
			this.blogs=this.middleBlogs.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
			//console.log(this.blogs);

		},
		addPage(){
			if(this.currentPage>=this.pageCount){
				this.currentPage==this.pageCount;
			}

			return this.currentPage++;
		},
		reducePage(){
			if(this.currentPage<=1){
				this.currentPage==1;
			}
			return this.currentPage--;
		},
		deleteSingleBlog(){
				let id=this.id;
				this.$axios.post('blog',{
					params:{
						id:id
					}
				}).then(res=>{
					alert(id+'删除成功');
					for(let key in res.data.data){
					console.log('删除的'+res.data.data);		
					res.data.data[key].id=key;
					this.middleBlogs.push(res.data.data[key]);
				 }
				 this.showBlog();
				}).catch((error)=>{
					console.log(error);
				})
			}
	

	},
  created(){
  	this.$axios.get('blog').then(res=>{ 
  		    	console.log(res.data.data);	
  		  for(let key in res.data.data){
  		 	//console.log(res.data.data[key]);			
				res.data.data[key].id=key; //创造了一个新属性id然后将key赋值给id 必须要这一步来生成id做路由跳转参数
				this.middleBlogs.push(res.data.data[key]);

				 }
  			//this.middleBlogs=res.data;
  			this.showBlog();
  		});
  
  }
};
</script>


<style scoped>
#show-blogs{
		width: 100%;
		margin: 0 auto;
	}
	.single-blog{
	position: relative;
	text-align: center;
    box-shadow: rgb(218, 218, 218) 5px 5px 25px;
    padding-top:10%;
	height: 500px;
	width: 80%;
	left:10%;
	/*top:10px;*/
	margin-top:30px;
	}
	div,span{
	margin: 0;
   	padding: 0;
	}
	span{
   	position: absolute;
	top: 0px;
	right: 0px;
	color: rgb(153, 153, 153);
	padding: 3px 10px;
	background: rgb(241, 241, 241);
	font-size: 14px;
   }
   .delete {
   	top:50px;
   	background:red;
   	color: white;
   }
	.triangle{
		border-width:30px 30px 0;
		border-style: solid;
		border-color:rgba(255,255,0,0.4)  transparent transparent;
		position: absolute;
		left:50%;
		top:12%;
		z-index:3;
	}
	.span_triangle{
	position: absolute;
	width: 0;
    height: 0;
    top:50px;
    right:-30px;
    border-top: 15px solid transparent;
    border-left: 30px solid red;
    border-bottom: 15px solid transparent;
	}
	#show-blogs a{
		color:#444;
		text-decoration: none;
	}
	input[type="text"]{
     padding:8px;
     width: 100%;
     box-sizing: border-box;
	}
	#page{
		display: flex;
		box-sizing:border-box;
		justify-content: space-between;
		align-items: center;
		font-size: 28px;
	}
	#page button{
	  outline: 0;
      padding: 15px 30px;
      border: none;
      border: 1px solid rgb(24, 188, 156);
      border-radius: 5px;
      background: rgb(255, 255, 255);
	}

</style>
