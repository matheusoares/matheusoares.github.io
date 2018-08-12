var btn = document.getElementById("btnTrigger");
var menu = document.getElementById("menuHidded");

btn.addEventListener('click', function(){
	menu.classList.toggle('menu-hidded');

	if (!menu.classList.contains('menu-hidded')) {
		btn.classList.add('open');
	}else{
		btn.classList.remove('open');
	}

});


