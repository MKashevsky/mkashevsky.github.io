var
state	= 0;

function animate_homepage(){
var
	choose=document.getElementById('choose-us');
	choose_top = choose.getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top;
	
	catalogs=document.getElementById('catalogs-overlay');
	catalogs_top = catalogs.getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top;
	
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	
	reasons = $('#choose-us .reasons');
	txt = $('#choose-us .reasons p');
	
	arrow = $('#catalogs .supplies .arrow');
	img = $('#catalogs .supplies img');
	overlay = $('#catalogs .overlay');
	
 //#choose-us animate
	if (scrollTop > choose_top-250){
		reasons.css({'display':'block'});
		reasons.animate({'right':'100px'}, 1500, function(){
			txt.animate({'opacity':'1'}, 2000)
		});
	}
	
//#catalogs animate
	if (scrollTop > choose_top){
		$('#catalogs').css({'display':'block'});
	}
	else{$('#catalogs').css({'display':'none'});}
	if (state==0 && scrollTop > catalogs_top){
		overlay.css({'display':'block'});
		overlay.animate({'opacity':'0.6'}, 500, function(){
		img.animate({'margin-top':'0px'}, 1500, function(){
		arrow.animate({'opacity':'1'}, 1000, function(){
		overlay.animate({'opacity':'0'}, 500, function(){
		overlay.css({'display':'none'})})})})});
		state++;
	}
	else if(state==1 && scrollTop > catalogs_top+100){
		$('#catalogs').css({'top':'-100px'});
		state++;
	}
	else if(state==2 && scrollTop > catalogs_top+200){
		$('#catalogs').css({'top':'-200px'});
		state++;
	}
	else if(state==3 && scrollTop < catalogs_top+200){
		$('#catalogs').css({'top':'-100px'});
		state--;
	}
	else if(state==2 && scrollTop < catalogs_top+100){
		$('#catalogs').css({'top':'0px'});
		state--;
	}
};

 window.addEventListener('scroll', animate_homepage, false);