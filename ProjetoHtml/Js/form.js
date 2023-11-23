function validateForm(){
    var x = document.forms["myForm"]["campo_1"].value;
    if(x==null||x==""){
        alert("primer campo vacio")
        return false;
    }
}