function gestisciClick(e)
{
  console.log(e);
  if (e.type === "click"){
    console.log(e.target.nodeName);
    let targetId= e.target.nodeName.substring(0, 2);
    if(targetId=="TD"){

      if (e.target.classList.contains("backGray")){
        e.target.className="backRed";
        if (e.target.classList.contains("backRed")){
          console.log("Set to red");
        }
      }else{
        e.target.className="backGray";
        if (e.target.classList.contains("backGray")){
          console.log("Set to Gray");
        }
      }
     
      console.log("click on TD");
    }
    else{
      console.log("Non hai fatto click su un TD")
    }  
  }else{
    console.log("it is not a click");
  }
}



//set the path to download json file
let path="https://my-json-server.typicode.com/typicode/demo/db";

//Execute the fetch
fetch(path)
.then(function(response)
{
  //As soon as the server answers, we verify the response
  console.log("response.ok: "+response.ok);
  console.log("response.redirected: "+response.redirected);
  console.log("response.status: "+response.status);
  console.log("response.statusText: "+response.statusText);
  console.log("response.type: "+response.type);
  console.log("response.url: "+response.url);

  if(response.ok)
  {
    //if answer is ok get the json data
    let jsonPromise=response.json();
    console.log("Get the data with jsonPromise: "+jsonPromise);
    //Return the promise object to chain the fetch with another promise
    return jsonPromise;
  }else{
    alert("Error in fetching data");
  }
})
.then(function(jsonObject)
{
  //Il contenuto remoto.
  console.log("JSON.stringify(jsonObject): "+JSON.stringify(jsonObject));
  
  buildTables(jsonObject.posts)
  buildTables(jsonObject.comments)
})
.catch(function(error)
{
  console.log("error is : "+error);
});

function buildTables(jsonObject)
{
  //console.log(jsonObject.posts); //just to show in console for debug

  //Create table
  let table=document.createElement('table');
  document.body.append(table);

  let tr=document.createElement("tr");
  table.append(tr);

  let myyRefHeder = jsonObject[0];
  //console.log( jsonObject.posts[0]);

  //Create Header
  for (currentProp in myyRefHeder){    
    console.log ("create current prop in header" +currentProp);
    let thTable=document.createElement('th');
    thTable.classList.add("backGreen");
    thTable.innerHTML=`${currentProp}`;
    tr.append(thTable);        
  }

  for(currentObject of jsonObject)
  {
    let trn=document.createElement("tr");
    table.append(trn);
    for(currentProperty in currentObject)
    {
      //console.log ("create current prop " +currentProperty);      

      let td=document.createElement("td");
      td.classList.add("backGray");
      td.innerHTML=`${currentObject[currentProperty]}`;
      td.addEventListener("click", gestisciClick);
     
      trn.append(td);
    }
    
  }

}

