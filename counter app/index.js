let count=0;

document.getElemenentById("decreasebtn").onclick=function(){
    count-=1;
    document.getElementById("countlabel").innerHTML=count;
}
document.getElemenentById("resetbtn").onclick=function(){
    count=0;
    document.getElementById("countlabel").innerHTML=count;
}
document.getElemenentById("increasebtn").onclick=function(){
    count+=1;
    document.getElementById("countlabel").innerHTML=count;
}

