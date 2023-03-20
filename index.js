function show1(){
    document.getElementById('inptVal').style.display ='block';
}
function show2(){
    document.getElementById('uploadFl').style.display = 'block';
}

function Calculate(){
   const e=2.71828; 
   let x=document.getElementById("at");
   let y=document.getElementById("rh");
   let z=document.getElementById("ws");

   x_1=Number(x.value); // AIR TEMPERATURE
   x_2=Number(y.value); // RELATIVE HUMIDITY
   x_3=Number(z.value); // WIND SPEED
   
   console.log(x_1);
   console.log(x_2);
   console.log(x_3);
   let a,b,c,d,p1, p2, p3, p4;


       if ( x_1 && x_2 ){
               a=5.8;
               b=0.02;
               c=(-7.9);
               d=0;
               p1= 1/(1+e^(-(a+b*x_1+c*x_2+d*x_3)));
               document.getElementById("result1").innerHTML =p1;                        
       }
       else if( x_2 && x_3 ){
               a=4.5;
               b=1.0;
               c=(-6.4);
               d=(-6.8);
               p2= 1/(1+e^(-(a+b*x_1+c*x_2+d*x_3))); 
               document.getElementById("result2").innerHTML =p2;                        

       }
       else if( x_1 && x_3 ){
               a=0.7;
               b=2.2;
               c=(-0.02);
               d=(-6.8);
               p3= 1/(1+e^(-(a+b*x_1+c*x_2+d*x_3)));
               document.getElementById("result3").innerHTML =p3;                        

       }
       else if( x_1 && x_2 && x_3 ){ 
               a=4.6;
               b=0.96;
               c=0.02;
               d=(-6.8);
               p4= 1/(1+e^(-(a+b*x_1+c*x_2+d*x_3)));
               document.getElementById("result4").innerHTML =p4;                        

               
       }
   }
   