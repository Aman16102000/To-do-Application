var count=0;

function add()
{
    if(document.getElementById("addInput").value=="")
    alert("Write something...")
    else
    {
    var list=document.createElement("li");

    list.setAttribute("id",count);
    list.setAttribute("class","liDesign");
    list.setAttribute("style","font-size:18px");
    var completeCheckBox=document.createElement("input");

    completeCheckBox.setAttribute("type","checkbox");
    completeCheckBox.setAttribute("class","checkBoxDesign");
    var fetchedData=document.getElementById("addInput").value;

    var node=document.createTextNode(fetchedData);
    
     var del=document.createElement("BUTTON");

     del.setAttribute("value",count++)

     del.setAttribute("onclick","rem(this)")
     del.setAttribute("class","btnDesign");

     var deleteBtn=document.createTextNode("remove")

     del.appendChild(deleteBtn);

     list.appendChild(node);
     list.appendChild(completeCheckBox);
     list.appendChild(del);
     var element=document.getElementById("list");
     element.appendChild(list);
     document.getElementById("addInput").value="";
    }
}

function rem(objBtn)
{
   document.getElementById(objBtn.value).remove();
}