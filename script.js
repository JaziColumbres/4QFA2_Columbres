function run(){
    x=document.getElementById("fnum").value;
    y=document.getElementById("enum").value;
    var i, ii;
    var a=isNaN(x);
    var b=isNaN(y);

    if(x<2 || y<2){
        alert("Please enter a value between 2 and 10.");
        document.getElementById('fnum').value="";
        document.getElementById('enum').value="";
    }else if(x>10 || y>10){
        alert("Please enter a value between 2 and 10.");
        document.getElementById('fnum').value="";
        document.getElementById('enum').value="";
    }else if(a==true || b==true){
        alert("Please enter numbers only.");
        document.getElementById('fnum').value="";
        document.getElementById('enum').value="";
    }else{
        document.getElementById("reset").disabled=false;
        document.getElementById("fnum").disabled=true;
        document.getElementById("enum").disabled=true;
        document.getElementById("go").disabled=true;
        var table='<table border=1>';
        for(i=1 ; i<=x ; i++){
            table+='<tr>';
            for(ii=1 ; ii<=y ; ii++){
                table+='<td>'+i*ii;
            }
        }
        document.getElementById('table').innerHTML=table;
    }
}

function reset(){
    location.reload();
}