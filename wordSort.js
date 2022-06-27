/*(т.е.вхождение символов фильтрующей строки в поисковую строку,
   в порядке фильтрующей строки), примеры:
fuzzysearch('car', 'cartwheel');        // true
fuzzysearch('cwhl', 'cartwheel');       // true
fuzzysearch('cwhee', 'cartwheel');     // true
fuzzysearch('cartwheel', 'cartwheel');  // true
fuzzysearch('cwheeel', 'cartwheel');    // false
fuzzysearch('lw', 'cartwheel');   // false
   */

const fuzzysearch = (word1, word2) => {

   let array1 = word1.split("");
   let array2 = word2.split("");
   let w = 0;

   
   for (let w2 = 0; w2 < array2.length && w < array1.length; w2++) {
      if (array1[w] === array2[w2]) {
         w++
      }
   }
   if (w === word1.length) {
      return true
   }   
   return false
};