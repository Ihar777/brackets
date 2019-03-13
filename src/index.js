module.exports = function check(str, bracketsConfig) {
    
    let start = '', end = '', matches = []; 
    for(let k=0; k<bracketsConfig.length; k++){
        if(bracketsConfig[k][0] == bracketsConfig[k][1]){
            matches.push(bracketsConfig[k][1]); }
        start = start + bracketsConfig[k][0].toString();
        end = end + bracketsConfig[k][1].toString();  } 
    let arr = [], check = [false, false], ctrl = -1, result = true;
    for(let j=0; j<=str.length; j++) {
        if(matches.indexOf(str[j]) >=0){
            ctrl = matches.indexOf(str[j]);
            if(start.indexOf(str[j]) >= 0 && !check[ctrl]){
                arr.push(str[j]);
                check[ctrl] = true;
            } else if(end.indexOf(str[j]) >= 0){
                if(arr.length == 0){ result = false; break; } else if
                (start.indexOf(arr[arr.length-1])!=end.indexOf(str[j])){
                    result = false; break; } else {
                        check[ctrl] = false; arr.pop(); }
                } } else { 
                if(start.indexOf(str[j]) >= 0){ arr.push(str[j]); } else if
                (end.indexOf(str[j])>=0){
                    if(arr.length == 0){ result=false; break; } else if
                    (start.indexOf(arr[arr.length-1])!=end.indexOf(str[j])){
                result=false; break; } else { arr.pop(); }
}}} return result; } 
