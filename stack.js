//stack implementation

class Stack{
    constructor(){
        this.stack=[];
    }
    push(elements){
        this.stack.push(elements);
    }
    size(){
        return this.stack.length; //we find the length of the stack within the size function so we mention size in everywhere
    }
    isEmpty(){
        return this.size() === 0;       //this.stack.length === this.size()
    }
    pop(){
        if(this.isEmpty()){
            return "stack is empty can't perform pop"
        }return this.stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "stack is empty can't perform peek"
        }return this.stack[this.size()-1]
    }

}
const stack=new Stack();    //on=bject creation
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.peek())  // it display current top of the stack element
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.size());
console.log(stack.isEmpty())
console.log(stack.pop())
console.log(stack.peek())




//QUESTION-1
//Given an input string s,reverse the order of the words
//Input : "the sky is blue"  output: "blue is sky the"
//Input : "  hello   world"  output: "  world   hello"

function reverseWord(s){
    const splitS=s.split(" ");
    const stack=[];

    for(let i of splitS){
        stack.push(i);
    }let finalS="";
    while(stack.length){
        const current=stack.pop();
        if(current){
            finalS +=" "+ current;
        }
    }
return finalS.trim()
}
console.log(reverseWord("  hello   world"))
console.log(reverseWord("the sky is blue"))

//QUESTION-2 Valid Parantheeses
//Input : "()" ----->>>>true
//Input: "()[]{}" ---->>>true
//Input: "(]" ---->false

function isValid(s){
    const stack=[];
    for(i=0;i<s.length;i++){
        const char=s[i];   //all string elements are stored into char
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);     //pushed char elements into the stack
        }
        else if(char === ")" || char === "]" || char === "}"){
            if(isEmpty(stack)){
                return false;
            }
            const top=stack.pop();
            if ((char === ")" && top !== "(") || (char === "]" && top !== "[") || (char === "}" && top !== "{") )
             {
                return false;                
            }
        }
    }
    return isEmpty(stack);

}
function isEmpty(stack){
    return stack.length === 0;
}

const string1="[{()}]"
const string2="[}"
console.log(isValid(string1))
console.log(isValid(string2))

