/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


 var addTwoNumbers = function(l1, l2) {
    var returnNode = new ListNode();
    var chainNode = new ListNode();
    var tempNode = new ListNode();
    var holder;
    var tens = false;
    var firstRun = true;
    var l1a = [];
    var l2a = [];
    
    while (l1 != null || l2 != null){
        if (l1 != null) {
            l1a.push(l1.val);
            l1 = l1.next;
        }
        
        if (l2 != null) {
            l2a.push(l2.val);
            l2 = l2.next;
        }
    }
    
    while (l1a.length > 0 || l2a.length > 0) {        
        holder = 0;
        l1h = 0;
        l2h = 0;
        if (l1a.length > 0) {
            var l1h = l1a.shift();
            holder += l1h;
        }

        if (l2a.length > 0) {
            var l2h = l2a.shift();
            holder += l2h;
        }
        
        if (tens)
            holder++;
        
        if (holder > 9) {
            tens = true;
            holder -= 10;
        }
        else {
            tens = false;
        }
        
        tempNode.val = holder;
        
        if (firstRun) {
            firstRun = false;
            returnNode.val = holder;
            if (l1a.length > 0 || l2a.length > 0) {
                returnNode.next = chainNode;
            }
        }
        else { 
            chainNode.val = holder;
            if (l1a.length > 0 || l2a.length > 0) {
                chainNode.next = new ListNode();
                chainNode = chainNode.next;
            }
        }
    }
    
    if (tens) {
        if (returnNode.next == null)
            returnNode.next = new ListNode(1);
        
            chainNode.next = new ListNode(1);
    }
    
    if (chainNode.val == 0) {chainNode = null;}
    return returnNode;
};

//  03/27/2021 00:09	Accepted	232 ms	47.6 MB	javascript