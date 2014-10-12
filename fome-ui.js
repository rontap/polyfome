coreit="";
for (i=0;i<fome.link.length;i++)
{
    coreit+='<core-item label="'+fome.link[i]+'"   onclick="goto(\''+fome.incl[i]+'\')"></core-item>';
    console.log(fome.incl[i]);
}

if (fome.primaryColor===undefined) {fome.primaryColor="#48f";}

setTimeout(function(){
mainheader.style.background=fome.primaryColor;
navheader.style.background=fome.primaryColor;
$('core-menu').append(coreit);
$('html > head').append(
	$('<style>core-menu core-item.core-selected {border-right: 3px solid '+fome.primaryColor+' !important;}</style>')
	)
},100)//hakész

