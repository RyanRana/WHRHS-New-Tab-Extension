
function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    if(s < 10){
        s = "0" + s;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(h < 10){
        h = "0" + h;
    }
    if(h < 12){
        s = s + " am";
    }
    else if(h == 12){
        s = s + " pm";
    }
    else if(h ==24){
        h = 12;
        s = s+ " am"
    }
    else{
        h = h - 12;
        s = s + " pm";
    }

    if(h == 00){
        h = 12;
    }
    var div = document.getElementById('time');
    div.textContent = h + ":" + m + ":" + s;
}


time();
setInterval(time, 1000);
