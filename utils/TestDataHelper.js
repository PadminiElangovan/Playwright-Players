
import { TestData_Fixture } from '../fixtures/TestData_Fixture.js';

export const getTestData = async (keyword = '', testInfo = { title: '' }) => {
  let data;
  await TestData_Fixture.testData({}, async (row) => {
    data = row;
  }, testInfo, keyword);
  return data;
};
