//string functions
function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g,"");
}
function ltrim(stringToTrim) {
    return stringToTrim.replace(/^\s+/,"");
}
function rtrim(stringToTrim) {
    return stringToTrim.replace(/\s+$/,"");
}
function strreverse(string){
    return string.split("").reverse().join("");
}
function mid$(string, start, count) {
    return string.substring(start, start + count);
}
function instr(string, substring) {
    return string.indexOf(substring)
}
function instrrev(string, substring) {
    return string.lastIndexOf(substring);
}
function chr(asciinum) {
    return String.fromCharCode(asciinum);
}
function asc(string) {
    return string.charCodeAt(0);
}
function lcase(string){
    return string.toLowerCase();
}
function ucase(string){
    return string.toUpperCase();
}


//number functions
function abs(number){
    return Math.abs(number);
}
function hex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }
    return hex.toUpperCase();
}
function dec(hex){
   return parseInt(hex,16);
}
function val(string) {//returns floating point value with decimals.
    return parseFloat(string);
}
function intval(string) { //returns integer value with no decimals. 
    return parseInt(string,10);
}
//array functions
function split(content,delimiter){ //returns array from content divided by delimeter. 
    return content.split(delimiter);
}
//date functions

function date(){
    var now = new Date();
    return now();
}





//misc functions

function qq(string) {
    return String.fromCharCode(34) + string + String.fromCharCode(34);
}
