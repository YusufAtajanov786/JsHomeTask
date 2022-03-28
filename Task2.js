var arr = ["Saab" , "Volvo", "BMV"];

function add(name){
    var cnt = 0;
    while(arr[cnt]!=null){
        cnt++;
    }
    arr[cnt] = name;
}

function spliceMNVtoVolvo(){
    var cnt = 0;
    while(arr[cnt]!="Volvo"){
        cnt++;
    }
    arr[cnt] += bmv;
} 

arr[0] = "GM";


var bmv = arr.pop();
add("Audi");

spliceMNVtoVolvo();