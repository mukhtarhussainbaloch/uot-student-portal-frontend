import { Component } from '@angular/core';
import {Payment} from "../../models/payment";

@Component({
  selector: 'app-payment.ts',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  displayedColumnsTransaction = ['id', 'date', 'amount','challanNo', 'bank', 'branch','challanPhoto'];
  dataSourceTransaction: Payment[] = PAYMENTS;

}

const PAYMENTS: Payment[] = [
  {
    id: 1,
    date: new Date().toLocaleDateString(),
    amount: 5000,
    challanNo: "11203",
    bank: "HBL",
    branch: "Turbat",
    challanPhoto: "photo-address"
  },
  {
    id: 2,
    date: new Date().toLocaleDateString(),
    amount: 5000,
    challanNo: "11203",
    bank: "HBL",
    branch: "Turbat",
    challanPhoto: "photo-address"
  }

]
