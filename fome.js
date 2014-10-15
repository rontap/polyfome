/* Polyfome by Elemential.
 * Based on Polymer By Google
 * version 0.0 - 2014/09/11
 */

if (fome.location===undefined) { fome.location=''; }



mostev = new Date().getFullYear(); //mostév

document.addEventListener('polymer-ready', function () {
    var navicon = document.getElementById('navicon');
    var drawerPanel = document.getElementById('drawerPanel');
    navicon.addEventListener('click', function () {
        drawerPanel.togglePanel();
    });
});

colors = ['#e51c23', '#9e9e9e', '#673ab7', '#3f51b5', '#5677fc', '#03a9f4', '#00bcd4', '#009688', '#259b24', '#607d8b', '#ff9800', '#ffeb3b', '#795548'];

function wayout() {
    for (i = document.getElementsByTagName('core-menu')[0].getElementsByTagName("core-item").length; i >= 0; i--) {

        wayfunction(i);

    }
}

function wayfunction(i) {
    setTimeout(function () {
        console.log(i);
        document.getElementsByTagName('core-menu')[0].getElementsByTagName("core-item")[i].style.marginLeft = "-256px";
        document.getElementsByTagName('core-menu')[0].getElementsByTagName("core-item")[i].style.border = "none";
    }, (i * 2) * 10);
}

function goto(site) {
    removeopenmenu();
    switch (site) {

        default: gotoinsite(site);
    }
    paperRipple();
     
}
whereAreWe = 'home';

function gotoinsite(id) {
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

function removeopenmenu() {
    $('.submenu').removeClass('open');
}
function swsubmenu(call) {
    if ($($('.submenu')[call]).hasClass('open')) { $($('.submenu')[call]).removeClass('open');  }
    else { $($('.submenu')[call]).addClass('open'); }
}



fome.page = {
	'reload' : function(site) {
		window[site].innerHTML="";
		$('#'+site).load(fome.location+site+".html");
		console.log(site+' reloaded');
	}
};


//endfunctions

goto('homex');

console.log(location);
$('fome-element').load("http://elemential.net/polyfome/main.html");//betölti az oldalsávot

incllist="";
elementsload=['navname','extratitle','title','logos']
setTimeout(function () {
    switchtab('io', 0, 3);
    
    for (i=0;i<elementsload.length;i++)
    {
    $('fome-element')[0].innerHTML=$('fome-element')[0].innerHTML.replace('%'+elementsload[i]+'%',fome[elementsload[i]])
    }
    for (i=0;i<fome.incl.length;i++)
    {
        incllist+='<div id="'+fome.incl[i]+'"></div>';
    }
     $('fome-element')[0].innerHTML=$('fome-element')[0].innerHTML.replace('%includes%',incllist);
    
    for (i=0;i<fome.incl.length;i++) {//enter eventstuff
        $("#"+fome.incl[i]).load(fome.location+fome.incl[i]+'.html');
    }
}, 1000);
