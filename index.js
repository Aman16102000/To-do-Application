var count=0;

function add()
{
    // cheking if the input is empty or not

    if(document.getElementById("addInput").value=="")
    {
      // if input is empty it will show the model 
     $('#exampleModal').modal('show');

    }
    else
    {

    var list=document.createElement("li");

    list.setAttribute("id",count); // setting count for every li element it helps us at time to find out which element to delete
    list.setAttribute("class","list-group-item list-group-item-primary");

    // setting checkbox in every element in list
    var completeCheckBox=document.createElement("input");
    completeCheckBox.setAttribute("type","checkbox");
    completeCheckBox.setAttribute("style","margin-left:20px;");

    // fetched data from the client and make create a textNode with respect to it
    var fetchedData=document.getElementById("addInput").value;
    var node=document.createTextNode(fetchedData);
    
    // creating remove button to delete selected list element
     var del=document.createElement("BUTTON");
     del.setAttribute("value",count++)
     del.setAttribute("onclick","rem(this)")
     del.setAttribute("type","button");
     del.setAttribute("class","close");
     var sp=document.createElement("span");
     sp.setAttribute("aria-hidden","true");
     var spbtn=document.createTextNode("remove")

     // append all elements with respect to each other
     sp.appendChild(spbtn);
     del.appendChild(sp);
     list.appendChild(node);
     list.appendChild(completeCheckBox);
     list.appendChild(del);

     // code to view list on browser
     var element=document.getElementById("list");
     element.insertBefore(list,element.childNodes[0]);

     // On every succesfull addition in the list the input text value become empty
     document.getElementById("addInput").value="";
    }
}

function rem(objBtn)
{
   // remove selected element in the list
   document.getElementById(objBtn.value).remove();
}