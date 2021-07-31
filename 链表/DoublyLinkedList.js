import LinkedList from "./LinkedList";
import {defaultEquals} from "../util";

export default class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals()) {
        super(equalsFn);
        this.tail = undefined;
    }

    insert(element, index) {
        //  判断数组是否越界
        if (index >= 0 && index <= this.count) {
            const node = new DoublyLinkedList(element);
            let current = this.head
            if(index === 0){
                if(this.head === null){
                    this.head = node;
                    this.tail = node;
                }else{
                    node.next = current
                    current.prev = node
                    this.head = node;
                }
            }else if(index === this.count){
                current = this.tail;
                current.next = node;
                node.prev = current
                this.tail = node
            }else{
                let previous = this.getElementAt(index- 1);
                current = previous.next;
                current.prev = node;
                node.next = current;
                node.prev = previous;
                previous.next = node;
            }
            this.count++
            return true
        }
        return false
    }
}