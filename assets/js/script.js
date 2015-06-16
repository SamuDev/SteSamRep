$("#menu li").hover(function (){
	$(this).children("ul").slideToggle();
});

$("#menu li").children("ul").click(function(){
    $("p").replaceWith( "<img src= photo.jpg>" );
});