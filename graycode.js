var output= document.getElementById('outputDiv');
var errorString="";
run();


function run(){ 
    var n = parseInt (document.input.input.value);

	if (isNaN (n)){
      errorString="Error reading input.";
      output.innerHTML=errorString;
    }

    else if(n>0) graycode(n);
    
    
    else{
      errorString= "Error! Please, input an integer greater than zero";
      output.innerHTML=errorString;
    }

} //  end of function run


function graycode(n){
 var string ="";

  var m = 1;
  var r = Math.pow(2,n);

// initialize graycode
  var  graycodeArray = new Array(2);
     for(i=0;i<2;i++)
     graycodeArray[i]= new Array(1);
     graycodeArray[0][0]= 0;
     graycodeArray[1][0] = 1;


// Call function recursively  
  if(n>1){
      for(k=1;k<n;k++){m=2*m;
      graycodeArray =   buildGraycode(graycodeArray,k,m);}}


// Print graycode
     for(i=0;i<r;i++){
          for(j=0;j<n;j++){
            string=string+graycodeArray[i][j];
            output.innerHTML= string;
           } 
          string=string+ "<br/>";
          output.innerHTML= string;
     }


}//end of graycode function


function  buildGraycode(oldArray,p,q){
  var newArray =  new Array(2*q);
     
      for(i=0;i<2*q;i++)
      newArray[i]= new Array(p+1);

 // first half of gray code
      for(i=0; i<q; i++){
           newArray[i][0] = 0;
              for(j=1; j<p+1; j++)
              newArray[i][j] = oldArray[i][j-1];}

// second half of gray code 
       for(i=0; i<q; i++){
         newArray[q+i][0] = 1;
          for(j=1; j<p+1; j++)
            newArray[q+i][j] = oldArray[q-i-1][j-1];}

return newArray;

}//end of fn


