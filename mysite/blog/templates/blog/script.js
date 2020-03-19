var img
var back
var context
var canvas
var timer
var x =0
var y=0
var z=0
var a= 0
var b= 0
var c=0
var fuck
var ayumi
var ayuki
var korea
var naoya



initial = function(){
	canvas= document.querySelector('#canvas')
	context= canvas.getContext('2d')

	
	img = new Image()
	img.src = "chaco.jpg"     
    
    back = new Image();
    back.src= "nor.jpg";

    ayumi = new Image();
    ayumi.src= "ayumi.jpg";

     korea = new Image();
    korea.src= "korea.jpg";

    naoya = new Image();
    naoya.src= "naoya.jpg";

    ayuki = new Image();
    ayuki.src= "ayuki.jpg";

    fuck= new Image()
    fuck.src= "last.jpg";

    
    	timer= setInterval(draw, 50)
    	
    	
    
	}
draw= function(){

	background()
	drawimage(event);
}

background = function(){
	
	context.drawImage(back,0,0,600,800)
	context.clearRect(0,0,400,800)
	


}


drawimage = function(event){
	x+=10
	context.drawImage(img, x-10, 0,600,800)


	y+=10
	context.drawImage(naoya,y-600,0,600,800)


	z+=10
	context.drawImage(ayuki,z-1200,0,600,800)

	a+=40
	context.drawImage(korea,a-6000,0,600,800)

	b+=10
	context.drawImage(ayumi,b-1800,0,600,800)

	c+=5
	context.drawImage(fuck,c+100,0,300,500)

	

		if (b>2400) {
		clearInterval(timer)
		context.drawImage(back,0,0,600,800)
		last()

	}

}

last= function(){
	var title= document.querySelector("#title")
	title.textContent= "おめでとう！！"

	var again= document.querySelector("#again")
	again.textContent="ななこがこれを聞いたらなんて思うだろうか..."
}
	



