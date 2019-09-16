<template>
	<div id="mask">
			<div id="header" :style="{backgroundImage: 'url(' +this.bg + ')'}">	
				<div class="triangle"></div>
	<nav>
		<ul>
			<li>
				<router-link to="/" exact>博客</router-link>
				<router-link to="/add" exact>写博客</router-link>
			</li>
		</ul>
	</nav>
	</div>
	
	</div>
</template>

<script>
export default {
  name: 'head_nav',
  data(){
  	return{
  		bg:require('../assets/kodo_banner.png')
  	}
  }


}
</script>


<style scoped>
#mask{
		position: relative;
		width: 100%;
		top:0; 
		left:0;
		z-index:1;
		height: 524px;
		box-shadow: 10px 10px 5px rgba(128,138,135,0.4);
		background-color: rgba(128,138,135,0.4);
	}
	#header{
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		height: 524px; 
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 5px;
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

		nav{
		width:100%;
		position: sticky;
		top: 0;
		height: 66px;
		z-index: 999;
		box-shadow: rgb(134,134,134,134) 0px 0px 25px;
		color: rgb(153,153,153);
		transition: all 0.3s ease 0s;
		background:rgba(255,255,255,0.3);
		border-radius: 5px;
	}
	ul{
		list-style-type: none;
		margin: 0;
	    
	}
	li{
		
		display: inline-block;
		font-size:16px;
	}
	a{
		display: inline-block;
	    white-space: nowrap;
	    color: rgb(255, 255, 255);
	    padding: 0px 12px;
	    line-height: 66px;
		 /* font-size: 16px;*/
	    text-decoration: none;
	}
	a:hover{
		color: rgb(24, 188, 156);
	}

	.router-link-active{
		color: rgb(24, 188, 156);
	}
</style>
