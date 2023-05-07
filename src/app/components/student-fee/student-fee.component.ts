import { Component } from '@angular/core';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-student-fee',
  templateUrl: './student-fee.component.html',
  styleUrls: ['./student-fee.component.css'],
})
export class StudentFeeComponent {
  displayedColumns = [
    'id',
    'chargeType',
    'payableFor',
    'issueDate',
    'dueAmount',
    'dueDate',
    'payedAmount',
    'balance',
    // 'payments',
    'actions',
  ];
  displayedColumnsFooter = ['total'];
  dataSource: InvoicePaymentView[] = INVOICE_PAYMENT_DATA;
  getSum() {
    return this.dataSource
      .map((t) => t.balance)
      .reduce((acc, value) => acc + value);
  }
}
const INVOICE_PAYMENT_DATA: InvoicePaymentView[] = [
  {
    id: 1,
    issueDate: new Date(),
    dueDate: new Date(),
    chargeType: 'Semester Fee',
    payableFor: '1st Semester',
    dueAmount: 12500,
    payedAmount: 3000,
    balance: 9500,
  },
  {
    id: 2,
    issueDate: new Date(),
    dueDate: new Date(),
    chargeType: 'Semester Fee',
    payableFor: '2nd Semester',
    dueAmount: 12500,
    payedAmount: 2500,
    balance: 9500,
  },
];

interface InvoicePaymentView {
  id: number;
  issueDate: Date;
  dueDate: Date;
  chargeType: string;
  payableFor: string;
  dueAmount: number;
  payedAmount: number;
  balance: number;
}
