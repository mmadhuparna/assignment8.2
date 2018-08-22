 //creating function prepareFood with two parameters and a callback function
 function prepareFood(tableNumber,Items,callback) 
 {
    if (callback === "prepFood")  //using callback function
    {
      return  Items ;
    }
    else{
        return tableNumber + " " + Items;
    }
}
  console.log( "preparing food for item - %o", prepareFood(6,["burger","pasta","coke"],'prepFood'));

  //creating function serveFood with two parameters
  function serveFood(tableNumber, Items){
    return Items;
  }
  console.log( "serving food for item - %o", serveFood( 6, ["burger","pasta","coke"]));