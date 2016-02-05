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
      row.push(el);
    }
    results.push(row);
  }
  return results;
};

console.log("==== Transpose!");
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));

var myEach = function( array, func )
{
  for ( var i = 0; i < array.length; i++ )
  {
    func(array[i]);
  }
  return array;
};

console.log("==== myEach!");
console.log(myEach([1,2,3,4], function doubleMe(num){ console.log(num); }));

var myMap = function( array, func )
{
  var mappedArray = [];

  myEach( array, function(i) {
    mappedArray.push(func(i));
  } );

  return mappedArray;
};

console.log("==== myMap!");
console.log(myMap([1,2,3,4], function doubleMe(num){ return (num * 2); }));

var myInject = function( array, func, acc )
{
  if (acc === undefined)
  {
    acc = array[0];
    myEach( array.slice(1), function(num) {
      acc = func(acc, num);
    });
  }
  else {
    myEach( array, function(num) {
      acc = func(acc, num);
    });
  }
  return acc;
};
console.log("==== myInject!");
console.log(myInject([1,2,3,4], function sumMe(acc, num){
   return acc + num; }, 0 ));

var bubbleSort = function( array )
{
  var sorted = false;
  while (sorted === false)
  {
    for ( var i = 0; i < (array.length - 1); i++)
    {
      sorted = true;
      if (array[i] > array[i+1])
      {
        // sick moves! swap the two variables.
        array[i] = [ array[i+1], array[i+1] = array[i] ][0];
        sorted = false;
      }
    }
  }
  return array;
};


console.log( "==== Bubble Sort!");
console.log( bubbleSort( [9,4,2,8,70,48] ) );

var substrings = function( str )
{
  var subs = [];
  for ( var i = 0; i < (str.length); i++)
  {
    for ( var j = i + 1; j <= (str.length); j++)
    {
      subs.push(str.substring(i,j));
    }
  }
  return subs;
};

console.log( "==== Substrings!");
console.log( substrings("hello") );

var range = function(start, end)
{
  if (start > end)
  {
    return [];
  }
  else if (start === end)
  {
    return [end];
  }
  else {
    return [start].concat(range(start+1, end));
  }
};

console.log( "==== range!");
console.log( range(0, 5) );

var arraySum = function(array)
{
  if (array.length === 1)
  {
    return array[0];
  }
  else {
    return array[0] + arraySum(array.slice(1));
  }
};

console.log( "==== arraySum!");
console.log( arraySum([0, 5, 6, 7]) );

var exponentiation = function(base, exponent)
{
  if (exponent === 0)
  {
    return 1;
  }
  else {
    return base * exponentiation(base, exponent - 1);
  }
};

console.log( "==== exponentiation!");
console.log( exponentiation(2, 5) );

var exponentiation2 = function(base, exponent)
{
  if (exponent === 0)
  {
    return 1;
  }
  else if (exponent === 1)
  {
    return base;
  }
  else if (exponent % 2 === 0)
  {
    var root = (exponentiation2(base, exponent/2));
    return root * root;
  }
  else
  {
    var rooot = exponentiation2(base, (exponent - 1) / 2);
    return base * ( rooot * rooot );
  }
};

console.log( "==== exponentiation Mark II!");
console.log( exponentiation2(2, 5) );

var fibonacci = function(num)
{
  if (num === 0)
  {
    return [];
  }
  else if (num === 1)
  {
    return [0];
  }
  else if (num === 2)
  {
    return [0,1];
  }
  else {
    var fibs = fibonacci(num-1);
    return fibs.concat(fibs[num-2]+fibs[num-3]);
  }
};

console.log( "==== fibonacci!");
console.log( fibonacci(9) );

var binarySearch = function( array, needle )
{
  if ( array.length === 0 )
  {
    return null;
  }
  var midpoint = Math.floor(array.length / 2);
  if ( array[midpoint] === needle )
  {
    return midpoint;
  }
  else if ( array[midpoint] > needle)
  {
    return binarySearch( array.slice( 0, midpoint ), needle);
  }
  else if ( array[midpoint] < needle)
  {
    return binarySearch( array.slice( midpoint + 1 ), needle) + midpoint + 1;
  }
  return null;
};

console.log( "==== binary search!!");
console.log( binarySearch([1,2,3,4,5,6,7,8,9,10],2) );

var mergeSort = function(array)
{
  if (array.length < 2)
  {
    return array;
  }
  else
  {
    var midpoint = Math.floor(array.length / 2);
    var left = array.slice( 0, midpoint );
    var right = array.slice(midpoint);
    return merge(mergeSort(left), mergeSort(right));
  }

};

var merge = function(left, right)
{
  var merged = [];

  while (left.length > 0 && right.length > 0)
  {
    if (left[0] >= right[0])
    {
      merged.push(right.shift());
    }
    else {
      merged.push(left.shift());
    }
  }
  return merged.concat(left.concat(right));
};

var a = [1, 3, 5, 7, 9];
var b = [2, 2, 2, 5, 100];
console.log("==== merge sort!");
console.log(mergeSort([2, 4, 1, 7, 4, 2, 88, 12, 3]));

var subSets = function( array )
{
  if (array.length === 0 )
  {
    return [[]];
  }
  else
  {
    var init = subSets( array.slice(0,array.length - 1) );
    var last = array[array.length - 1];
    return init.concat( myMap( init,
      function doubleMe(ary)
      {
        return ary.concat(last);
      }
    ) );
  }
};

console.log("==== Subsets!");
console.log( subSets([1, 2, 3]) );

function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  console.log("everyone loves " + this.name);
};

Cat.prototype.meow = function(){
  console.log("Hail Satan");
};

var cat1 = new Cat("The Meowfessor", "Billy Joel");
var cat2 = new Cat("Meowhatma Gandhi", "Mike Tyson");
var cat3 = new Cat("Chairman Meow", "Yeezy");
var cat4 = new Cat("Meowchael", "Gabriel");

cat2.meow = function(){
  console.log("No! Violence is never the answer :(");
};

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());
console.log(cat3.cuteStatement());
console.log(cat4.cuteStatement());

console.log(cat1.meow());
console.log(cat2.meow());
console.log(cat3.meow());
console.log(cat4.meow());
