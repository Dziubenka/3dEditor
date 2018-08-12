/*

Copyright (c) 2018 Andrei Dziubenka, http://dziubenka.co.uk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


*/

function vect2d(x,y) {
	this.x=x;
	this.y=y;	
	
}

vect2d.prototype.plus=function(b) {
	this.x+=b.x;
	this.y+=b.y;
		
}

vect2d.prototype.minus=function(b) {
	this.x-=b.x;
	this.y-=b.y;
		
}

vect2d.prototype.multiplyvect=function(b) {
	this.x*=b.x;
	this.y*=b.y;
		
}

vect2d.prototype.multiplyvalue=function(b) {
	this.x*=b;
	this.y*=b;
		
}

vect2d.prototype.rotate=function(deg) {
	var x0,y0,rad;
	x0=this.x;
	y0=this.y;
	rad=deg*Math.PI/180;
	this.x=x0*Math.cos(rad)-y0*Math.sin(rad);
	this.y=x0*Math.sin(rad)+y0*Math.cos(rad);
		
}

//	x1	y1	x2	y2	scale	overall
//	17.9	8.3	-19.1	8.2	5	360
function world(x1,y1,x2,y2,scale,overall) {
	var offset0;
	var offset1=[];
	var offset2=[];
	//var rotate;
	var times;
	
	
	
	var i;
	
	var offx=[17.9,19.5,21.1,22.3,23.3,24.3,25.1,25.7,26.1,26.2,26.1,25.9,25.5,24.9,24,23,21.8,20.5,19.1,17.5,15.6,13.8,11.9,9.7,7.5,5.2,3,0.7,-1.5,-3.7,-6,-8.2,-10.3,-12.3,-14.3,-16.1,-18,-19.6,-21,-22.3,-23.4,-24.3,-25.1,-25.6,-26,-26.2,-26.1,-25.9,-25.5,-24.8,-24,-23.1,-21.8,-20.6,-19,-17.4,-15.7,-13.8,-11.8,-9.7,-7.5,-5.3,-3.1,-0.7,1.5,3.7,6,8.1,10.3,12.4,14.3,16.2,17.9];
	var offy=[8.3,7.6,6.7,5.9,5,4.1,3,2,1.2,0,-0.9,-1.9,-2.9,-3.9,-4.9,-5.8,-6.7,-7.4,-8.2,-8.9,-9.5,-10.1,-10.6,-10.9,-11.2,-11.4,-11.6,-11.6,-11.6,-11.5,-11.3,-10.9,-10.6,-10.1,-9.6,-9.1,-8.3,-7.6,-6.8,-5.9,-5,-4.2,-3.1,-2.1,-1.2,-0.1,1,1.9,2.9,3.9,4.9,5.8,6.7,7.5,8.2,8.9,9.6,10.1,10.6,11,11.3,11.5,11.6,11.7,11.5,11.5,11.3,10.9,10.6,10.1,9.6,9,8.3];
	var offx2=[-19.1,-17.5,-15.6,-13.8,-11.9,-9.7,-7.5,-5.2,-3,-0.7,1.5,3.7,6,8.2,10.3,12.3,14.3,16.1,18,19.6,21,22.3,23.4,24.3,25.1,25.6,26,26.2,26.1,25.9,25.5,24.8,24,23.1,21.8,20.6,19,17.4,15.7,13.8,11.8,9.7,7.5,5.3,3.1,0.7,-1.5,-3.7,-6,-8.1,-10.3,-12.4,-14.3,-16.2,-17.9,-19.5,-21.1,-22.3,-23.3,-24.3,-25.1,-25.7,-26.1,-26.2,-26.1,-25.9,-25.5,-24.9,-24,-23,-21.8,-20.5,-19.1];
	var offy2=[8.2,8.9,9.5,10.1,10.6,10.9,11.2,11.4,11.6,11.6,11.6,11.5,11.3,10.9,10.6,10.1,9.6,9.1,8.3,7.6,6.8,5.9,5,4.2,3.1,2.1,1.2,0.1,-1,-1.9,-2.9,-3.9,-4.9,-5.8,-6.7,-7.5,-8.2,-8.9,-9.6,-10.1,-10.6,-11,-11.3,-11.5,-11.6,-11.7,-11.5,-11.5,-11.3,-10.9,-10.6,-10.1,-9.6,-9,-8.3,-7.6,-6.7,-5.9,-5,-4.1,-3,-2,-1.2,0,0.9,1.9,2.9,3.9,4.9,5.8,6.7,7.4,8.2];

	
	
	/*
	offset1.push(new vect2d(x1,y1));
	offset2.push(new vect2d(x2,y2));
	
	offset0=new vect2d((offset1[0].x+offset2[0].x)/2 ,(offset1[0].y+offset2[0].y)/2 );
	
	//rotate=0;
	times=overall/scale;
	
	for(i=1;i<times;i++) {
		offset1.push(new vect2d(x1,y1));
		offset1[i].plus(offset0);
		offset1[i].rotate(-scale*i);
		offset1[i].minus(offset0);
		offset2.push(new vect2d(x2,y2));
		offset2[i].plus(offset0);
		offset2[i].rotate(-scale*i);
		offset2[i].minus(offset0);
		
		
		
		
	}
	
	*/
	
	offset1.push(new vect2d(offx[0],offy[0]));
	offset2.push(new vect2d(offx2[0],offy2[0]));
	
	//offset0=new vect2d((offset1[0].x+offset2[0].x)/2 ,(offset1[0].y+offset2[0].y)/2 );
	
	//rotate=0;
	times=overall/scale;
	
	for(i=1;i<(times+1);i++) {
		offset1.push(new vect2d(offx[i],offy[i]));
		//offset1[i].plus(offset0);
		//offset1[i].rotate(-scale*i);
		//offset1[i].minus(offset0);
		offset2.push(new vect2d(offx2[i],offy2[i]));
		//offset2[i].plus(offset0);
		//offset2[i].rotate(-scale*i);
		//offset2[i].minus(offset0);
		
		
		
		
	}
	
	
	
	
	this.offset1=offset1;
	this.offset2=offset2;
	
	
	this.rotate=0;
	this.allobjects=new Array; //pictures in png format
	this.players=new Array;
	this.walls=new Array;
	this.map=new Array;
	this.map[0]=new Array;
	this.map[1]=new Array;	
	this.map[2]=new Array;
	this.map[3]=new Array;
	
	this.centerx=0;
	this.centery=0;
	
	//t1=setInterval(this.loaded.bind(this), 3);
	
	
}

//t1=setInterval(drawer, 30);

world.prototype.loaded=function() {
	var i,a,b;
	a=0;
	b=0;
	for(i=0;i<this.allobjects.length;i++) {
		a=a+this.allobjects[i].obj.completed;
		b=b+this.allobjects[i].obj.img.length;
		
		
	}
	
	
	
	
	
	
}


world.prototype.addObj=function(k) {
	this.allobjects.push(k);
		
}

world.prototype.addObjs=function(k) {
	var i;
	for(i=0;i<k.length;i++) {
		
		this.addObj(new loadObj(k[i][0],k[i][1],5));
		
		
	}
	
		
}

function playerobject (cube,name,owner) {
	this.cube=cube;
	this.name=name;
	this.owner=owner;

}


world.prototype.addPlayer=function(avatar,name,owner) {
	var tc=new cubeobject (1,avatar,0,0,0);
	var tp=new playerobject(tc,name,owner);
	this.players.push(tp);
	this.addtoMap(tc);
		
}

world.prototype.movePlayer=function(name,dx,dy,dz) {
	this.players[name].cube.x+=dx;
	this.players[name].cube.y+=dy;
	this.players[name].cube.z+=dz;
	this.map[0].sort(compare0);
	this.map[1].sort(compare1);
	this.map[2].sort(compare2);
	this.map[3].sort(compare3);
		
}

world.prototype.builder=function(name,type) {
	var x,y,z;
	x=this.players[name].cube.x;
	y=this.players[name].cube.y;
	z=this.players[name].cube.z;
	
	var i,notfound;
	notfound=1;
	for(i=0;i<this.walls.length;i++) {
		if((this.walls[i].cube.x==x) && (this.walls[i].cube.y==y) && (this.walls[i].cube.z==z)) {
			this.removeWall(type,x,y,z);
			notfound=0;
		}
		
	}
	
	if (notfound) {
		this.addWall(type,x,y,z);
		
	}
	
	
		
}

function wallobject (cube) {
	this.cube=cube;

}

world.prototype.addWall=function(src,x,y,z) {
	var tc=new cubeobject (1,src,x,y,z);
	var tw=new wallobject (tc);
	this.addtoMap(tc);
	this.walls.push(tw);
		
}

world.prototype.removeWall=function(type,x,y,z) {
	var i,i2;
	for(i=0;i<this.walls.length;i++) {
		if((this.walls[i].cube.x==x) && (this.walls[i].cube.y==y) && (this.walls[i].cube.z==z) && (this.walls[i].cube.type!=1)) {
			this.walls.splice(i,1);
			
		}
		
	}
	for(i2=0;i2<4;i2++)
	{
	for(i=0;i<this.map[i2].length;i++) {
		if((this.map[i2][i].x==x) && (this.map[i2][i].y==y) && (this.map[i2][i].z==z) && (this.map[i2][i].type!=1)) {
			this.map[i2].splice(i,1);
			
		}
		
	}
	}
		
}


function compare0 (a,b) {
						
			if((a.x==b.x) && (a.y==b.y) && (a.z==b.z)) {
				if(a.type==1) {
					return 1;
				}
				if(b.type==1) {
					return -1;
				}
				return 0;
			}
			
			if(a.z>b.z) { return 1; }
			if(a.z<b.z) {return -1; }
			if(a.z==b.z) {
				if(a.y>b.y) { return 1; }
				if(a.y<b.y) {return -1; }
				if(a.y==b.y) {
					if(a.x>b.x) { return 1; }
					if(a.x<b.x) {return -1; }
				}
				
				
			}
			
			return 0;
			
}

function compare1 (a,b) {
						
			if((a.x==b.x) && (a.y==b.y) && (a.z==b.z)) {
				if(a.type==1) {
					return 1;
				}
				if(b.type==1) {
					return -1;
				}
				return 0;
			}
			
			if(a.z>b.z) { return 1; }
			if(a.z<b.z) {return -1; }
			if(a.z==b.z) {
				if(a.y<b.y) { return 1; }
				if(a.y>b.y) {return -1; }
				if(a.y==b.y) {
					if(a.x>b.x) { return 1; }
					if(a.x<b.x) {return -1; }
				}
				
				
			}
			
			return 0;
}

function compare2 (a,b) {
						
			if((a.x==b.x) && (a.y==b.y) && (a.z==b.z)) {
				if(a.type==1) {
					return 1;
				}
				if(b.type==1) {
					return -1;
				}
				return 0;
			}
			
			if(a.z>b.z) { return 1; }
			if(a.z<b.z) {return -1; }
			if(a.z==b.z) {
				if(a.y<b.y) { return 1; }
				if(a.y>b.y) {return -1; }
				if(a.y==b.y) {
					if(a.x<b.x) { return 1; }
					if(a.x>b.x) {return -1; }
				}
				
				
			}
			
			return 0;
			
}

function compare3 (a,b) {
						
			if((a.x==b.x) && (a.y==b.y) && (a.z==b.z)) {
				if(a.type==1) {
					return 1;
				}
				if(b.type==1) {
					return -1;
				}
				return 0;
			}
			
			if(a.z>b.z) { return 1; }
			if(a.z<b.z) {return -1; }
			if(a.z==b.z) {
				if(a.y>b.y) { return 1; }
				if(a.y<b.y) {return -1; }
				if(a.y==b.y) {
					if(a.x<b.x) { return 1; }
					if(a.x>b.x) {return -1; }
				}
				
				
			}
			
			return 0;
			
}
			
			

world.prototype.addtoMap=function(cube) {
	this.map[0].push(cube);
	this.map[0].sort(compare0);
	
	this.map[1].push(cube);
	this.map[1].sort(compare1);
	
	this.map[2].push(cube);
	this.map[2].sort(compare2);
	
	this.map[3].push(cube);
	this.map[3].sort(compare3);
	
		
}



function cubeobject (v,t,x,y,z) {
	this.visible=v;
	this.type=t;
	this.x = x;
	this.y = y;
	this.z = z;

}

loadscore=0;
neededscore=18+18+18+1+18*4+18*4;
res=[["cube",90],["pointer",90],["water",90],["cylinder",5],["roof1",360],["roof2",360]];
//playc("canv",res,17.9,8.3,-19.1,8.2,5,360)
function playc(id,res,x1,y1,x2,y2,scale,overall) {
	this.graphics=new initCanv(id);
	this.graphics.size(800,600);
	this.room=new world(x1,y1,x2,y2,scale,overall);
	this.room.addObjs(res);
	this.room.centerx=400;
	this.room.centery=300;
	
	//this.objs=new Array();
	//this.objs.push(new cubeobject(1,0,0,0,0));
	//this.room.addtoMap(this.objs[0]);
	
	
	
	
}

playc.prototype.refresh=function() {
	this.graphics.ctx.clearRect(0, 0, this.graphics.canvas.width, this.graphics.canvas.height);
	//this.graphics.ctx.drawImage(this.room.allobjects[0].obj.img[0], 300,300,96,54);
	var i;
	var x,y,z,type,nx,ny,rotation;
	var rotation=this.room.rotate;
	var mapnum=0;
	
	if((rotation>9)&&(rotation<28)) {
		mapnum=1;
	}
	
	if((rotation>27)&&(rotation<46)) {
		mapnum=2;
	}
	
	if((rotation>45)&&(rotation<64)) {
		mapnum=3;
	}
	
	
	
	
	for(i=0;i<this.room.map[mapnum].length;i++) {
		type=this.room.map[mapnum][i].type;
		x=this.room.map[mapnum][i].x;
		y=this.room.map[mapnum][i].y;
		z=this.room.map[mapnum][i].z;
		nx=x*this.room.offset2[rotation].x+y*this.room.offset1[rotation].x+this.room.centerx;
		ny=x*this.room.offset2[rotation].y+y*this.room.offset1[rotation].y-z*23+this.room.centery;
		this.graphics.ctx.drawImage(this.room.allobjects[type].obj.img[rotation], Math.round(nx),Math.round(ny),96,54);
		
		
		
	}
}


//	id
//	canv
function initCanv(id) {
	
	this.canvas = document.getElementById(id);
	this.ctx = this.canvas.getContext("2d");
	
	
	
	
	
}

//	w				h
//	document.body.clientWidth	document.body.clientHeight

initCanv.prototype.size=function(w,h) {
	this.canvas.width=w;
	this.canvas.height=h;
		
}

function loadObjLocations(name,rotation,scale) {
	this.paths=[];
	var i;
	for(i=0;i<rotation/scale;i++) {
		this.paths[i]="./"+name+"/cube"+i+".png";
		
	}
	
	
	
}






function loadObjData(locations0,rotation,scale) {
	var i;
	this.locations=locations0;
	this.completed=0;
	this.img=[];
	
	for(i=0;i<this.locations.paths.length;i++) {
		
		this.img[i]=new Image();
		
		
		
		this.img[i].onload=this.loaded.bind(this);
		
		
		this.img[i].src=this.locations.paths[i];
		
		
		
	}
	
	for(i=0;i<360/scale;i++) {
		this.img[i]=this.img[i%(rotation/scale)];
		
		
	}
	
	
	
}

loadObjData.prototype.loaded=function() {
	this.completed+=1;
	loadscore+=1;	
}


function loadObj(name,rotation,scale) {
	var k;
	k=new loadObjLocations(name,rotation,scale);
	this.obj=new loadObjData(k,rotation,scale);
	
	
	
}



window.onload= function() {
	w1=new playc("canv",res,17.9,8.3,-19.1,8.2,5,360);
	//w1.room.addWall(0,1,1,0);
	
	
	w1.room.map=castlemaps;
	w1.room.walls=castlewalls;
	w1.room.addPlayer(1,0,0);
	w1.room.movePlayer(0,2,2,10)
	//w1.room.players=castleplayers;
	
	w1.room.rotate=3;
	checkforload=function() {
		document.getElementById("statusloader").innerHTML=messagenum3+Math.round(loadscore/neededscore*100)+" %";

	if(loadscore==neededscore) {
		clearInterval(timer0);
		timer1=setInterval(w1.refresh.bind(w1), 50);
		document.addEventListener('keypress',keydraw);

	}

	};


	timer0=setInterval(checkforload,100);

		

//	timer1=setInterval(w1.refresh.bind(w1), 50);
	
	demo=function() {
		
		if(this.rotate>=71) {
			this.rotate=0;
		} else {
			this.rotate=this.rotate+1;
		}
		
		
		if(this.rotate==64) {
			dwx=-1;
			dwy=0;
	
			dax=0;
			day=-1;
		}
		
		if(this.rotate==10) {
			dwx=0;
			dwy=1;
	
			dax=-1;
			day=0;
		}
		
		if(this.rotate==28) {
			dwx=1;
			dwy=0;
	
			dax=0;
			day=1;
		}
		
		if(this.rotate==45) {
			dwx=0;
			dwy=-1;
	
			dax=1;
			day=0;
		}
		
		
		
		
	};

	document.getElementById("br").onclick=function() {
		//console.log(1);
		var element=document.getElementById("br");
		//console.log(demo);
		if (element.innerText===messagenum2) {
			timer2=setInterval(demo.bind(w1.room), 100);
			element.innerText=messagenum1;
						
		}
		
		else if (element.innerText===messagenum1) {
			clearInterval(timer2);
			element.innerText=messagenum2;
						
		}
		
		
	
	};
	
	cameras=document.getElementsByClassName("camera");
	
	view=function() {
		var element=document.getElementById("br");
		if (element.innerText===messagenum1) {
			clearInterval(timer2);
			element.innerText=messagenum2;
						
		}
		
		w1.room.rotate=this.id;
		
		if(this.id==0) {
			dwx=-1;
			dwy=0;
	
			dax=0;
			day=-1;
		}
		
		if(this.id==18) {
			dwx=0;
			dwy=1;
	
			dax=-1;
			day=0;
		}
		
		if(this.id==36) {
			dwx=1;
			dwy=0;
	
			dax=0;
			day=1;
		}
		
		if(this.id==54) {
			dwx=0;
			dwy=-1;
	
			dax=1;
			day=0;
		}
				
	};
	
	var i;
	for(i=0;i<cameras.length;i++) {
		cameras[i].onclick=view.bind(cameras[i]);
		
	}
	
	currentbrick=0;
	
	bricks=document.getElementsByClassName("brick");
	
	selectbrick=function() {
		
		for(i=0;i<bricks.length;i++) {
			
			bricks[i].style.border="solid 1px white";
		
		}
		
		currentbrick=this.id;
		this.style.border="solid 1px yellow"
		
				
	};
	
	var i;
	for(i=0;i<bricks.length;i++) {
		bricks[i].onclick=selectbrick.bind(bricks[i]);
		bricks[i].style.border="solid 1px white";
		
	}
	
	bricks[0].style.border="solid 1px yellow"; // currentbrick=0
	
	dwx=-1;
	dwy=0;
	dax=0;
	day=-1;
		
	function keydraw (e0) {
		
		var key0;
		key0="0";
		key0=e0.key;		
		
			/*---IE compatibility---*/
			

			if(e0.keyCode==119) {
				key0="w";
			}

			if(e0.keyCode==115) {
				key0="s";
			}


			if(e0.keyCode==97) {
				key0="a";
			}


			if(e0.keyCode==100) {
				key0="d";
			}

			if(e0.keyCode==105) {
				key0="i";
			}
			
			if(e0.keyCode==107) {
				key0="k";
			}

			if(e0.keyCode==112) {
				key0="p";
			}
			
			
			
		
			
			

		
		
		switch(key0)
		{
			
			case "w":
				w1.room.movePlayer(0,dwx,dwy,0)
				break;
			case "s":
				w1.room.movePlayer(0,-dwx,-dwy,0)
				break;
			case "a":
				w1.room.movePlayer(0,dax,day,0)
				break;
			case "d":
				w1.room.movePlayer(0,-dax,-day,0)
				break;
			case "i":
				w1.room.movePlayer(0,0,0,1)
				break;
			case "k":
				w1.room.movePlayer(0,0,0,-1)
				break;
			case "p":
				w1.room.builder(0,currentbrick);
			        break;
			
			
				
				
				
		}



	};
			

//	document.addEventListener('keypress',keydraw);
	
	
	
};

/* examples:

w1=new playc("canv",res,17.9,8.3,-19.1,8.2,5,360)
w1.room.addWall(0,1,20,0)
w1.room.rotate=3
w1.refresh()

*/





