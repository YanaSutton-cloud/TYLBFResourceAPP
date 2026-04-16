var attributionsList =["Asset: All Images","Author: Yana Sutton","Source: www.KaliRedTYLBFoundation.org","License: Copyright 2011"]
var lists = ""
function renderList (){
    for(var i = 0; i<attributionsList.length; i++){
        lists = lists + "- " + attributionsList [i] + "\n"
    }
  setText("list1", lists)  
}
renderList()
var number = randomNumber(0,3)
function changeBackground () {
    if(number == 2){
        setProperty("body", "background-color", "purple")
        }else{
         setProperty("body", "background-color", "red")   
        }
}
changeBackground()