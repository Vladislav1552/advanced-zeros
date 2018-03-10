

  module.exports = function getZerosCount(number, base)
  
  {

      let zero = number;
      let numberSystem = base;
      let getZero = (zero) =>{
      for (let i = 2; i <= base; i ++)
      {

          if (numberSystem % i == 0)
          {
          
              let bazeNumper = 0;
              let countOfPr = 0;
              let whileCount = i;
              let initNumber = number;
              while (numberSystem % i == 0)
              {
                  bazeNumper += 1;
                  numberSystem = numberSystem / i;
                  
              }
              while ((number / whileCount) > 0)
              {
                  countOfPr += Math.floor(initNumber /whileCount);
                  whileCount *= i;
              }
              let result = countOfPr / bazeNumper;
              zero  = Math.min(zero, result);
          }
  
      }
      return Math.floor(zero);
    }
     return getZero(zero);
  }
