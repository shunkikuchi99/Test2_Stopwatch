function clickbutton(target){
  let result=document.getElementById("result")
  let target_value=target.innerHTML;
  
  if (target_value=="AC"){
      result.innerHTML="0"
  } else if (target_value=="="){
      result.innerHTML=eval(result.innerHTML)
  } else {
      if(result.innerHTML=="0"){
        result.innerHTML=target_value
      }else{
        result.innerHTML+=target_value
      }
  }
}

$(document).ready(function(){
  $(".button").click(function(){
    let get_text=$("display").text();
    let target_value = document.getElementsByClassName("button")

    var str = get_text;
    var slicsSymbol_1 = str.slice(-1); //右から１文字目を指定
    var slicsSymbol_2 = str.slice(-1,-2); //右から２文字目を指定
  
    var sourceStr = get_text;
    var cutSymbol = sourceStr.slice(-1,-2); //右から２文字目を指定
  
    if(slicsSymbol_1 && slicsSymbol_2=="/"||"*"||"-"||"+"){ //右１文字目と二文字目を取得
      slicsSymbol_2 = cutSymbol
    }else {
      if(get_text.slicsSymbol_1==target_value){
        get_text+=target_value
      }
    }
  });
  
});