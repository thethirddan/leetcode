/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/* 
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Runtime: 100 ms, faster than 86.90% of JavaScript online submissions for Merge k Sorted Lists.
Memory Usage: 44.4 MB, less than 46.86% of JavaScript online submissions for Merge k Sorted Lists.

*/

function ListNode(val, next) {
    this.val = (val===undefined ? null : val)
    this.next = (next===undefined ? null : next)
}
 
var mergeKLists = function(lists) {
    if (!lists.length) {return null;}
    const counting = [];
    lists.forEach(list => {
        let node = list;
        while(node) {
            counting[node.val] = (counting[node.val] || 0) + 1;
            node = node.next;
        }
    });
    if (!counting.length) {return null;}
    let final = new ListNode();
    let current = final;
    let last;
    for(let i=0; i < counting.length; i++){
        if(counting[i]){
            for(let j=0; j < counting[i]; j++){
                if (last) {last.next = current;}
                current.val = i;
                last = current;
                current = new ListNode();
            }
        }
    } 
    return final;
};