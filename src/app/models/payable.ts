export interface Payable {
  id: number;
  chargeType: string;
  payableFor: string;
  dueAmount: number;
}
