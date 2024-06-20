class StringManipulator {
    cleanString(str){
        return str.replace(/[^a-zA-Z0-9 -]/).toLowerCase();
    }
}
class PalindromeChecker  extends StringManipulator {
    isPalindrome(str){
        let cleanrString = this.cleanString(str);

        let revString = cleanrString.split('').reverse().join('');

        return cleanrString === revString;
    }
}

let Checker = new PalindromeChecker();

let text = "121";

let printpal = Checker.isPalindrome(text);

if( printpal){
    console.log(" is Palindrome ");
}
else{
    console.log("is not a Palindrome ");
}