var count=0;

function add()
{
    if(document.getElementById("addInput").value=="")
    alert("Write something...")
    else
    {
    var list=document.createElement("li");

    list.setAttribute("id",count);
    list.setAttribute("class","list-group-item list-group-item-primary");
    var completeCheckBox=document.createElement("input");

    completeCheckBox.setAttribute("type","checkbox");
    completeCheckBox.setAttribute("style","margin-left:20px;");
    var fetchedData=document.getElementById("addInput").value;

    var node=document.createTextNode(fetchedData);
    
     var del=document.createElement("BUTTON");

     del.setAttribute("value",count++)

     del.setAttribute("onclick","rem(this)")
     del.setAttribute("type","button");
     del.setAttribute("class","close");
     var sp=document.createElement("span");
     sp.setAttribute("aria-hidden","true");
  //   sp.setAttribute("style","color:black;")
     var spbtn=document.createTextNode("remove")
     sp.appendChild(spbtn);

     del.appendChild(sp);

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