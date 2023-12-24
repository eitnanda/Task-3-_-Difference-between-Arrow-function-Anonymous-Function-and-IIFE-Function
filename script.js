 //1)Print odd numbers in an array

   //Arrow Function  
   let array1 = ([1,2,3,4])  
   let oddNumbers = (array) => {   
                    for(var i = 0 ; i< array.length ; i++){
                         if(array[i]%2!=0){
                            console.log(array[i])
                           } 
                    }
                         }
                          let ans2 = oddNumbers(array1)


    // Anonymous Function
   let array = [1,2,3,4]
   let anonymous  =  function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  };
            let ans1 = anonymous(array)
    
  
    //    IIFE  Function:                  
       OddNumbers: (function(array){
                for(var i = 0 ; i< array.length ; i++){
                           if(array[i]%2!=0){
                              console.log(array[i])
                           } 
                      }
                })([1,2,3,4,])

//2)Convert all the strings to title caps in a string array

     //Arrow Function
     let str = ("MY NAME IS NANDAKUMAR")
    let titleCase = (str) => {
                str = str.toLowerCase().split(' ');
                    for (let i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  }          
                  let ans3 = titleCase(str) 
                  console.log(ans3)    

    // IIFE FUNCTION
    IIFE : (function (str) {
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        } 
        return str.join(' ');
        console.log(str);
      })("MY NAME IS NANDAKUMAR");
      
    //   anonymous : 
        let str1 = ("MY NAME IS NANDAKUMAR") 
        let anonymous1 = function(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        } 
        return str.join(' ');
      }
         let ans4 = anonymous1(str);
         console.log (ans4);


//3)Sum of all numbers in an array 

      // IIFE Function
       IIFE :  (function(num){
          let sum = 0;
          for(let a of num)
                sum += a;
                return sum;
                console.log(sum[num]); 
          })(([1,2,3,4]))
      // Normal Function
          function sumOfAll1(arr){
            let sum = 0;
                 for(let a of arr)
                 sum += a;
                  return sum;
                  console.log(arr);
            };
             sumOfAll1([1,2,3,4])
            
       // Arrow Function
           var sumOfAll=(arr1)=>{
              let sum = 0;
                   for(let a of arr1)
                   sum += a;
                   return sum;
              };
              console.log(sumOfAll([1,2,3,4]))


       // Anonymous Function
              var sumOfAll1= function(arr1) {
                let sum = 0;
                     for(let a of arr1)
                     sum += a;
                     return sum;
                };
               console.log (sumOfAll([2,3,3]));


// 4)Return all the prime numbers in an array

               //Normal Function:
                          function PrimeNumbers(numArray){
                          numArray = numArray.filter((number) => {
                           for (var i = 2; i <= Math.sqrt(number); i++) {
                           if (number % i === 0) return false;
                           }
                           return true;
                           });
                           console.log(numArray);
            };
                   PrimeNumbers([1,2,3,4,5,6,7,8,9,10])
                   PrimeNumbers([1,2,3,4,5])


                //Anonymous Function:
                                  let PrimeNumbers1 =function(numArray){
                                    numArray = numArray.filter((number) => {
                                      for (var i = 2; i <= Math.sqrt(number); i++) {
                                        if (number % i === 0) return false;
                                      }
                                      return true;
                                    });
                                    console.log(numArray);
                                };
                                  (PrimeNumbers1([20,21,23,24,25,26]))

                 // Arrow Function

                               let PrimeNumbers2 =(numArray)=>{
                               numArray = numArray.filter((number) => {
                              for (var i = 2; i <= Math.sqrt(number); i++) {
                               if (number % i === 0) return false;
                               }
                              return true;
                               });
                               console.log(numArray);
              };
                (PrimeNumbers2([20,21,23,24,25,26]))

                 // IIFE Function
       IIFE :    (function(numArray1){
                  numArray1 = numArray1.filter((number) => {
                    for (var i = 2; i <= Math.sqrt(number); i++) {
                      if (number % i === 0) return false;
                    }
                    return true;
                  });
                  console.log(numArray1);
              })([10,11,12,13,14,15,16])



