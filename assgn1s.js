var    innerbox={w:50,h:50},
   outerbox={w:400,h:500},left1=0,top1=0,right1=50,bottom1=50,
   left=0,right=50,topc=0,bottom=50,
     pos1=0;
var box1,box2;
var elem;
function init()
{ 
  elem = document.getElementById("inner");  
}
function play()
{
  document.getElementById('play').style.visibility='hidden';
  document.getElementById('pause').style.visibility='visible';
  id = setInterval(frame, 0.01);
}
function pause()
{
	
  document.getElementById('play').style.visibility='visible';
  document.getElementById('pause').style.visibility='hidden';
  clearInterval(id);
}
function frame()
  {
  if(left1 <= outerbox.w-right)
    {
      left1++; 
      elem.style.left = left1 + 'px';
    }
    else if(top1 <= outerbox.h-bottom)
    {
      top1++;
      elem.style.top =  top1 + "px";
    }
    else if(right1 <= outerbox.w-left)
    {
      right1++;
      elem.style.left= outerbox.w-right1 +"px";
    }
    else if(bottom1 <= (outerbox.h - topc))
    {
      bottom1++;
	  
      elem.style.top=  (outerbox.h-bottom1) +"px";
      if (bottom1 == (outerbox.h  - innerbox.h - topc))
      {
         pos1 += innerbox.w;
         right1 = pos1 + innerbox.w;
         bottom1 = pos1 + innerbox.w;
         left1 = pos1 - innerbox.w;
         top1 = pos1;
         left += innerbox.w;
         topc += innerbox.h;
         right += innerbox.w;
         bottom += innerbox.h;
        frame();
      }
    }
	else
	{
		clearInterval(id);
		alert("reached to end....");
    left1=0;top1=0;right1=50;bottom1=50;
   left=0;right=50;topc=0;bottom=50;
     pos1=0;
     elem.style.left=0+'px';
     elem.style.top=0+'px'; 
  document.getElementById('play').style.visibility='visible';
	}
  }  
