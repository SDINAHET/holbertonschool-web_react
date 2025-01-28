/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and store the new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Call the updateRow function
CRUD.updateRow(newRowID, updatedRow);

// Call the deleteRow function
CRUD.deleteRow(newRowID);
