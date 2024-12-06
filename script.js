// JavaScript source code
var inp = document.getElementById("inp");
function clearall()
{
    inp.value = "";
}
function delsing()
{
    inp.value = inp.value.toString().slice(0,-1);
}
function appendAtEnd(input)
{
    inp.value += input;
}
function calculate()
{
   try{
     inp.value = eval(inp.value);
   }
   catch(error)
   {
        inp.value = "Input error !";
   }

   
    
   
}


