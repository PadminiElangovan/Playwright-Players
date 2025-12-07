import ExcelJS from 'exceljs';
import path from 'path';

//const EXCEL_PATH = path.join(__dirname, process.env.EXCEL_PATH || 'TestData.xlsx');
const EXCEL_PATH = path.join(process.cwd(), process.env.EXCEL_PATH || 'TestData/testData.xlsx');

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




// //------------------------------------------------------------------------------------------------------
// import ExcelJS from 'exceljs';
// import path from 'path';
// import { getScenarioTagsMap } from '../utils/FeatureParser.js';

// const EXCEL_PATH = path.join(__dirname, process.env.EXCEL_PATH);

// // Load all feature file tags once
// const featuresDir = path.join(process.cwd(), 'featureFiles');
// const scenarioTagsMap = getScenarioTagsMap(featuresDir);

// let cachedWorkbook = null;

// export const TestData_Fixture = {
//   testData: async ({}, use, testInfo) => {

//     const scenarioName = testInfo.title.trim();
//     let tags = [];

   
//     for (const key of Object.keys(scenarioTagsMap)) {
//       const regexKey = key.replace(/<[^>]+>/g, '.*');   
//       const regex = new RegExp(`^${regexKey}$`, 'i');
//       if (regex.test(scenarioName)) {
//         tags = scenarioTagsMap[key].map(t => t.toLowerCase());
//         break;
//       }
//     }

//     // Check @data tag
//     const isDataDriven = tags.includes('data');

//     if (!isDataDriven) {
//       console.log(`No @data tag → Skipping Excel for scenario: ${scenarioName}`);
//       await use({});
//       return;
//     }

//     //  Load Excel workbook once
//     if (!cachedWorkbook) {
//       cachedWorkbook = new ExcelJS.Workbook();
//       await cachedWorkbook.xlsx.readFile(EXCEL_PATH);
//     }

//     const workbook = cachedWorkbook;
//     let matchedRow = null;

//     // Search entire workbook in all sheets
//     for (const sheet of workbook.worksheets) {

//       const headers = sheet.getRow(1).values.map(h =>
//         h ? String(h).trim() : ''
//       );

//       // Normalize header names (case-insensitive)
//       const headerIndices = {};
//       headers.forEach((header, index) => {
//         if (header) headerIndices[header.toLowerCase()] = index;
//       });

//       // Must have a testCase column
//       const testCaseColIdx =
//         headerIndices['testcase'] ||
//         headerIndices['testcaseid'] ||
//         headerIndices['test case'] ||
//         null;

//       if (!testCaseColIdx) continue;

//       sheet.eachRow((row, rowNumber) => {
//         if (rowNumber === 1) return;

//         const rowObj = {};

//         headers.forEach((header, i) => {
//           if (header) {
//             const cellValue = row.getCell(i).value;
//             rowObj[header] = cellValue ? String(cellValue).trim() : '';
//           }
//         });

//         const testCaseCell = rowObj[headers[testCaseColIdx]];

//         if (
//           testCaseCell &&
//           testCaseCell.toLowerCase() === scenarioName.toLowerCase()
//         ) {
//           matchedRow = rowObj;
//         }
//       });

//       if (matchedRow) break;
//     }

//     if (!matchedRow) {
//       console.warn(`No Excel match found for: ${scenarioName}`);
//       await use({});
//       return;
//     }

//     console.log(` Excel Data Loaded for scenario: ${scenarioName}`);
//     console.log(matchedRow);

//     await use(matchedRow);
//   },
// };
