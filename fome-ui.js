
if (fome.theme==1)
{
    //1 open submenu
function removeopenmenu() {
    $('.submenu').removeClass('open');
}
function swsubmenu(call) {
    if ($($('.submenu')[call]).hasClass('open')) { $($('.submenu')[call]).removeClass('open');  }
    else { $($('.submenu')[call]).addClass('open'); }
}


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

coreit="";
submenucount=0;
for (i=0;i<fome.link.length;i++)
{
    if (typeof(fome.link[i])=='object')
    {  
        coreit+='<core-item label="'+fome.link[i][0]+'"  class="mainmenu" onclick="swsubmenu('+submenucount+');"></core-item><span class="submenu">';
        for (j=1;j<fome.link[i].length;j++)
        {
             coreit+='<core-item  label="'+fome.link[i][j]+'" ></core-item>';
        }
        coreit+="</span>"
        submenucount++;
    }
    else {
       coreit+='<core-item label="'+fome.link[i]+'"   onclick="goto(\''+fome.incl[i]+'\')"></core-item>';
    console.log(fome.incl[i]);
    }
}

if (fome.primaryColor===undefined) {fome.primaryColor="#48f";}

setTimeout(function(){
mainheader.style.background=fome.primaryColor;
navheader.style.background=fome.primaryColor;
$('core-menu').append(coreit);
$('html > head').append(
	$('<style>core-menu core-item.core-selected {border-right: 3px solid '+fome.primaryColor+' !important;}</style>')
	)
},190)//hakész

}//fulif