var count=0;

function add()
{
    // cheking if the input is empty or not

    if(document.getElementById("addInput").value=="")
    {
      // if input is empty it will show the model 
      document.getElementById("modal_body").innerHTML="Write something to add...";

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
    var spanNode=document.createElement("span");
    var node=document.createTextNode(fetchedData);
    spanNode.appendChild(node);
    
    // creating remove button to delete selected list element
     var del=document.createElement("BUTTON");
     del.setAttribute("value",count);
     del.setAttribute("onclick","rem(this)");
     del.setAttribute("type","button");
     del.setAttribute("class","close");
     var sp=document.createElement("span");
     sp.setAttribute("aria-hidden","true");
     var spbtn=document.createTextNode("remove")

 
     // edit button
     var edit=document.createElement("BUTTON");
     edit.setAttribute("value",count);
     edit.setAttribute("type","button")
     edit.setAttribute("class","btn")
     edit.setAttribute("style","background-color:blue; margin-left:50px; color:white;")
     edit.setAttribute("onclick","edit(this)");
     var editNode=document.createTextNode("Edit");
     edit.appendChild(editNode);

     // append all elements with respect to each other
     sp.appendChild(spbtn);
     del.appendChild(sp);
     list.appendChild(spanNode);
     list.appendChild(completeCheckBox);
     list.appendChild(edit);
     list.appendChild(del);

     

     // code to view list on browser
     var element=document.getElementById("list");
     element.insertBefore(list,element.childNodes[0]);

     // On every succesfull addition in the list the input text value become empty
     document.getElementById("addInput").value="";
     count++;

     // abled update button after first add in the list
     document.getElementById("update").removeAttribute("disabled");
    }

}

function rem(objBtn)
{
   // remove selected element in the list
   console.log(objBtn);
   document.getElementById(objBtn.value).remove();
}
var input="";
function edit(objBtn)
{
  console.log(objBtn);
  input=document.getElementById(objBtn.value);
  console.log(input);
  document.getElementById("addInput").value=input.firstElementChild.textContent;

  // var newNode=document.getElementById("addInput").value;
  // input.firstElementChild.textContent=newNode;
//  console.log(list.childNodes[objBtn.value]);
}

function update()
{
  if(document.getElementById("addInput").value=="" || input=="")
  {
    // if input is empty it will show the model 
    document.getElementById("modal_body").innerHTML="First choose then Update";
   $('#exampleModal').modal('show');

  }
  else{
    var newNode=document.getElementById("addInput").value;
   input.firstElementChild.textContent=newNode;

   document.getElementById("addInput").value="";

   // reset the edit click
   input="";
  }
}