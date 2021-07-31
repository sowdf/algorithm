export class Node{
	constructor(element) {
		this.element = element;
		this.next = undefined;
	}
}
export class DoublyLinked extends Node{
	constructor(element,next,prev) {
		super(element,next);
		this.prev = prev
	}
}
