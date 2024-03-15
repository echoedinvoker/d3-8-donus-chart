import { Expense } from "./expense";
import { Id } from "./id";

export interface ExpenseWithId extends Expense, Id { }
