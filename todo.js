var arr=[];


function Add(){
    var input3= document.getElementById("input3").value;
     var element= document.createElement('li');
     var textNode= document.createTextNode(input3);
     var element2= document.createElement('span');
     var element3= document.createElement('span');
     element3.appendChild(textNode);
     element3.className="movie";
     element.appendChild(element3);
     var textNode2= document.createTextNode('delete');
     element2.className='delete';
     element2.appendChild(textNode2);
     element2.addEventListener('click',function(){
         console.log(this.parentNode.parentNode.removeChild(this.parentNode));
         
     });
    //  element.className='movie';
     element.appendChild(element2);    
    //  element.appendChild(textNode);   
     document.getElementById('middle').appendChild(element);
}
function hide()
{
  
    var hide=document.getElementById('middle');
    console.log(hide.style.display)
    if(hide.style.display==="none")
    { 
        hide.style.display="block";
        
    }
    else if ( hide.style.display==="block"){
        hide.style.display="none"    
}
}
function search()
{
  

    var search= document.getElementById("search").value.toUpperCase();
    var list =document.getElementsByClassName("movie");  
    for(var i=0;i<list.length;i++){
        
       var check=list[i].textContent;

        
        if(check.indexOf(search)>-1)
        {
         list[i].parentNode.style.display="";
        }
        else {
            list[i].parentNode.style.display="none";
        }
    }   
}
