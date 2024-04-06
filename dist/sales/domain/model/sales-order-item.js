"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItem = void 0;
const uuid_1 = require("uuid");
class SalesOrderItem {
    constructor(orderId, productId, quantity, unitPrice) {
        this._orderId = orderId;
        this._itemId = (0, uuid_1.v4)();
        this._productId = productId;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
    }
    get itemId() {
        return this._itemId;
    }
    get productId() {
        return this._productId;
    }
    get quantity() {
        return this._quantity;
    }
    get unitPrice() {
        return this._unitPrice;
    }
    calculateItemPrice() {
        return this._quantity * this._unitPrice;
    }
}
exports.SalesOrderItem = SalesOrderItem;
