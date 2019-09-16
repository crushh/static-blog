import Mock from 'mockjs'


const Random=Mock.Random;

var arr=[];
for(let i=0;i<10;i++){
	let template={
		'content':Random.paragraph(3,10),
		'title':Random.string(2,10),
		'date':Random.date(),
		'nav_id':i
	} 
	arr.push(template);
}

let blog=function(opstions){
let rtype=opstions.type.toLowerCase();
switch(rtype){
  case 'get':
  break;
  case 'post':
  let id=parseInt(JSON.parse(opstions.body).params.id);
    arr=arr.filter(val=>{
       return val.id!=id;
		});
  break;
  default:		
}	
return {
	data:arr
	}
}


	
// Mock.mock('blog',/get|delete/i,blog);
 Mock.mock('blog',/get|post/i,blog);
 // Mock.mock('blog','post',blog);