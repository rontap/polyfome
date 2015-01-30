//this code is purely for main polyfome processes
//NO design-related stuff may be here!
//also: lot of stuff is moved here from fome.js

var fome;   //if not specified
if (fome===undefined) {
    fome={};
}

fome.page = {
	'reload' : function(site) {
		window[site].innerHTML="";
		$('#'+site).load(fome.location+site+".html");
		fome.log(site+' reloaded');
	},
    'open' : function(site,name,hash) {
        window.open(site +'#'+hash,name,"width=980 height=650");
    }
};
fome.tryit = function(hash) {
    window.open('http://elemential.net/polydome/tryit.html#'+hash,'Rontap TryIt',"width=980 height=650");
}
fome.devmode = function(call) {
    if (call===undefined) {return fome.devmode.isActivated};
    if (call) {fome.devmode.activate();}
    else {fome.devmode.deActivate();}
}
fome.devmode.isActivated=true;//default active while developing

fome.devmode.activate = function() {
    fome.devmode.isActivated=true;
}
fome.devmode.deActivate = function() {
    fome.devmode.isActivated=false;
}


fome.log = function(log) {
    if (fome.devmode()) {
        console.log(log);
    }
    fome.log.history[this.length]
}
fome.log.history=[];

//METHANE 
fome.packages = {
    'markdown' : {
        'htmls' : ["includes/markdown.html"],
        'jss' : [""]
    }
}
polyfomeLoadPackages=fome.include; //originally you give fome.include a value. but later you have to call it as a funcion
fome.include = function(what) {
    if (typeof what == "object")
    {
        for (i=0;i>what.length;i++) {
            polyfomeInnerInclude(what[i]);
        }
    }
    else {
        polyfomeInnerInclude(what);
        fome.log("hui")
    }
}
function polyfomeInnerInclude(call) {//this does the actual work. background illuminati
    a=""
    for (i=0;i<fome.packages[call].htmls.length;i++)
    {
        a+="<link rel='import' href='"+fome.packages[call].htmls[this.length]+"'>"
    }
       for (i=0;i<fome.packages[call].jss.length;i++)
    {
        a+="<script src='"+fome.packages[call].jss[this.length]+"'></script>"
    }
    console.log(a);
    document.body.innerHTML+=a;
} 

fome.include(polyfomeLoadPackages);//load
polyfomeLoadPackages="[DO NOT USE]"