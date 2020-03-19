var fuck
var context
var korea
var chaco
var anim
var timer


initial=function(){
	fuck=document.querySelector("#fuck")
	context= fuck.getContext('2d')

	korea= new Image()
	korea.src="korea.jpg"

	chaco= new Image()
	chaco.src= "chaco.png"

	chaco.onload=function(){
		anim= new Anim()
		fuck.onclick= makeCHaracter
		timer= setInterval(doTime,50)

	}
}

makeCHaracter=function(event){
	anim.click(event)
}

doTime=function(){
	anim.draw()
}



Anim= function(){
	this.imgs=[]

	this.click=function(event){
		var x= event.clientX - fuck.offsetLeft  - korea.width/2
		var y = event.clientY - fuck.offsetTop -  korea.height/2
		this.imgs.push(new AnimImage(img, x,y ))



	}

	this.draw= function(){

		context.drawImage(chaco, 0,0,800,800)
		for (var n in this.imgs){
			this.imgs[n].drawImage
		}
	}
}

AnimImage= function(chaco,x ,y ){
	this.korea=korea
	this.x= x
	this.y= y
	this.dx= Math.floor(Math.random()*10) +1
	this.dy=Math.floor(Math.random()*10) +1


	this.drawImage=function(){

		this.x+= this.dx
		this.y+=this.dy

		if( this.x<0){this.dx*=-1}
		if( this.y<0){this.dy*=-1}
		if( this.x>600){this.dx*=-1}
		if( this.y>600){this.dy*=-1}
		context.drawImage(korea,this.x,this.y)
}
}