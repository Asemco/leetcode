class Solution {
    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {

        val head = ListNode(0)

        var copyOfL1 = l1
        var copyOfL2 = l2

        var tempListNode = head

        var carryOver = 0;


        while (copyOfL1 != null || copyOfL2 != null) {
            val node1 = copyOfL1?.`val` ?: 0
            val node2 = copyOfL2?.`val` ?: 0

            var sum = node1 + node2 + carryOver

            carryOver = sum / 10

            tempListNode.next = ListNode(sum % 10)
            tempListNode = tempListNode.next!!
            copyOfL1 = copyOfL1?.next
            copyOfL2 = copyOfL2?.next
        }

        if (carryOver > 0) {
            tempListNode.next = ListNode(carryOver)
        }


        return head.next
    }
}

class ListNode(var `val`: Int) {
    var next: ListNode? = null
}