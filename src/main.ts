import {SalesOrder} from "./sales/domain/model/sales-order";

console.log("HelloDOlly");

console.log('Objected-Oriented Section');

const salesOrder = new SalesOrder('C001');
salesOrder.addItem('P001', 2, 100);
salesOrder.addItem('P002', 1, 200);
console.log(`Sales Order Total price is ${salesOrder.calculateTotalPrice()}`);

