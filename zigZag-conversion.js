//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows
//P   A   H   N
//A P L S I I G
//Y   I   R
//And then it should read line by line: "PAHNAPLSIIGYIR"
//Below is the code for the problem

var convert = function(s,numRows){
    if(numRows === 1 || s.length<0)return s;

    let direction = false;
    let count = 0;
    let arr=new Array[numRows].fill("");
    for (let i=0;i<s.length;i++){
        let curr =s[i];
        arr[count] += curr;
        if(count === 0 || count>=numRows-1)direction = !direction;
        direction ? count++ : count--;
    }
    return arr.join("");
};