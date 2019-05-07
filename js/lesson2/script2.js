
 var arr =[3,74,69,88,74,10,242,39,12,42,85]
 var kolvo = 0;
 var sum=0;
 for(var k  in arr){
	 ost=arr[k]%3;
	 if (ost==0){
		 var kolvo = kolvo+1;
		 sum = sum+(arr[k]);
	 }
	 // для проверки
	 // console.log("ost"+ost+" zn"+arr[k]+" sum"+kolvo+" newsum"+sum);
	 //console.log("zn"+arr[k]);
	 //console.log("sum"+a)
	 }
	 console.log("количество чисел-"+kolvo+" и их сумма равна "+sum);