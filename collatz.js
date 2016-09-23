var output= document.getElementById('outputDiv');
var errorString="";
var initialString;
 var string="";
run();


function run(){ 
    var n = parseInt (document.input.input.value);
    if (isNaN (n)){
      errorString="Error reading input.";
      output.innerHTML=errorString;
    }

	
  else if(n<=0){
      errorString="Error: Enter an integer greater than zero.";
      output.innerHTML=errorString;
    } 
      else{
        initialString="The Collatz sequence of  "+ n + " is: <br />";
        string=initialString+n+" ";
        output.innerHTML=string;
        collatz(n);}
} //  end of function run().


function collatz(n){
  var temp;
            if (n==1)
              return;
            else {
              if (n % 2 == 1){
                temp=3*n+1;
                string=string+temp+" ";
                output.innerHTML=string;
                collatz(3*n + 1);
              }
              else{
                temp=n/2;
                string=string+temp+" ";
                output.innerHTML=string;
                collatz(n / 2);
              }
          }
} // end of fn

