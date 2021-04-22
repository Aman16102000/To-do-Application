var count=0;
var chosedLi="";
function addTask()
{
  let input =document.getElementById("addInput").value;
  // if input is empty
  if(input=="")
  {
    document.getElementById("modal_body").innerHTML="Write something to add...";
    $('#exampleModal').modal('show');
  }
  else
  {
    let li=document.createElement("li");
    li.setAttribute("id",count);// unique id of every list element
    li.setAttribute("class","list-group-item list-group-item-primary");
    
    //column 2
    var divMain=document.createElement("div");
    var divRow=document.createElement("div");
    var divCol=document.createElement("div");
    var p1=document.createElement("p");
    
    p1.setAttribute("style","word-wrap:break-word;")
    divCol.setAttribute("class","col-6 col-sm-6");
    divRow.setAttribute("class","row");
    let divColTextNode=document.createTextNode(input);
    p1.appendChild(divColTextNode);
    divCol.appendChild(p1);
    // end of column 2 

    // column 1
    var divCol2=document.createElement("div");
    var checkbox=document.createElement("input");
    var checkBoxId=count+"checkBox";
    divCol2.setAttribute("class","col-2 col-sm-2")
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("id",checkBoxId);
    checkbox.setAttribute("onclick","isChecked(this)");
    checkbox.setAttribute("value",count);
    divCol2.appendChild(checkbox);
    //end of column

    // column 3
    var divCol3=document.createElement("div");
    var remove=document.createElement("button");

    divCol3.setAttribute("class","col-2 col-sm-2");
    remove.setAttribute("type","button");
    remove.setAttribute("class","btn");
    remove.setAttribute("value",count);
    remove.setAttribute("style","background-color:blue; color:white");
    remove.setAttribute("onclick","deleteLi(this)");
    var deleteLiTextNode=document.createTextNode("Delete Task");
    remove.appendChild(deleteLiTextNode);
    divCol3.appendChild(remove);

    // column 4
    var divCol4=document.createElement("div");
    var edit=document.createElement("button");
    divCol4.setAttribute("class","col-2 col-sm-2");
    edit.setAttribute("class","btn");
    edit.setAttribute("style","background-color:blue; color:white;");
    edit.setAttribute("value",count);
    edit.setAttribute("onclick","edit(this)")
    var editTextNode=document.createTextNode("Edit");
    edit.appendChild(editTextNode);
    divCol4.appendChild(edit);


    divRow.appendChild(divCol2);
    divRow.appendChild(divCol);
    divRow.appendChild(divCol4);
    divRow.appendChild(divCol3);
    divMain.appendChild(divRow);
    li.appendChild(divMain);


    let list=document.getElementById("list");
    list.insertBefore(li,list.childNodes[0]);

    // On every succesfull addition in the list the input text value become empty
    document.getElementById("addInput").value="";
    count++;
   
  }
  chosedLi="";
}

function update()
{
  var changedText=document.getElementById("addInput").value;
  if(chosedLi=="")
  {
    document.getElementById("modal_body").innerHTML="First choose then update";
   $('#exampleModal').modal('show');
  }
  else if(changedText=="")
  {
    document.getElementById("modal_body").innerHTML="Write something to update..";
   $('#exampleModal').modal('show');
  }
  else
  {
  chosedLi[1].firstChild.textContent=changedText;
  document.getElementById("addInput").value="";
  chosedLi="";
  }
}
function edit(obj)
{
  //console.log(obj);
  var  chosedBtn=document.getElementById(obj.value);
  chosedLi=chosedBtn.firstElementChild.firstElementChild.childNodes;
  var textInP=chosedLi[1].firstChild.textContent;
  document.getElementById("addInput").value=textInP;
}

function deleteLi(obj)
{
  document.getElementById(obj.value).remove();
}

function isChecked(val)
{
  let checkbox=document.getElementById(val.id);

  if(checkbox.checked==true)
  {
    document.getElementById(val.value).style.backgroundColor="green";
    document.getElementById(val.value).style.color="white";

  }
  else
  {
    document.getElementById(val.value).style.backgroundColor="white";
    document.getElementById(val.value).style.color="black";
  }
}

