// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create an object of type RowElement
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
};

// Insert the row and get its ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Update the row
const updatedRow: RowElement = {
    ...row,
    age: 23,
};
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
