// All the task was done via JavaScript, and the each answers correspnds to question on the task. 


// Javascript program for question 1
  
    /* Return true if all characters of str are unique.
 Assumptions : (1) str contains only characters from 'a' to 'z'
                   (2) integers are stored using 32 bits */

    function areChractersUnique(str)
    {    
        // An integer to store presence/absence
        // of 26 characters using its 32 bits.
        let checker = 0;
     
        for (let i = 0; i < str.length; ++i)
        {
            let val = (str[i]-'a');
     
            // If bit corresponding to current
            // character is already set
            if ((checker & (1 << val)) > 0)
                return false;
     
            // set bit in checker
            checker |= (1 << val);
        }
     
        return true;
    }
 
// Driver Code
     
    var s = "aaabbccdaa";
         
    if (areChractersUnique(s))
        document.write("Yes");
    else
        document.write("No");


// Question 2

/* This JavaScript code will check if two strings are permutations of each other

 Function to check whether two strings are Permutation of each other*/
function arePermutation(str1, str2)
{
     
    // This will get the lengths of both strings
    let n1 = str1.length;
    let n2 = str2.length;
 
    //  If length of both strings is not same, then they cannot be permutated
    if (n1 != n2)
        return false;
         
    let ch1 = str1.split(' ');
    let ch2 = str2.split(' ');
 
    // Sort both strings
    ch1.sort();
    ch2.sort();
 
    // Compare sorted strings
    for(let i = 0; i < n1; i++)
        if (ch1[i] != ch2[i])
            return false;
 
    return true;
}
 
// Driver Code
let str1 = "test";
let str2 = "ttew";
 
if (arePermutation(str1, str2))
    document.write("Yes");
else
    document.write("No");




// Question 3
	// JavaScript implementation to replace spaces with %20
  // Instantiate the string
  let str = "Mr John Smith ";

  // Trim the given string
  str = str.trim();

  // Replace All space (unicode is \\s) to %20
  str = str.replaceAll(" ", "%20");

  // Display the result
  document.write(str);



// Question 4

  /*
  function to check whether characters of a string can form a palindrome
  */
  function canFormPalindrome(str)
  {

    // Create a list
    let list = [];

  // For each character in input strings,
  // remove character if list contains
  // else add character to list
  for(let i = 0; i < str.length; i++)
  {
		if (list.includes(str[i]))
  list.splice(list.indexOf(str[i]), 1);
  else
  list.push(str[i]);
	}

  // If character length is even
  // list is expected to be empty or
  // if character length is odd list size
  // is expected to be 1

  // If string length is even
  if (str.length % 2 == 0 && list.length == 0 ||
  (str.length % 2 == 1 && list.length == 1))
  return true;

  // If string length is odd
  else
  return false;
}

  // Driver code
  if (canFormPalindrome("geeksforgeeks"))
  document.write("Yes<br>");
    else
    document.write("No<br>");

      if (canFormPalindrome("geeksogeeks"))
      document.write("Yes<br>");
        else
        document.write("No<br>");


// Question 5
	// Javascript program to check if given two strings are at distance one.

  // Returns true if edit distance
  // between s1 and s2 is one, else false
  function isEditDistanceOne(s1, s2)
  {

    // Find lengths of given strings
    let m = s1.length, n = s2.length;

		// If difference between lengths is
		// more than 1, then strings can't
		// be at one distance
		if (Math.abs(m - n) > 1)
  return false;

  // Count of edits
  let count = 0;
  let i = 0, j = 0;

  while (i < m && j < n)
  {
			// If current characters
			// don't match
			if (s1[i] != s2[j])
  {
				if (count == 1)
  return false;

				// If length of one string is
				// more, then only possible edit
				// is to remove a character
				if (m > n)
  i++;
  else if (m< n)
  j++;

  // If lengths of both
  // strings is same
  else
  {
    i++;
  j++;
				}

  // Increment count of edits
  count++;
			}

  // If current characters match
  else
  {
    i++;
  j++;
			}
		}

  // If last character is extra
  // in any string
  if (i < m || j < n)
  count++;

  return count == 1;
	}

  let s1 = "gfg";
  let s2 = "gf";
  if(isEditDistanceOne(s1, s2))
  document.write("Yes");
  else
  document.write("No");

// Question 6
const compressString = (s1) => {
  let charMap = new Map();

  for (let i = 0; i < s1.length; i++) {
    charMap.set(s1[i], charMap.get(s1[i]) + 1 || 1);
  }

  let s = '',
    mapKeys = charMap.keys(),
    mapValues = charMap.values();
  charMap.forEach(function (value, key, map) {
    s += key + value;
  });

  return s;
}

let a = 'aaabbccccaa';
console.log(compressString(a));





