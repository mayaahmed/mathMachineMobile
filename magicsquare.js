var output= document.getElementById('outputDiv');
 var errorString ="";

run();

<!--Odd n -->
function run(){
  var n = parseInt (document.input.input.value);
  if (isNaN (n)){
    errorString="Error reading input.";
    output.innerHTML= errorString;
  }

 else if(n%2==1 && n>1){
    var m = (n+1)/2;
    var squareodd = new Array(n);
    for(i=0;i<n;i++){
      squareodd[i]=new Array(n);
    }

    //initializing square
    for(i=0;i<n;i++){
      for(j=0;j<n;j++){squareodd[i][j]=0;}}

    //top Diagonal entries
    k=0;
    for(r=0;r<n;r=r+2){
      squareodd[r][0]=m+k*(n-1);
      if(r>0){
        for(i=1;i<=r;i++){
          squareodd[r-i][i]=squareodd[r][0]+i;}}
      k=k+1;
    }

    //bottom Diagonal entries
    k=0;
    for(r=0;r<n;r=r+2){
      squareodd[r][n-1]=m*n +k*(n-1);
      if(r>0){
        for(i=1;i<n-r;i++){
          squareodd[r+i][n-1-i]=squareodd[r][n-1]-i;}}
      k=k+1;
    }

    //outside elements
    k=0;
    for(i=0;i<n;i=i+2){
      k=k+1;
      for(j=0;j<m-k;j++){
        squareodd[1+i+j][n-1-j]=squareodd[i][0]-1-j;
        squareodd[n-1-j][i+1+j]=squareodd[0][i]+1+j;
        squareodd[n-2-j-i][j]= squareodd[n-1-i][n-1]+1+j;
        squareodd[j][n-2-j-i]= squareodd[n-1][n-1-i]-1-j;
      }}

    var string ="";
    for(i=0;i<n;i++){
      for(j=0;j<n;j++){
        string=string+squareodd[i][j]+" ";
        output.innerHTML= string;
      }
      string=string+ "<br/>";
      output.innerHTML= string;
    }
  } // end of odd check
  else{
    errorString="Error! You did not type an odd number greater than one.";
    output.innerHTML= errorString;
  }
} // end of function odd


