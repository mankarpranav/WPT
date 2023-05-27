function searchpattern(){
    var str=document.getElementById("str").value;
    var pat=document.getElementById("pattern").value
    //convert string into regular expression
    var patteren=new RegExp(pat,"gi")
    var arr=document.getElementsByName("operation");
    for(var i=0;i<arr.length;i++){
     if(arr[i].checked){
         var v=arr[i].value;
         break;
     }
     }
     switch(v){
         case "search":
             //it will search the pattern and give the position of the first occurance of the pattern
             result="Position :"+str.search(patteren);
             break;
         case "replace":
             newstr=prompt("enter new string")
             //it find and replace all the occurrences of the pattern by new string
             result="new String afte rreplace"+str.replace(patteren,newstr);
             break;
         case "match":
             //it finds all the occurrences of the pattern
             result="all strings"+str.match(patteren);
             break;
         case "test":
             //it return true if patteren found and returns false if not found
             result="pattern exists :  "+patteren.test(str);
             break;

     } 
      document.getElementById("mydiv").innerHTML=result
 }