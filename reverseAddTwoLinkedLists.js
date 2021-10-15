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

/*
  Success
  Runtime: 120 ms, faster than 85.49% of JavaScript online submissions for Add Two Numbers.

  Notes: I did this with numbers only, but it broke with numbers larger than MAX INTEGER SIZE, so I had to change to a string addition.
  this has a linear complexity.
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
  const finalStringNumber = stringAdd(getReverseStringNumber(l1), getReverseStringNumber(l2));
  return reverseLinkList(finalStringNumber);
};

function getReverseStringNumber(linkedList) {
  let numberString = "";
  while (linkedList) {
    numberString = `${linkedList.val}${numberString}` ;
    linkedList = linkedList.next;
  }
  return numberString;
}

function reverseLinkList(numberString) { //create a reverse linked list.
  const numberAsArray = numberString.split('');
  let nextNode = undefined;
  numberAsArray.forEach(num => {
    const currentNode = new ListNode(num, nextNode);
    nextNode = currentNode;
  });
  return nextNode;
}

function stringAdd(str1, str2) { //This enables us to add numbers larger than MAX INT SIZE
  let finalString = '';
  let length1 = str1.length - 1;
  let length2 = str2.length - 1;
  let addAhead = 0;
  while (length1 >= 0 || length2 >= 0) {
    const number1 = str1[length1] ? +str1[length1] : 0;
    const number2 = str2[length2] ? +str2[length2] : 0;
    let curNumber = addAhead + number1 + number2;
    if(curNumber > 9) {
      addAhead = 1;
      curNumber = curNumber-10;
    } else {
      addAhead = 0;
    }
    finalString = `${curNumber}${finalString}`;
    length1 --;
    length2 --;
  }
 
 finalString = addAhead ? `${addAhead}${finalString}` : finalString;

  return finalString;
}