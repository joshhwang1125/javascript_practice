var uniq = function(array)
{
  var uniqArray = [];
  for(var i = 0; i < array.length; i++)
  {
    var el = array[i];
    if (uniqArray.indexOf(el) === -1)
    {
      uniqArray.push(el);
    }
  }
  return uniqArray;
};

console.log("==== Uniq!");
console.log( uniq([1,2,3,3,3,4,5]) );

var twoSum = function(array)
{
  var results = [];
  for(var i = 0; i < array.length; i++)
  {
    for(var j = i + 1; j < array.length; j++)
    {
      if (array[i] + array[j] === 0 )
      {
        results.push( [i,j]);
      }
    }
  }
  return results;
};

console.log("==== Two Sum!");
console.log(twoSum([1,2,4,-4,6,-2]));

// var transpose = function(array){
//   var results = [];
//   for ( var rowidx = 0; rowidx<array[0].length; rowidx++)
//   {
//     for ( var colidx = 0; colidx<array.length; colidx++)
//     {
//       el = array[rowidx]
//       if ( rowidx === 0)
//       {
//         var results[rowidx] = [ array[rowidx][colidx] ];
//       }
//       else
//       {
//         results[rowidx].push(array[rowidx][colidx]);
//       }
//     }
//   }
// };


var transpose = function(array){
  var results = [];
  for ( var rowidx = 0; rowidx<array[0].length; rowidx++)
  {
    var row = [];
    for ( var colidx = 0; colidx<array.length; colidx++)
    {
      var el = array[colidx][rowidx];
      console.log(el);
      row.push(el);
    }
    results.push(row);
  }
  return results;
};

console.log("==== Transpose!");
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
