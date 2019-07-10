var inteix;
var callerfnc = "glob";
var intssh;
function updateCount(tabId, isOnRemoved) {
  browser.tabs.query({})
  .then((tabs) => {
    let length = tabs.length;

    // onRemoved fires too early and the count is one too many.
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=1396758
    if (isOnRemoved && tabId && tabs.map((t) => { return t.id; }).includes(tabId)) {
      length--;
    }

    browser.browserAction.setBadgeText({text: length.toString()});
    if (length > 2) {
      browser.browserAction.setBadgeBackgroundColor({'color': 'green'});
    } else {
      browser.browserAction.setBadgeBackgroundColor({'color': 'red'});
    }
  });
}


browser.tabs.onRemoved.addListener(
  (tabId) => { updateCount(tabId, true);
});
browser.tabs.onCreated.addListener(
  (tabId) => { updateCount(tabId, false);
});
updateCount();

function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}
//document.addEventListener("DOMContentLoaded", listTabs);
var latesttit="";
var ltid=0;
var latestur="";
var latestsite = "";
var intcheckg;
function checkgoog(){
clearInterval(intcheckg);

console.log('****now - '+latesttit);

var makeItGreen = 'document.body.style.border = "5px solid green"';

var executing001 = browser.tabs.executeScript({
  code: makeItGreen
});
executing001.then(onExecutedG, onErrorEG);

/*
getCurrentWindowTabs().then((tabs) => {
browser.tabs.sendMessage(tabs[tabs.length-1].id, {
                    command: "testlog",
                    txt: ('dats = '+latesttit)
                });
})*/

}
function getrandsec4g(){
	var min=6000; 
    var max=25000;  
    var random =parseInt( Math.random() * (max - min) + min);
console.log("random :: "+random);
return random;
}

function onExecutedG(result) {
    console.log('We made it green');
    //clearInterval(intTTL);
    callerfnc = "onExecutedG";
  //intTTL = setInterval(controllasttab,60000);
}

function onErrorEG(error) {
  console.log(`Error: ${error}`);
}


function onCreatedG(tab) {
ltid = tab.id;
  console.log(`Created new tab: ${tab.id}`)
}

function onErrorG(error) {
  console.log(`Error: ${error}`);
}
function replaceallstr(ts, tv, rv) {
            try {
                while (ts.indexOf(tv) > -1) {
                    ts = ts.replace(tv, rv);
                }
            } catch(ex){}
            return ts;
}


var intkilltab;
function killtab() {
    clearInterval(intkilltab);

}

var sokettab = -1;
function onRemovedT() {
    forcolsid = -1;
    console.log("Removed");
}

function onErrorT(error) {
    console.log("Error: ${error}");
}
var forcolsid = -1;
function gotTabs2(){
controllasttab();
console.log("AAAAAAAnother check->");
clearInterval(inttabs);
	getCurrentWindowTabs().then((tabs) => {
    for (let tab of tabs) {
	//var wtit = "SHf:: founded rank " + drank;
        //SHhelp
        //refrersh
        if (tab.title.indexOf('refrersh') == 0) {
            /*forcolsid = tab.id;
            var executing002 = browser.tabs.executeScript(
                sokettab, {
                    code: ("document.title='doref';")
                });
            executing002.then(onExecutedLLTHelp2, onErrorLLTHelp2);

        clicksockettab();*/
		runextcit(tab.id);
		}

        //go2::4
        if (tab.title.indexOf('go2') == 0) {
            var tmpar = tab.title.split('go2::');
            var dpg = parseInt(tmpar[1])-2;
            //document.getElementById('nav').getElementsByTagName('a')[0].click();
            //"document.getElementById('nav').getElementsByTagName('a')[" + dpg +"].click();"
            var dcoc = "var linkcol = document.getElementById('nav').getElementsByTagName('a');";//[" + dpg + "].click();"
            dcoc += "for(var i=0;i<=linkcol.length-1;i++){if(linkcol[i].innerText.trim() == '" + tmpar[1].trim() + "'){linkcol[i].click();}}";
            dcoc = "document.getElementById('pnnext').click();";
            var executing003 = browser.tabs.executeScript(
                ltid, {
                    code: dcoc 
                });
            executing003.then(onExecutedLLTx, onErrorLLTx);
        }

        //foundStep::
        if (tab.title.indexOf('foundStep') > -1) {
		console.log("founded die tit.....");
		//FinishKlik();

		var dcommand = "";
    dcommand += "var spns = document.getElementsByTagName('span');";
   // dcommand += "console.log('** A:: ' + latestur.trim());";
    dcommand += "for (var i = 0; i <= spns.length - 1; i++) {";
    dcommand += "if (spns[i].innerHTML.indexOf('"+latestsite+"') > -1) {";
    //dcommand += 'var tit = "1-" + (i + 1);';
    //dcommand += "document.title = 'foundStep::' + tit;";
    dcommand += "spns[i].parentElement.parentElement.parentElement.click();";
    dcommand += '}}';


            var tmpar = tab.title.split('foundStep::');
            var drank = tmpar[1];
            var executing003 = browser.tabs.executeScript(
                tab.id, {
                    code: (dcommand)
                });
            executing003.then(onExecutedLLTFin2C, onErrorLLTFin2C);
runextcit(tab.id);

        }

        if (tab.title.indexOf('SHhelp') == 0) {
            resetjust();
			//forcolsid = tab.id;
            //var executing002 = browser.tabs.executeScript(
                //sokettab, {
                  //  code: ("document.title='komak';")
                //});
            //executing002.then(onExecutedLLTHelp2, onErrorLLTHelp2);

            //var executing0021 = browser.tabs.executeScript(
            //    forcolsid, {
            //        code: ("document.title='...fertig...';")
            //    });
            //executing0021.then(null, null);

        }
        if (tab.title.indexOf('#30F') > -1) {
            //var removing = browser.tabs.remove(tab.id);
            //removing.then(onRemovedT, onErrorT);
            continue;
        }
        if (tab.title.indexOf('SHf') == 0) {
			var drank = tab.title.split("SHf:: founded rank ")[1];
			var executing003 = browser.tabs.executeScript(
				  sokettab , {
					code : ("addKlik4LatestUR('" + drank + "');")
				});
			executing003.then(onExecutedLLTFin2, onErrorLLTFin2);
		}
		if(tab.title.indexOf('SHs')==0){
		intssh=setInterval(gotnextssh,(50000*30));
			var tt=tab.title.split('SHs::')[1].split('nnpp');
			var tit=tt[0];
			var ur=tt[1];
            if (latesttit != tit) {
                if (sokettab == -1) {
                    sokettab = tab.id;
                }
				latesttit=tit;
				latestur=ur;
				latestsite=replaceallstr(latestur,"https://","");
				latestsite=replaceallstr(latestsite,"http://","");
				latestsite=latestsite.split('/')[0];
				var creating = browser.tabs.create({
    url:"http://google.de"
  });
  creating.then(onCreatedG, onErrorG);

				/*browser.tabs.create({url: "http://google.de"}).then(() => {
  browser.tabs.executeScript({
    code: 'alert(123);'
  });
});*/

				/*browser.tabs.create({url: "http://google.de", openInReaderMode: false}).then(() => {
  browser.tabs.executeScript({
    code: "console.log('location:', window.location.href);"
  });
});*/
				intcheckg=setInterval(checkgoog,getrandsec4g());
//latesttit=replaceallstr(latesttit,"undefined","");
//				document.getElementById('msgl').innexHTML=latesttit;

			}
		}
	}
	});
	inttabs=setInterval(gotTabs2,(60000*3));
}
var inttabs;//=setInterval(gotTabs2,30000);

var inklikforce;
//browser.tabs.executeScript({file: "/gox.js"})

function onExecutedLLTx(result) { console.log("yoha :)");}
function onErrorLLTx(error) { }

function onExecutedLLT(result) {

    if (TTLIndx > 7) {
        //resetwithhelp();
		resetjust();
		TTLIndx = 0;
		//intTTL = setInterval(controllasttab,(60000*1));
		console.log('interval set again');
    } else {
        console.log('LLT: We executed in tab 2');
        TTLIndx++;
        clearInterval(intTTL);
        callerfnc = "onExecutedLLT";
        intTTL = setInterval(controllasttab, 60000);
    }
}

function onErrorLLT(error) {
if(error.message.indexOf('document.getElementsByName')>-1){
    TTLIndx = 2;
  //  clearInterval(intTTL);
    callerfnc = "onErrorLLT";
//intTTL = setInterval(controllasttab, 60000);
}
    console.log('Error-LLT: ${error} - ' + error.message);
}

var intTTL;
var TTLIndx = 0;

var latestPG = 0;
var latestROW = 0;
var latestTRY = 0;
var foundStep = 0;
var foundPage = 0;
var fndel;
var forceklikgo = false;

//-------------------
var checkblocked = "if(document.body.innerText.indexOf('Our systems have detected unusual traffic from your computer')>-1){document.title='refrersh';};";
function controllasttab() {
    //clearInterval(intTTL);

    console.log("+++++ callerfnc = " + callerfnc);

    var executing010;
    var doexec = false;
    switch (TTLIndx) {
        case 0:
            foundPage = 0;
            //latesttit , latestur
latesttit=replaceallstr(latesttit,"undefined","");
//				document.getElementById('msgl').innexHTML=latesttit;
doexec = true;
            executing010 = browser.tabs.executeScript(
                ltid, {
                    code: (checkblocked+"var qi = document.getElementsByName('q')[0].value='" + latesttit + "';")
                });
            break;
        case 1:
            latestPG = 1;
            latestROW = 0;
            latestTRY = 1;
            foundStep = 0;
            doexec = true;
            executing010 = browser.tabs.executeScript(
                ltid, {
                    code: (checkblocked+"document.getElementsByName('btnK')[0].click();")
                });
            break;
        case 2:
            console.log('2 run');

			//inteix = setInterval(resetwithhelp,(50000*10));

            var dcommand = "var fnd = false;var latestur ='" + latestur + "'; var latestsite = '" + latestsite + "'; ";
            dcommand += "var spns = document.getElementsByTagName('span');";
            dcommand += "console.log('** A:: ' + latestur.trim());";
            dcommand += "for (var i = 0; i <= spns.length - 1; i++) {";
            dcommand += "if (spns[i].innerHTML.indexOf(latestsite) > -1) {";
            dcommand += "fnd = true;";
            dcommand += 'var tit = "1-" + (i + 1);';
            dcommand += "console.log('kkllicked');document.title = 'foundStep::' + tit;";
			//dcommand += "spns[i].parentElement.parentElement.parentElement.click();";
            dcommand += '}};';
            dcommand += "if(fnd==false){document.title = 'go2::2';};";
            
            doexec = false;

            var executing010B = browser.tabs.executeScript(
                ltid, {
                    code: (checkblocked + dcommand)
                });
            executing010B.then(onExecutedLLT, onErrorLLT);
            
            break;
        case 3:
            console.log('3 run');
            var dcommand = "var fnd = false;var latestur ='" + latestur + "'; var latestsite = '" + latestsite + "'; ";
            dcommand += "var spns = document.getElementsByTagName('span');";
            dcommand += "console.log('** A:: ' + latestur.trim());";
            dcommand += "for (var i = 0; i <= spns.length - 1; i++) {";
            dcommand += "if (spns[i].innerHTML.indexOf(latestsite) > -1) {";
            dcommand += "fnd = true;";
            dcommand += 'var tit = "2-" + (i + 1);';
            dcommand += "console.log('kkllicked');document.title = 'foundStep::' + tit;";
			//dcommand += "spns[i].parentElement.parentElement.parentElement.click();";
            
            dcommand += '}}';
            dcommand += "if(fnd==false){document.title = 'go2::3';};";

            doexec = false;

            var executing010B = browser.tabs.executeScript(
                ltid, {
                    code: (checkblocked + dcommand)
                });
            executing010B.then(onExecutedLLT, onErrorLLT);

            break;
        case 4:
            console.log('4 run');
            var dcommand = "var fnd = false;var latestur ='" + latestur + "'; var latestsite = '" + latestsite + "'; ";
            dcommand += "var spns = document.getElementsByTagName('span');";
            dcommand += "console.log('** A:: ' + latestur.trim());";
            dcommand += "for (var i = 0; i <= spns.length - 1; i++) {";
            dcommand += "if (spns[i].innerHTML.indexOf(latestsite) > -1) {";
            dcommand += "fnd = true;";
            dcommand += 'var tit = "3-" + (i + 1);';
            dcommand += "console.log('kkllicked');document.title = 'foundStep::' + tit;";
			//dcommand += "spns[i].parentElement.parentElement.parentElement.click();";
            
            dcommand += '}}';
            dcommand += "if(fnd==false){document.title = 'go2::4';};";

            doexec = false;

            var executing010B = browser.tabs.executeScript(
                ltid, {
                    code: (checkblocked + dcommand)
                });
            executing010B.then(onExecutedLLT, onErrorLLT);

            break;
        case 5:
            console.log('5 run');
            var dcommand = "var fnd = false;var latestur ='" + latestur + "'; var latestsite = '" + latestsite + "'; ";
            dcommand += "var spns = document.getElementsByTagName('span');";
            dcommand += "console.log('** A:: ' + latestur.trim());";
            dcommand += "for (var i = 0; i <= spns.length - 1; i++) {";
            dcommand += "if (spns[i].innerHTML.indexOf(latestsite) > -1) {";
            dcommand += "fnd = true;";
            dcommand += 'var tit = "4-" + (i + 1);';
            dcommand += "console.log('kkllicked');document.title = 'foundStep::' + tit;";
			//dcommand += "spns[i].parentElement.parentElement.parentElement.click();";
            
            dcommand += '}}';
            dcommand += "if(fnd==false){document.title = 'go2::5';};";

            doexec = false;

            var executing010B = browser.tabs.executeScript(
                ltid, {
                    code: (checkblocked + dcommand)
                });
            executing010B.then(onExecutedLLT, onErrorLLT);

            break;
        case 6:
            console.log('6 run');
            var dcommand = "var fnd = false;var latestur ='" + latestur + "'; var latestsite = '" + latestsite + "'; ";
            dcommand += "var spns = document.getElementsByTagName('span');";
            dcommand += "console.log('** A:: ' + latestur.trim());";
            dcommand += "for (var i = 0; i <= spns.length - 1; i++) {";
            dcommand += "if (spns[i].innerHTML.indexOf(latestsite) > -1) {";
            dcommand += "fnd = true;";
            dcommand += 'var tit = "5-" + (i + 1);';
            dcommand += "console.log('kkllicked');document.title = 'foundStep::' + tit;";
			//dcommand += "spns[i].parentElement.parentElement.parentElement.click();";
            
            dcommand += '}}';
            dcommand += "if(fnd==false){document.title = 'go2::6';};";

            doexec = false;

            var executing010B = browser.tabs.executeScript(
                ltid, {
                    code: (checkblocked + dcommand)
                });
            executing010B.then(onExecutedLLT, onErrorLLT);

            break;
        case 7:
            console.log('7 run');
            var dcommand = "var fnd = false;var latestur ='" + latestur + "'; var latestsite = '" + latestsite + "'; ";
            dcommand += "var spns = document.getElementsByTagName('span');";
            dcommand += "console.log('** A:: ' + latestur.trim());";
            dcommand += "for (var i = 0; i <= spns.length - 1; i++) {";
            dcommand += "if (spns[i].innerHTML.indexOf(latestsite) > -1) {";
            dcommand += "fnd = true;";
            dcommand += 'var tit = "6-" + (i + 1);';
            dcommand += "console.log('kkllicked');document.title = 'foundStep::' + tit;";
			//dcommand += "spns[i].parentElement.parentElement.parentElement.click();";
            
            dcommand += '}}';
            dcommand += "if(fnd==false){document.title = 'go2::7';};";

            doexec = false;

            var executing010B = browser.tabs.executeScript(
                ltid, {
                    code: (checkblocked + dcommand)
                });
            executing010B.then(onExecutedLLT, onErrorLLT);

            break;
        case 8:
            console.log('8 run');
            var dcommand = "var fnd = false;var latestur ='" + latestur + "'; var latestsite = '" + latestsite + "'; ";
            dcommand += "var spns = document.getElementsByTagName('span');";
            dcommand += "console.log('** A:: ' + latestur.trim());";
            dcommand += "for (var i = 0; i <= spns.length - 1; i++) {";
            dcommand += "if (spns[i].innerHTML.indexOf(latestsite) > -1) {";
            dcommand += "fnd = true;";
            dcommand += 'var tit = "7-" + (i + 1);';
            dcommand += "console.log('kkllicked');document.title = 'foundStep::' + tit;";
			//dcommand += "spns[i].parentElement.parentElement.parentElement.click();";
            
            dcommand += '}}';
            dcommand += "if(fnd==false){document.title = 'go2::8';};";

            doexec = false;

            var executing010B = browser.tabs.executeScript(
                ltid, {
                    code: (checkblocked + dcommand)
                });
            executing010B.then(onExecutedLLT, onErrorLLT);

            break;
        //....go 2 page 7
    }
    if (doexec == true) {
        try {
            executing010.then(onExecutedLLT, onErrorLLT);
        } catch (ex) {
            console.log("TTLIndx-Error : " + TTLIndx + " - " + ex.message);
            //console.log("latestPG : " + TTLIndx);
            //console.log("latestROW : " + TTLIndx);
            //console.log("latestTRY : " + TTLIndx);
            //console.log("foundStep : " + TTLIndx);
            //console.log("foundPage : " + TTLIndx);
        }
    }
}
//------------------

var intlf2;
function setasfinishedtab() {
    clearInterval(intlf2);

}

function onExecutedLLTHelp(result) {
    //clearInterval(intTTL);
    //console.log('LLT: We executed in tab 2');
    //TTLIndx++;
    //intTTL = setInterval(FinishKlik, (60000 * 3));
}

function onErrorLLTHelp(error) {
    console.log('Error-LLTHelp: ' + error.message);
    // latestur is not defined
}

function resetwithhelp() {
    resetjust();
   
}
function resetjust() {
    TTLIndx = 0;

    latestPG = 0;
    latestROW = 0;
    latestTRY = 0;
    foundStep = 0;
    foundPage = 0;
    fndel = null;
    forceklikgo = false;
}
function FinishKlik(){
	//clearInterval(intTTL);
	//fndel.parentElement.parentElement.parentElement.click();
    intlf2 = setInterval(setasfinishedtab, (60000 * 30));
//cosole.log('click : '+latestsite);
    var dcommand = "";
    dcommand += "var spns = document.getElementsByTagName('span');";
   // dcommand += "console.log('** A:: ' + latestur.trim());";
    dcommand += "for (var i = 0; i <= spns.length - 1; i++) {";
    dcommand += "if (spns[i].innerHTML.indexOf('"+latestsite+"') > -1) {";
    //dcommand += 'var tit = "1-" + (i + 1);';
    //dcommand += "document.title = 'foundStep::' + tit;";
    dcommand += "spns[i].parentElement.parentElement.parentElement.click();";
    dcommand += '}}';

    doexec = false;

    var executing010B = browser.tabs.executeScript(
        ltid, {
            code: dcommand
        });
    executing010B.then(onExecutedLLTHelp, onErrorLLTHelp);

    //resetjust();
//	runextcit();
}
function onExecutedLLTFin(result) {
  //console.log('LLT: We executed in tab 2');
  //TTLIndx++;
    //clearInterval(intTTL);
  intTTL = setInterval(FinishKlik,(60000 * 3));
}

function onErrorLLTFin(error) {
  console.log('Error-LLTFin: ${error}');
}

function go4click() {
FinishKlik();
    try {
        clearInterval(inklikforce);
    } catch(ex2){}
	drank = latestPG + "-" + latestROW + "-" + foundStep;
	var wtit = "SHf:: founded rank " + drank;
	var executing005 = browser.tabs.executeScript(
				  ltid , {
					code : ("document.title = '" + wtit +"';")
				});
	executing005.then(onExecutedLLTFin, onErrorLLTFin);
	clicksockettab();
}

function reptfunc(){

	

}
//var rptint = setInterval(reptfunc,2500);

//anyrankint = setInterval(function() { getanyrank(latestur); },(60000*3));
var fcosintab;
var dbc;
var citydb;
function readdb(){
	var client = new XMLHttpRequest();
	client.open('GET', '/data.js');
	client.onreadystatechange = function() {
	  dbc = (client.responseText);
	  //citydb = JSON.parse(dbc);
	}
	client.send();
}
readdb();
var dbindx = 0;
function detnextindx(){
	
	
}
//intgetnextt
var tbids = new Array();
var ldtrunexe = 0;
var runexelay = 0;

function saftych(){
var dif = ldtrunexe - (new Date()).getTime();
//ldtrunexe = t2.getTime();
var Seconds_from_T1_to_T2 = dif / 1000;
var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
runexelay = Seconds_Between_Dates;
if(runexelay>0){
	if(runexelay>30){
		runexelay = 0;
		runextcit2((Math.floor(Math.random() * 1000)+100));

	}
}
}
setInterval(saftych,300);

function runextcit2(tbid){
var dif = ldtrunexe - (new Date()).getTime();
ldtrunexe = (new Date()).getTime();
var Seconds_from_T1_to_T2 = dif / 1000;
var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
runexelay = Seconds_Between_Dates;

var fnd=false;
for(var i=0;i<=tbids.length-1;i++){
	if(tbids[i]==tbid){fnd=true;}
}
if(true){
	return;
tbids[tbids.length]=tbid;
console.log("start tab action : "+tbid);
	var discit = detnextindx();
	//clearInterval(intTTL);
	clearInterval(inttabs);
	resetjust();
	latesttit = discit.dkey;
	latesttit = decodeURIComponent(unescape(latesttit));
	console.log(latesttit);
	latestur = decodeURIComponent(unescape(discit.dur));
	latestsite=replaceallstr(latestur,"https://","");
	latestsite=replaceallstr(latestsite,"http://","");
	latestsite=latestsite.split('/')[0];
			
	var creating = browser.tabs.create({
		url:"http://google.de"
	});
	creating.then(onCreatedG, onErrorG);
	//intTTL = setInterval(controllasttab,60000);
	inttabs = setInterval(gotTabs2,(60000*3));
	//console.log(discit.dsite + discit.dkey);
	}

}

function runextcit(tbid){

var dif = ldtrunexe - (new Date()).getTime();
ldtrunexe = (new Date()).getTime();
var Seconds_from_T1_to_T2 = dif / 1000;
var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
runexelay = Seconds_Between_Dates;

var fnd=false;
for(var i=0;i<=tbids.length-1;i++){
	if(tbids[i]==tbid){fnd=true;}
}
if(fnd==false){
tbids[tbids.length]=tbid;
console.log("start tab action : "+tbid);
	var discit = detnextindx();
	//clearInterval(intTTL);
	clearInterval(inttabs);
	resetjust();
	latesttit = discit.dkey;
	latesttit = decodeURIComponent(unescape(latesttit));
	console.log(latesttit);
	latestur = decodeURIComponent(unescape(discit.dur));
	latestsite=replaceallstr(latestur,"https://","");
	latestsite=replaceallstr(latestsite,"http://","");
	latestsite=latestsite.split('/')[0];
			
	var creating = browser.tabs.create({
		url:"http://google.de"
	});
	creating.then(onCreatedG, onErrorG);
	//intTTL = setInterval(controllasttab,60000);
	inttabs = setInterval(gotTabs2,(60000*3));
	//console.log(discit.dsite + discit.dkey);
	}
}
//intTTL = setInterval(controllasttab,(60000*3));
//runextcit();
//dcommand += "console.log('kkllicked');document.title = 'foundStep::' + tit;";
	//		dcommand += "spns[i].parentElement.parentElement.parentElement.click();";

