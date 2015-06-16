var toShow = ["<div><h1>Amazing Photo 1</h1><img src=photo.jpg /></div>",
    "<div><h1>Amazing Photo 2</h1><img src='https://download.unsplash.com/photo-1429616588302-fec569e203ce'/></div>",
    "<div><h1>Amazing Photo 3</h1><img src='https://download.unsplash.com/photo-1429032021766-c6a53949594f'/></div>"
];

$("#menu li").hover(function (){
	$(this).children("ul").slideToggle();
});

$(".class").click(function(){
    var index = $(this).index();
    console.log(index);

    $("#container").html(toShow[index]);
});