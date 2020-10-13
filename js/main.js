function buildBeforeBegin(uniqueId, refTag, tag)
{
  //General function to build an HTML element using insertAdjacentElement("beforebegin")
  let div=document.createElement(tag);
  
  div.id=uniqueId;
  
  refTag.insertAdjacentElement("beforebegin", div);

  return(div);
}

function buildBeforeEnd(uniqueId, refTag, tag)
{
  //General function to build an HTML element using insertAdjacentElement("beforeend")
  let div=document.createElement(tag);
  
  div.id=uniqueId;
  
  refTag.insertAdjacentElement("beforeend", div);

  return(div);
}

function buildAfterBegin(uniqueId, refTag, tag)
{
  //General function to build an HTML element using insertAdjacentElement("afterbegin")
  let div=document.createElement(tag);
  
  div.id=uniqueId;
  
  refTag.insertAdjacentElement("afterbegin", div);

  return(div);
}

function buildAfterEnd(uniqueId, refTag, tag)
{
  //General function to build an HTML element using insertAdjacentElement("afterend")
  let div=document.createElement(tag);
  
  div.id=uniqueId;
  
  refTag.insertAdjacentElement("afterend", div);

  return(div);
}

function cleanContainer(){
  let pContainer = document.getElementById("textId");
  if (pContainer!=null){
    pContainer.innerHTML="";
  }else{
    alert("Container not found");
  }
}

function changeContainer(){
  let pContainer = document.getElementById("textId");
  let temptext = "";

  if (pContainer!=null){
    switch (iCurrentBook){
      case 0:
        iCurrentBook = 1;
        break;
      case 1:
        iCurrentBook = 2;
        break;
      case 2:
        iCurrentBook = 0;
        break;
      default:
        alert("DEFAULT???");
        break;
    }

    temptext = aBooks[iCurrentBook].Text;
    pContainer.innerHTML="";
    pContainer.innerHTML=temptext;
  }else{
    alert("Container not found");
  }
}

let dBody=null;//Body
let dMainFrame= null; //MainFrame - son of body
let dHeaderFrame= null; //Son of mainFrame
let dHeadCleanBtn= null; //Button son of header frame
let dHeadChangeBtn= null; //Button son of header frame
let dContainerFrame=null; //Contain the text
let aHeadButtons=[null,null]; //array of button
let pText=null; //text Container
let iCurrentBook=0;   //current book index

//Create MainFrame
dBody=document.querySelector("body");
dBody.classList.add("backGray");
dMainFrame = buildAfterBegin("frameId",dBody,"div");
dMainFrame.classList.add("backWhite");

//Create header
dHeaderFrame = buildAfterBegin("headFrameId",dMainFrame,"div");
dHeaderFrame.classList.add("backBlue");

//Create Buttons
for (let i=0;i<aHeadButtons.length;i++){
  let tempButtonId="headButtonId_"+i;
  aHeadButtons[i]=buildAfterBegin(tempButtonId,dHeaderFrame,"button");
  aHeadButtons[i].classList.add("inLineBlock");
  aHeadButtons[i].classList.add("genButtons");
  aHeadButtons[i].textContent = aHButtonText[i];
}

aHeadButtons[0].onclick=function(event)
    {
      cleanContainer();
    }
  aHeadButtons[1].onclick=function(event)
  {
    changeContainer();
  }

//Create Container
dContainerFrame=buildAfterEnd("containerId",dHeaderFrame,"div");
dContainerFrame.classList.add("backRed");

pText=buildBeforeEnd("textId",dContainerFrame,"p");
pText.classList.add("backgreen");
pText.textContent = aBooks[iCurrentBook].Text;
