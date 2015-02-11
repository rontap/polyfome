/* Polyfome by Elemential.
 * Based on Polymer By Google
 * version 0.0 - 2014/09/11
 * version 1.0 - 2014/12/20
 */

if (fome.location===undefined) { fome.location=''; }

mostev = new Date().getFullYear(); //mostév
/*
if (fome.theme!=0)
{
document.addEventListener('polymer-ready', function () {
    var navicon = document.getElementById('navicon');
    var drawerPanel = document.getElementById('drawerPanel');
    navicon.addEventListener('click', function () {
        drawerPanel.togglePanel();
    });
});
}*/

colors = ['#e51c23', '#9e9e9e', '#673ab7', '#3f51b5', '#5677fc', '#03a9f4', '#00bcd4', '#009688', '#259b24', '#607d8b', '#ff9800', '#ffeb3b', '#795548'];
fome.var={};


function goto(site) { //navigation have to move later to OWN js
    removeopenmenu();
    switch (site) {

        default: gotoinsite(site);
    }
    paperRipple();
     
}
whereAreWe = 'home';

function gotoinsite(id) {  //navigation
    $('#menuelements>div').removeClass('on');
    $('#menuelements>div').css('display', 'none');
    $('#' + id).css('display', 'block');
    whereAreWe = id;
    setTimeout(function () {

        $('#' + id).addClass('on');
    }, 100);
}

function switchtab(loc, ik, db) { //tab váltáss. loc:hely, ik:melyik legyen, db mennyi van

    $('#' + loc + '-tab').height($('#' + loc + '-tab-' + ik).height());
    for (i = 0; i < db; i++) {
        $('#' + loc + '-tab-' + i).css('opacity', '0');
        switchtab_helper(loc, i);
    }
    setTimeout(function () {
        $('#' + loc + '-tab-' + ik).css('display', 'inline-block');
        $('#' + loc + '-tab-' + ik).css('opacity', '0');
    }, 501);
    setTimeout(function () {
        $('#' + loc + '-tab-' + ik).css('opacity', '1');
    }, 802);
}

function switchtab_helper(loc, i) {
    setTimeout(function () {
        $('#' + loc + '-tab-' + i).css('display', 'none');
    }, 500);
}

function loadimg(id) {
    setTimeout(function () {
        $(id + ' img').css('opacity', 1);
        $(id + ' img').removeClass('load');
    }, 2200)
}

//ripple automatisation 
function paperRipple() {
    for (i = 0; i < $('.card paper-ripple').length; i++) {
        $($('.card paper-ripple')[i]).width($($('.card paper-ripple')[i]).parent().width() + 20)
        $($('.card paper-ripple')[i]).height($($('.card paper-ripple')[i]).parent().height() + 20)
    }
}

function loadchip(loc, i) {
    setTimeout(function () {
        $($(loc + ' .chip .chip-top')[i]).css('opacity', 1);
        $($(loc + ' .chip .chip-top')[i]).css('-webkit-animation', 'none');
        console.log(i);
    }, i * 100 + 1800);

}

function outcollapse(id) {
    $('#' + id).css('max-height', '2000px');
    $('#' + id).addClass('on');
}


//endfunctions
fome.jumpTo = function(call,sec) {
    $('body').removeClass("menu");
    $('core-toolbar').css('background',sec);
    window.location=call;
}

gotoinsite('homex');
if (fome.loc===undefined) {
	fome.loc='';
}
console.log(location);

if (fome.theme==1)
{
$('fome-element').load("http://elemential.net/polyfome/main.html");//betölti az oldalsávot
}
else if (fome.theme==2) {
$('fome-element').load(fome.loc+"scheme.html");//második
}

incllist="";
elementsload=['navname','extratitle','title','logos']
elementsload2=['title'];

setTimeout(function () {
    switchtab('io', 0, 3);
    
    if (fome.theme==1) {  
        for (i=0;i<elementsload.length;i++)
        {
        $('fome-element')[0].innerHTML=$('fome-element')[0].innerHTML.replace('%'+elementsload[i]+'%',fome[elementsload[i]])
        }
        for (i=0;i<fome.incl.length;i++)
        {
            incllist+='<div id="'+fome.incl[i]+'"></div>';
        }	
         $('fome-element')[0].innerHTML=$('fome-element')[0].innerHTML.replace('%includes%',incllist);

        }//1
    else if (fome.theme==2) {
	    for (i=0;i<elementsload.length;i++)
	    {
	    $('fome-element')[0].innerHTML=$('fome-element')[0].innerHTML.replace('%'+elementsload[i]+'%',fome[elementsload[i]])
	    }
    }
	
        
    for (i=0;i<fome.incl.length;i++) {//enter eventstuff
        $("#"+fome.incl[i]).load(fome.location+fome.incl[i]+'.html');
    }
}, 1000);

fome.var.notifycount=0;
fome.notify = function(name,duration,onclick,helptext,helptext_color,helptext_onclick,spec_class) {
        
	a='<paper-toast text="'+name+'" onclick="'+onclick+'"id="fome_notification'+(fome.var.notifycount)+'" class="'+spec_class+'">';
	if (helptext!==undefined){a+='<div style="color:'+helptext_color+';" onclick="'+helptext_onclick+'">'+helptext+'</div>';fome.log('jani');}
	a+='</paper-toast>';
	$('fome-element').append(a);
	setTimeout(function(){
	if (duration===undefined) { duration=3000; }
	window['fome_notification'+fome.var.notifycount].duration=duration;
	window['fome_notification'+fome.var.notifycount].toggle();
	
	fome.var.notifycount++;
	},100);
}/*
fome.isConnected = function() {
      $.ajax({
                url: "http://elemential.net/aTE_A_JO_SZERVERT_HASZNALOD?r" +(Math.round(Math.random() * 100)
               ).done(function(e) {                                               
            statusCode: {
                      404 : function() {return false;}
                        202 : function() {return false;}
                      default: function() {return true;}
                        }
            }
      }
    */
fome.log('POLYFOME 1.1.0 loaded');
