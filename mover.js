var mvr_links = document.getElementsByTagName('a');
var mvr_int;
var latestur='';
var anyrankint;
function mvr_act(){
	if(document.title.indexOf('noact')>-1){
		clearInterval(mvr_int);
		anyrankint = setInterval(function() { getanyrank(latestur); },(60000*3));
	}else{
		console.log('fire-'+random);
		var min = 0; 
		var max = mvr_links.length-1;  
		var random = parseInt(Math.random() * (max - min) + min); 
		var del = mvr_links[random];
	
		del.scrollIntoView();

		var evObj = document.createEvent( 'Events' );
		evObj.initEvent( 'onmousemove', true, false );
		del.dispatchEvent( evObj );
		console.log('del-'+del.innrText);
		}
}
//mvr_int = setInterval(mvr_act,500);
function getanyrank(latestur){
	clearInterval(anyrankint);
	window.location.href = latestur;
}
var klik_int;
var jcounter=0;

function klc_act(klc_act){
	clearInterval(klik_int);
	var mvr_links = document.getElementsByTagName('a');
	//alert(window.location.href);
	if(window.location.href=="https://www.linkedin.com/jobs/"){
			window.location.href = "https://www.linkedin.com/jobs/search/?geoId=90009721&keywords=dusseldorf&location=Greater%20Dusseldorf%20Area&sortBy=DD";
	}
	if(window.location.href.indexOf("/company/")>-1){
		window.location.href = "https://www.linkedin.com/jobs/search/?geoId=90009721&keywords=dusseldorf&location=Greater%20Dusseldorf%20Area&sortBy=DD";
	}
	if(window.location.href.indexOf("/jobs/search/")>-1){
			for(var i=0;i<=mvr_links.length-1;i++){
				if(mvr_links[i].getAttribute('href').indexOf('company')>-1){
					window.location.href = mvr_links[i].getAttribute('href');
					break;
				}
			}
	}
	
	
}

klik_int = setInterval(klc_act,60000);

//setInterval(controllasttab,(6000*1));
