"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sales_order_1 = require("./sales/domain/model/sales-order");
console.log("HelloDOlly");
console.log('Objected-Oriented Section');
const salesOrder = new sales_order_1.SalesOrder('C001');
salesOrder.addItem('P001', 2, 100);
salesOrder.addItem('P002', 1, 200);
console.log(`Sales Order Total price is ${salesOrder.calculateTotalPrice()}`);
