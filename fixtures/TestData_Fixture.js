import ExcelJS from 'exceljs';
import path from 'path';

//const EXCEL_PATH = path.join(__dirname, process.env.EXCEL_PATH || 'TestData.xlsx'); // runs only in local not CI/CD
const EXCEL_PATH = path.join(process.cwd(), 'TestData', process.env.EXCEL_PATH || 'testData.xlsx');


let cachedWorkbook = null;

export const TestData_Fixture = {
  testData: async ({}, use, testInfo) => {
    const scenarioName = testInfo.title.trim();

    

    // Load Excel workbook once
    if (!cachedWorkbook) {
      cachedWorkbook = new ExcelJS.Workbook();
      await cachedWorkbook.xlsx.readFile(EXCEL_PATH);
    }

    const workbook = cachedWorkbook;
    let matchedRow = null;

    // Search all sheets
    for (const sheet of workbook.worksheets) {
      const headers = sheet.getRow(1).values.map(h => (h ? String(h).trim() : ''));
      const headerIndices = {};
      headers.forEach((header, i) => { if (header) headerIndices[header.toLowerCase()] = i; });

      // Identify TestCase/TestCaseID column
      const testCaseColIdx =
        headerIndices['testcase'] ||
        headerIndices['testcaseid'] ||
        headerIndices['test case'] ||
        null;

      if (!testCaseColIdx) continue;

      sheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // skip header

        const rowObj = {};
        headers.forEach((header, i) => {
          if (header) {
            const cellValue = row.getCell(i).value;
            rowObj[header] = cellValue ? String(cellValue).trim() : '';
          }
        });

        const testCaseCell = rowObj[headers[testCaseColIdx]];
        if (testCaseCell && testCaseCell.toLowerCase() === scenarioName.toLowerCase()) {
          matchedRow = rowObj;
        }
      });

      if (matchedRow) break;
    }

    if (!matchedRow) {
      console.log(`No Excel data found for scenario: "${scenarioName}", proceeding without data.`);
      await use({}); // Return empty object if no match
      return;
    }

    console.log(`Excel Data Loaded for scenario: "${scenarioName}"`, matchedRow);
    await use(matchedRow);
  },
};







