// task_3/js/crud.d.ts

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from "./interface";

// Declare the functions from crud.js
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
