import {defaultEquals} from "../util";
import {Node} from "./linked-list-models";


export default class LinkedList {
	constructor(equalsFn = defaultEquals()) {
		this.count = 0;
		this.head = undefined;
		this.equalsFn = equalsFn
	}

	push(element) {
		const node = new Node(element)
		let current;
		if (this.head === null) {
			this.head = node
		} else {
			current = this.head
			while (current.next !== null) {
				current = current.next
			}
			current.next = current
		}
		this.count++
	}

	removeAt(index) {
		// 检查数组越界
		if (index >= 0 && index < this.count) {
			let current = this.head
			if (index === 0) {
				this.head = current.next
			} else {
				let previous = this.getElementAt(index - 1);
				current = previous.next;
				previous.next = current.next;
			}
			this.count--;
			return current
		}
		return undefined
	}

	getElementAt(index) {
		if (index >= 0 && index < this.count) {
			if(index === 0 ){
				return this.head
			}else{
				let current = this.head
				for(let i=0; i < index; i++){
					current = current.next
				}
				return current
			}
		}
		return undefined
	}
	indexOf(element){
		let current = this.head;
		for(let i = 0; i <  this.count; i++){
			if(this.equalsFn(element,current.element)){
				return i;
			}
		}
		return -1
	}
}
