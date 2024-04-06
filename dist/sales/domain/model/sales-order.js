"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrder = void 0;
const uuid_1 = require("uuid");
const sales_order_item_1 = require("./sales-order-item");
class SalesOrder {
    constructor(customerId) {
        this._customerId = customerId;
        this._id = (0, uuid_1.v4)();
        this._items = [];
    }
    get customerId() {
        return this._customerId;
    }
    get id() {
        return this._id;
    }
    addItem(productId, quantity, unitPrice) {
        this._items.push(new sales_order_item_1.SalesOrderItem(this._id, productId, quantity, unitPrice));
    }
    calculateTotalPrice() {
        return this._items.reduce((total, item) => total + item.calculateItemPrice(), 0);
    }
}
exports.SalesOrder = SalesOrder;
