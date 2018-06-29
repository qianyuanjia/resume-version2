!(function(){
function cirAnimation(canvasId,initialRadius,RadiusDelta,alphaDelta){
	var oCan=document.getElementById(canvasId);
	var oCtx=oCan.getContext('2d');
	var cirArr=[];
	var framenum=0;
	
	function drawBunbel(){
		framenum++;
		if(framenum%10==0){
			var x=Math.floor(Math.random()*oCan.width);
			var y=Math.floor(Math.random()*oCan.height);
			var R=Math.floor(Math.random()*256);
			var G=Math.floor(Math.random()*256);
			var B=Math.floor(Math.random()*256);
			var A=1;
			cirArr.push({
				x:x,
				y:y,
				r:initialRadius,
				R:R,
				G:G,
				B:B,
				A:A
			});
		}
		oCtx.clearRect(0,0,oCan.width,oCan.height);
		for(var i=0;i<cirArr.length;i++){				
			oCtx.beginPath();
			oCtx.fillStyle='rgba('+cirArr[i].R+','+cirArr[i].G+','+cirArr[i].B+','+cirArr[i].A+')';
			oCtx.moveTo(cirArr[i].x,cirArr[i].y);
			oCtx.arc(cirArr[i].x,cirArr[i].y,cirArr[i].r,0,2*Math.PI,false);
			oCtx.closePath();
			oCtx.fill();				
		}

		for(var i=0;i<cirArr.length;i++){
			cirArr[i].r+=RadiusDelta;
			cirArr[i].A-=alphaDelta;
			if(cirArr[i].A<=0){
				cirArr.splice(i,1);
			}
		}
		window.requestAnimationFrame(drawBunbel)
	}
	drawBunbel()
}

function createCanvas(oParent,callback){
	var oCan=document.createElement('canvas');
	oCan.width=oParent.offsetWidth;
	oCan.height=oParent.offsetHeight;
	oCan.id="idx3";
	oParent.appendChild(oCan);
	cirAnimation('idx3',15,2,0.01);
	callback&&callback();
}


var oIdx4=document.getElementById('site-life');
createCanvas(oIdx4);
})()