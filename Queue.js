//QUESTION-1
//Circular queue implementation

var MyCircularQueue=function(k){
    this.queue=[];
    this.size=k;
};
MyCircularQueue.prototype.enQueue=function(value){
    if(this.size === this.queue.length ) return false;
    this.queue.push(value)
    return true;
}
MyCircularQueue.prototype.deQueue=function(){
    if(this.queue.length === 0) return false;
    this.queue.shift(); return true;
}
MyCircularQueue.prototype.Front=function(){
    if (this.queue.length === 0) return -1;
    return this.queue[0]
};
MyCircularQueue.prototype.Rear=function(){
    if(this.queue.length === 0)return -1;
    return this.queue[this.queue.length-1];
}
MyCircularQueue.prototype.isEmpty=function(){
    return this.queue.length === 0;
}
MyCircularQueue.prototype.isFull=function(){
    return this.size === this.queue.length;
}
var obj=new MyCircularQueue();
obj.enQueue(2);//2
obj.enQueue(3);//2,3
obj.enQueue(5);//2,3,5
obj.deQueue();//3,5
obj.enQueue(1);//3,5,1
obj.enQueue(9);//3,5,1,9

console.log(obj.Front(),obj.Rear()) //it display front of the queue and rear(back)

//QUESTION-2
// Implement Stack using queue

var MyStack=function(){
    this.q1=[];
    this.q2=[];
}
MyStack.prototype.push=function(x){
    while (this.q1.length !== 0) {
        this.q2.push(this.q1.shift())
    }this.q1.push(x)
    while(this.q2.length !== 0)
    {
        this.q1.push(this.q2.shift())

    }

}
MyStack.prototype.pop=function(){
    return this.q1.shift()
}
MyStack.prototype.top=function(){
    return this.q1[0];
}
MyStack.prototype.empty=function(){
   return this.q1.length === 0;
};

let stack=new MyStack();
stack.push(3);
stack.push(5);
stack.push(96);
stack.push(24);
stack.pop(24);
console.log(stack.top());

// Ques 3 : Implement Queue using Stacks
// Implement a first in first out(FIFO) queue using only two stacks.
// The implemented queue should have all functions of queue(enqueue, front, dequeue, and empty).

var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
  };
  
  MyQueue.prototype.enqueue = function (x) {
    this.stack1.push(x);
  };
  
  // stack1 = [9,10]
  // stack2 = []
  
  MyQueue.prototype.dequeue = function () {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
  
    return this.stack2.pop();
  };
  
  MyQueue.prototype.front = function () {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
  
    return this.stack2[this.stack2.length - 1];
  };
  
  MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
  };
  
  const queue = new MyQueue();
  queue.enqueue(3);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.dequeue();
  console.log(queue.front());


/*class MyQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    push(x) {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(x);
        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop());
        }
    }

    pop() {
        return this.s1.pop();
    }

    peek() {
        return this.s1[this.s1.length - 1];
    }

    empty() {
        return this.s1.length === 0;
    }
}
*/


//QUESTION-4
//Sliding Window Maximum
//Input : nums=[1,3,-1,-3,5,3,6,7] k=3
//Output : [3,3,5,5,6,7]

var slidingWindMax=function(nums,k){
    let result=[];
    let dequeue=[];
    for (let i = 0; i < nums.length; i++) {

        if(dequeue.length > 0 && dequeue[0] <= i-k)
        {
            dequeue.shift();
        }
        while(dequeue.length > 0 && nums[dequeue[dequeue.length-1]]<nums[i])
        {
            dequeue.pop();
        }
        dequeue.push(i);
        if(i >= k-1){
            result.push(nums[dequeue[0]]);
        }
        
    }
    return result;
};
console.log(slidingWindMax([1,3,-1,-3,5,3,6,7],3));
