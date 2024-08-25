// QUESTION //
/* 
Description:
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.


*/

//////////////////////////////////////////////////////////////////////////////////////////////////

//PARAMETERS: a string (text) -> can be empty / an integer (n) -> can be negative

//RETURNS: for encrypt function return a string after concatenating all the odd-indexed characters of given string with all the even-indexed characters of given string, this process should be repeated an integer (n) times.
// for decrypt function return encrypt reverses process

//EXAMPLES: (Input --> Output)
// "This kata is very interesting!", 1 --> "hskt svr neetn!Ti aai eyitrsig"
// "hskt svr neetn!Ti aai eyitrsig", 1 --> "This kata is very interesting!"
// "", 0 --> ""
// "", 0 --> ""
// null, 0 --> null
// null, 0 --> null

//PSEUDOCODE:

//SOLUTION:
function encrypt(text, n) {}

function decrypt(encryptedText, n) {}


Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
Test.assertEquals(encrypt("", 0), "");
Test.assertEquals(decrypt("", 0), "");
Test.assertEquals(encrypt(null, 0), null);
Test.assertEquals(decrypt(null, 0), null);