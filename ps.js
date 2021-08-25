// 

let $button1 = document.getElementById("button1");
let $button2 = document.getElementById("button2");
let $psconsole = document.getElementById("psconsole");
let $psdegital = document.getElementById("psdegital");

reset_styles = function(){
    $button1.classList.remove("active");
    $button2.classList.remove("active");
    $psconsole.classList.remove("active");
    $psdegital.classList.remove("active");
};

$button1.addEventListener("click",function(){
    reset_styles();
    if (this.classList.toggle("active")){
        $psconsole.classList.toggle("active");
    }
});
$button2.addEventListener("click",function(){
    reset_styles();
    if (this.classList.toggle("active")){
        $psdegital.classList.toggle("active");
    }
});

$button1.classList.toggle("active");
$psconsole.classList.toggle("active");


