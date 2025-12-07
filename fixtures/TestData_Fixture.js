import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';

const EXCEL_PATH = process.env.EXCEL_PATH || path.join(process.cwd(), 'testData', 'testData.xlsx');

if (!fs.existsSync(EXCEL_PATH)) {
  console.warn(`[Fixture] Excel file not found at: ${EXCEL_PATH}. Proceeding without test data.`);
}

let cachedWorkbook = null;

export const TestData_Fixture = {
  testData: async ({}, use, testInfo) => {
    if (!fs.existsSync(EXCEL_PATH)) {
      await use({});
      return;
    }

    const scenarioName = testInfo.title.trim();

    if (!cachedWorkbook) {
      cachedWorkbook = new ExcelJS.Workbook();
      await cachedWorkbook.xlsx.readFile(EXCEL_PATH);
    }

    let matchedRow = null;

    for (const sheet of cachedWorkbook.worksheets) {
      const headers = sheet.getRow(1).values.map(h => (h ? String(h).trim() : ''));
      const headerIndices = {};
      headers.forEach((header, i) => { if (header) headerIndices[header.toLowerCase()] = i; });

      const testCaseColIdx =
        headerIndices['testcase'] ??
        headerIndices['testcaseid'] ??
        headerIndices['test case'];

      if (testCaseColIdx === undefined) continue;

      for (let rowNumber = 2; rowNumber <= sheet.rowCount; rowNumber++) {
        const row = sheet.getRow(rowNumber);
        const rowObj = {};
        headers.forEach((header, i) => {
          if (header) {
            const cellValue = row.getCell(i).value;
            rowObj[header] = cellValue != null ? String(cellValue).trim() : '';
          }
        });

        const testCaseCell = rowObj[headers[testCaseColIdx]];
        if (testCaseCell && testCaseCell.toLowerCase() === scenarioName.toLowerCase()) {
          matchedRow = rowObj;
          break;
        }
      }

      if (matchedRow) break;
    }

    await use(matchedRow || {});
  },
};






























