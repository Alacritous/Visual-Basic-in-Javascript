// JavaScript functions wrapped in Visual Basic 6 style syntax
// Started by Alacritous in February 2012
// Why? Why not?
// All the functions behave like their vb counterparts. 
// All the functions can be accessed through the namespace vb
// like vb.chr(65);
// will return an "A"
// this file will occasionally be passed through  http://www.jslint.com/
// to make sure it's okee dokee. 

var vb = vb || {}; //define vb namespace here
//
//string functions
//
vb.trim = function(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g,"");
}
vb.ltrim = function(stringToTrim) {
    return stringToTrim.replace(/^\s+/,"");
}
vb.rtrim = function(stringToTrim) {
    return stringToTrim.replace(/\s+$/,"");
}
vb.strreverse = function(string){
    return string.split("").reverse().join("");
}
vb.mid$ = function(string, start, count) {
    return string.substring(start, start + count);
}
vb.instr = function(string, substring) {
    return string.indexOf(substring)
}
vb.instrrev = function(string, substring) {
    return string.lastIndexOf(substring);
}
vb.chr = function(asciinum) {
    return String.fromCharCode(asciinum);
}
vb.asc = function(string) {
    return string.charCodeAt(0);
}
vb.lcase = function(string){
    return string.toLowerCase();
}
vb.ucase = function(string){
    return string.toUpperCase();
}
vb.replace = function(string,find,newtext){
    newstring = "/" + find + "/gi";
    newstring.replace(/;/gi,"");
  return string.replace( eval(newstring),newtext);
}
//
//number functions
//
vb.abs = function(number){
    return Math.abs(number);
}
vb.hex = function(d, padding) { //returns hexadecimal value from integer input. with optional 0 padding
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }
    return hex.toUpperCase();
}
vb.dec = function(hex){  //returns decimal value from hexadecimal input
   return parseInt(hex,16);
}
vb.val = function(string) {//returns floating point value with decimals.
    return parseFloat(string);
}
vb.intval = function(string) { //returns integer value with no decimals. 
    return parseInt(string,10);
}
//
//array functions
//
vb.split = function(content,delimiter){ //returns array from content divided by delimeter. 
    return content.split(delimiter);
}
//
//date functions
//
vb.date = function(){
    var d = new Date(Date.now());
     return vb.val(d.getMonth())+1 + "/" + d.getDate() + "/" + d.getFullYear()
}
//misc functions
vb.qq = function(string) {//returns string wrapped in double quotes " at both ends. 
    return String.fromCharCode(34) + string + String.fromCharCode(34);
}
// Constants
var vbcrlf = vb.chr(10) + vb.chr(13);
