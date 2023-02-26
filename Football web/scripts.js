function setup() 
{
    stop();
}

function start()
{
    document.getElementById("pic1").style["animation-name"] = "first";
    document.getElementById("pic2").style["animation-name"] = "second";
    document.getElementById("ball").style["animation-name"] = "ballanm";
    document.getElementById("btn-start").disabled = true;
    document.getElementById("btn-stop").disabled = false;
}

function stop() 
{
    document.getElementById("pic1").style["animation-name"] = "none";
    document.getElementById("pic2").style["animation-name"] = "none";
    document.getElementById("ball").style["animation-name"] = "none";
    document.getElementById("btn-start").disabled = false;
    document.getElementById("btn-stop").disabled = true;
}