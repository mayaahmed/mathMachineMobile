var output= document.getElementById('outputDiv');
var errorString="";
run();

function run(){ 
    var n = parseInt (document.input.input.value);
    if (isNaN (n)){
      errorString="Error reading input.";
      output.innerHTML=errorString;
    }
    else if(n<=0){
      errorString="Error! Type an integer greater than zero";
      output.innerHTML=errorString;
    }
      else{
        permutations(n);
      }
 } //  end of function run().


function permutations(n){
  var string ="";
  var permutations  = new Array(1);
   permutations[0] = new Array(1);
   permutations[0][0] = 1;
    var d = factorial(n);

    if(n>1){
    for(q=1; q<n; q++){
    permutations = interweaveSet(permutations, q+1);}}

   for(i=0;i<d;i++){
   for(j=0;j<n;j++){
     string=string+permutations[i][j];
    output.innerHTML= string;
   }
   string=string+ "<br/>";
   output.innerHTML= string;
   }      
}/* end of permutations function */


    function factorial(n){
    var fact = 1;
    for(i=1; i<n+1; i++)
      fact = fact * i;
    return fact;} //end of factorial function



/*===========interweavevector  =======================
  This vector  interweaves n  to a  permutation of  size  n-1
*/

 function interweaveVector(g,  t){
  var  start = new Array(t);
   var  current = new Array(t);
   var result1 = new Array(t);

  for(i=0; i<t; i++)
    result1[i]=new Array(t);
    
    start[t-1] = t;
    for(i=0; i<t-1; i++)
        start[i]=g[i];
    for(i=0; i<t; i++)
        result1[0][i]=start[i];
   
     for(temp=1; temp<t; temp++){
       for(i=0; i<t-temp-1; i++)
          current[i]=start[i];
          current[t-temp-1]=t;
            for(i=t-temp; i<t; i++)
               current[i]=start[i-1];
                for(i=0; i<t; i++)
                   result1[temp][i]=current[i];  }
     
     return result1;} //end of interweaveVector function


 function interweaveSet(set,  z){
  size = factorial(z);
  size2 = factorial(z-1);

  result = new Array(size);
  for(i=0; i<size; i++)
    result[i] = new Array(z);
  b = new Array(z);
  for(k=0; k<size2; k++){
    b= interweaveVector(set[k],  z);
    m=k*z; 
    for(j=0; j<z; j++){
      for(r=0; r<z; r++)
        result[m+j][r] = b[j][r]; }}
         return result; 
 
} /* end of function interweaveSet */




