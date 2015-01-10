//splashscreen
$("fome-element").css('opacity','0.01');
$('splash-element').load("http://elemential.net/polyfome/splash.html");
setTimeout(function(){
    $("fome-element").css('opacity','0.2');
},600);

fome.resolve = function(){
     setTimeout(function () {
                    $("fome-element").css('opacity','1');
                    $('#ins').css('bottom','100%');
                    $('#fomeins_hr').css('bottom','-50px');
                    $('#ins').css('bottom','100%');
                    $('#ins').css('color','transparent');
                    $("core-drawer-panel").css('opacity','1');
                    setTimeout(function(){
                        $("splash-element").css('display','none');
                    },500)
                }, 1000);
    
};
fome.unresolve = function(){
     setTimeout(function () {
         $("splash-element").css('display','block');
         $("core-drawer-panel").css('opacity','.2');          
         setTimeout(function(){
             $("fome-element").css('opacity','.2');
                    $('#ins').css('bottom','0%');
                    $('#ins').css('color',fome.primaryColor);
                    $('#fomeins_hr').css('bottom','0px');
                    $('#ins').css('bottom','0%');
                    
                    
         },100);
                  
                }, 100);
    
}
//2DO : kikapcsolható