/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */

document.title = "Javascript Calculator";
var myDiv = document.getElementById("calculatorStuff");

var header = document.createElement("H1");
var headText = document.createTextNode("JavaScript Calculator");
header.appendChild(headText);
myDiv.appendChild(header);

var n1 = document.createElement("INPUT");
n1.setAttribute("type", "number");
n1.setAttribute("value", 0);
n1.setAttribute("id", "n1");
//document.body.appendChild(n1);

var operator = document.createElement("SELECT");
operator.setAttribute("id", "operators");
//document.body.appendChild(operator)

myDiv.appendChild(n1);
myDiv.appendChild(operator);

var add = document.createElement("option");
add.setAttribute("value", "+");
addTxt = document.createTextNode("+");
add.appendChild(addTxt);
var subtract = document.createElement("option");
subtract.setAttribute("value", "-");
subTxt = document.createTextNode("-");
subtract.appendChild(subTxt);
var multiply = document.createElement("option");
multiply.setAttribute("value", "*");
multTxt = document.createTextNode("*");
multiply.appendChild(multTxt);
var divide = document.createElement("option");
divide.setAttribute("value", "/");
divTxt = document.createTextNode("/");
divide.appendChild(divTxt);
var mod = document.createElement("option");
mod.setAttribute("value", "%");
modTxt = document.createTextNode("%");
mod.appendChild(modTxt);
var power = document.createElement("option");
power.setAttribute("value", "**");
powTxt = document.createTextNode("**");
power.appendChild(powTxt);
operator.appendChild(add);
operator.appendChild(subtract);
operator.appendChild(multiply);
operator.appendChild(divide);
operator.appendChild(mod);
operator.appendChild(power);


var n2 = document.createElement("INPUT");
n2.setAttribute("type", "number");
n2.setAttribute("value", 0);
n2.setAttribute("id", "n2");
//document.body.appendChild(n2);

var compute = document.createElement("BUTTON");
var text = document.createTextNode("Compute");
compute.appendChild(text);

myDiv.appendChild(n2);
myDiv.appendChild(compute);

var colorObj = document.createElement("INPUT");
colorObj.setAttribute("type", "color");
colorObj.setAttribute("value", "#009900")
colorObj.setAttribute("id", "color")
myDiv.appendChild(colorObj);


//var result = document.createElement("P");
//result.setAttribute("id", "resultsP");
//var resultText = document.createTextNode("");
//result.setAttribute("id", "resultsT");
//document.body.appendChild(result);

compute.onclick =function calc(){
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    var oper = document.getElementById("operators").value;
    var c = document.getElementById("color").value;

    if(oper == "+")
    {
        if(isNaN(num1) || isNaN(num2)) {
            resultText = document.createTextNode("There was an error!");
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = "red";
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }
        else {
            var resultText = document.createTextNode(num1+num2);
    //        if (result.hasChildNodes()) {
    //            result.removeChild(result.childNodes[0])
    //        }
            var answer = document.createElement("div");
            answer.setAttribute("id", "answers");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = c;
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }
//        document.body.appendChild(result);

    }
    if(oper == "-")
    {

        if(isNaN(num1) || isNaN(num2)) {
            resultText = document.createTextNode("There was an error!");
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = "red";
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }
        else {
            resultText = document.createTextNode(num1-num2);
    //        if (result.hasChildNodes()) {
    //            result.removeChild(result.childNodes[0]);
    //        }
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = c;
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }
//        document.body.appendChild(result);
    }
    if(oper == "*")
    {
        if(isNaN(num1) || isNaN(num2)) {
            resultText = document.createTextNode("There was an error!");
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = "red";
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }
        else {
            resultText = document.createTextNode(num1*num2);
        //        if (result.hasChildNodes()) {
        //            result.removeChild(result.childNodes[0]);
        //        }
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = c;
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }
//        document.body.appendChild(result);
    }
    if(oper == "/")
    {
        if(num2 == 0 || isNaN(num1) || isNaN(num2)) {
            resultText = document.createTextNode("There was an error!");
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = "red";
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }
        else {
            resultText = document.createTextNode(num1/num2);
    //        if (result.hasChildNodes()) {
    //            result.removeChild(result.childNodes[0]);
    //        }
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = c;
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
    //        document.body.appendChild(result);
        }
    }
    if(oper == "%")
    {
        if(num2 == 0 || isNaN(num1) || isNaN(num2)) {
            resultText = document.createTextNode("There was an error!");
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = "red";
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }
        else {
            resultText = document.createTextNode(num1%num2);
    //        if (result.hasChildNodes()) {
    //            result.removeChild(result.childNodes[0]);
    //        }
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = c;
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }
    }
    if(oper == "**")
    {
        if(isNaN(num1) || isNaN(num2)) {
            resultText = document.createTextNode("There was an error!");
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = "red";
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }
        else {
            resultText = document.createTextNode(num1**num2);
    //        if (result.hasChildNodes()) {
    //            result.removeChild(result.childNodes[0]);
    //        }
            var answer = document.createElement("div");
            answer.onclick = function removeDiv(){
                answer.remove();
            }
            answer.style.background = c;
            answer.style.color = "white";
            answer.style.fontfamily = 'helvetica neue';
            answer.style.letterspacing = '1px';
            answer.style.align = "center";
            answer.style.padding = "3px 10px";
            answer.style.margin = "10px";
            answer.style.borderradius = "10px";
            answer.style.borderwidth = "2px";
            answer.style.borderstyle = 'solid';
            answer.appendChild(resultText);
            document.body.insertBefore(answer, document.body.childNodes[2]);
        }

//        document.body.appendChild(result);
    }


}





//document.body.appendChild(n1)
//<input type="numbers" id="n1"/>
//<input type="numbers" id="n2"/>
//
//<select id="operators">
//    <option value="+">+</option
//    <option value="-">+</option
//    <option value="/">+</option
//    <option value="*">+</option
//</select>
//
//<input type="numbers" id="result"/>
//<button onclick="calc()"
