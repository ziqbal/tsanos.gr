function startFading() {
	TweenMax.set($(".mainProduct"),{css:{autoAlpha:0}});
	TweenMax.to(preloader, .5, {css:{autoAlpha:0}}, .4);
	var elements=$(".mainProduct");
	//alert(elements.length);
	var tl = new TimelineLite({paused:false,onComplete:repeatTL});
	var delay, outDelay;
	var interval=4
	for (var i=0;i<elements.length;i++)
	{
		delay=i*interval;
		outDelay=delay+interval
		var currentElement=elements[i];	
		//alert(delay+ " "+outDelay)	
		tl.to(currentElement, 1, {css:{autoAlpha:1}},delay);
		tl.to(currentElement, 1, {css:{autoAlpha:0}},outDelay);
		
	}
    function repeatTL()
   {
	  tl.restart(); 
   }
};

function transitionIn(colors) {

var left=$(".leftColumn")
var center=$(".centerColumn")
var right=$(".rightColumn")
var preloader=$("#preloader")
var tl = new TimelineLite({paused:false});
tl.to(preloader, .5, {css:{autoAlpha:0}})
	.from(left, .5, { css:{top:"-=500px",autoAlpha:0},ease:Back.easeOut},.5)
  .from(center,  .5, {css:{top:"-=500px",autoAlpha:0}, ease:Back.easeOut},1)
  .from(right,  .5, {css:{top:"-=500px",autoAlpha:0}, ease:Back.easeOut}, 1.5);



var elem=$(".submenu ul a");	
	
		$(".submenu ul a").each(function(index, element){
		TweenMax.set(element,{css:{color:colors[index]}});
		
  		var tl = new TimelineLite({paused:true});
 		 tl.to(element, 0.2, {css:{color:"#FFF"}})
  		 element.animation = tl;
		
  
  
$(".submenu ul a").hover(over, out);

	function over(){
	  this.animation.play();
	}
	
	function out(){
	  this.animation.reverse();
	}
}

);
productGrow();		

}
function productGrow()
{
  		var tl1 = new TimelineLite({paused:true});
 		 tl1.to($(".rightColMiddle"), 0.2, {scale:1.5,})
  		
		 $(".rightColMiddle").hover(over, out);
		 function over(){
   tl1.play();
}

function out(){
  tl1.reverse();

}
}
 
 
//recipes
function transitionRecipes() {
	
	TweenMax.to(preloader, 1, {css:{autoAlpha:0}}, .4)
	TweenMax.to($(".recipesMain"), 1, {css:{autoAlpha:1}},2);
};
  


