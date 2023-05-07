import {Payable} from "./payable";

export interface Invoice {
  id: number;
  issueDate: Date;
  dueDate: Date;
  billedTo: any;
  billedFor: Payable;
}
