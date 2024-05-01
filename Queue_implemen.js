//Queue Implementation

class Queue{
    constructor(){
        this.queue=[];
    }
    enqueue(element){
        this.queue.push(element)
    }
    size(){
       return this.queue.length;
    }
    isEmpty(){
       return this.size() === 0
    }
    dequeue(){
        if (this.isEmpty()) {
            return "underflow can't perform dequeue"
        }
        return this.queue.shift();  //it will be shift(remove) the first ele in the queue
        } 
        front(){
            if(this.isEmpty()){
                return "no elements in the queue"
            }
            return this.queue[0]; //first element of the queue
        }
        printQueue()   //it is an optional 
        {
            let queueString=" ";
            for (let i = 0;i< this.size(); i++)              {
                queueString += this.queue[i] + ", ";        
            }
            console.log("Queue : " + queueString);
        }
}
const myQueue=new Queue();
myQueue.enqueue(5);
myQueue.enqueue(23);
myQueue.enqueue(34);
myQueue.enqueue(45);
console.log(myQueue.printQueue());
console.log(myQueue.dequeue())
console.log(myQueue.printQueue());
console.log(myQueue.front())
console.log(myQueue.printQueue());
console.log(myQueue.size())
console.log(myQueue.printQueue());
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.front())


