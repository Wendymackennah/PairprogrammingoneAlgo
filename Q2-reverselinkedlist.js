// Given the head of a singly linked list, 
// reverse the list, and return the reversed list.
var reverseList = function(head) {

    let previous=null;
    let current =head;
   
    while(current !==null){
       let next = current.next;
       current.next = previous;
       previous =current;
   
   
       current = next;
       }
       return previous;
       
   };

console.log(reverseList([1,2]))