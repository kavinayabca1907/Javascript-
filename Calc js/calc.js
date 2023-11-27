function display(value){

    document.getElementById('txtarea').value+=value
}

function calculate(){
    var value=document.getElementById('txtarea').value
    var answer= eval(value)
    document.getElementById('txtarea').value=answer
}

function clr(){
   document.getElementById('txtarea').value = ''
}