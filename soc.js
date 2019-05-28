function tick(){
	$("#ticker li:first").slideUp(function(){
		$(this).appendTo($("#ticker")).slideDown();
	});
};

setInterval(function(){
	tick();
}, 5000);