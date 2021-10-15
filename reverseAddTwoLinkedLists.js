/**
 * Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  const finalNumber = getReverseNumber(l1) + getReverseNumber(l2);
  return reverseLinkList(finalNumber);
};

function getReverseNumber(linkedList) {
  let number = 0;
  while (linkedList) {
      number = (number*10) + linkedList.val;
      linkedList = linkedList.next;
  }
  return number;
}

function reverseLinkList(number) {
  const numberAsArray = number.toString().split('');
  //create a reverse linked list.
  let nextNode = undefined;
  numberAsArray.forEach(num => {
      const currentNode = ListNode(num, nextNode);
      nextNode = currentNode;
  });
  return nextNode;
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}