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
