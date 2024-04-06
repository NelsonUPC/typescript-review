import { v4 as uuidv4 } from 'uuid';
import {SalesOrderItem} from "./sales-order-item";
export class SalesOrder{
    private readonly _customerId: string;
    private readonly _id: string;
    private _items: SalesOrderItem[];

    constructor(customerId: string) {
        this._customerId = customerId;
        this._id=uuidv4();
        this._items= [];
    }

    get customerId(): string {
        return this._customerId;
    }

    get id(): string {
        return this._id;
    }

    addItem( productId: string, quantity:number, unitPrice:number):void{
        this._items.push(new SalesOrderItem(this._id, productId, quantity, unitPrice));
    }
    calculateTotalPrice(): number{
        return this._items.reduce((total, item)=> total+item.calculateItemPrice(), 0);
    }
}