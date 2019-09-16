<template>
	<div id="single-blog">
		<span>
		<ul>
			<li v-for="date in blog.data">
				#{{date}}
			</li>
		</ul>
		</span>
		<h1>{{blog.title}}</h1>
		<article>{{blog.content}}</article>
		
		<router-link v-bind:to="'/edit/'+id">编辑</router-link>
	</div>
</template>

<script>
	import bus from './bus.js'
	export default{
		name:'single-blog',
		data(){
			return{
				id:this.$route.params.id,
				blog:{}

			}
		},
		created(){
			
			this.$axios.get('blog').then((res)=>{
				//console.log(res.data.data[this.id]);
			this.blog=res.data.data[this.id];
			 })
			
		},
		methods:{
			deleteSingleBlog(){
				let id=this.id;
				this.$axios.post('blog',{
					params:{
						id:id
					}
				}).then(respons=>{
					alert(id+'删除成功')
					this.$router.push({path:'/'});
				}).catch((error)=>{
					console.log(error);
				})
			}
		}

	}
</script>

<style scoped>
	#single-blog{
		position: relative;
		max-width: 960px;
		margin:0 auto;
		padding: 20px;
		font-size: 16px;
		box-shadow: rgb(218, 218, 218) 5px 5px 25px;
	}
	h1{
		text-align: center;
	}
	article{
		line-height: 29px;
		min-height: 700px;
		padding: 12px;

	}
   button{
   	padding: 12px;
   	border:none;
   	outline: none;
   	border-radius: 5px;
   	background: red;
   	font-family: 
   }
   p,ul,li,span{
   	margin: 0;
   	padding: 0;
   }
   li{
   	position: absolute;
top: 0px;
right: 0px;
color: rgb(153, 153, 153);
padding: 3px 10px;
background: rgb(241, 241, 241) none repeat scroll 0% 0%;
font-size: 14px;
list-style-type: none;

   }
   a{
   	float: right;
   	text-decoration: none;
   	padding: 12px;
   	background: rgb(24, 188, 156);
   	color: black;
   	border-radius: 5px;
   }
</style>