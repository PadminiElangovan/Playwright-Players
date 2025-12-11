

import fs from "fs";
import path from "path";

export default async () => {
  const RESULTS_DIR = path.resolve("allure-results");

  if (fs.existsSync(RESULTS_DIR)) {
    fs.rmSync(RESULTS_DIR, { recursive: true, force: true });
    console.log("Old allure-results deleted before test run");
  }
};
