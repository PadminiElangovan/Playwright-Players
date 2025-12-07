import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const RESULTS_DIR = path.resolve("allure-results");
const REPORT_DIR = path.resolve("allure-report");

export default async () => {
  try {
    if (!fs.existsSync(RESULTS_DIR) || fs.readdirSync(RESULTS_DIR).length === 0) {
      console.warn("No allure-results found. Run tests first.");
      return;
    }

    // Delete old report folder only
    if (fs.existsSync(REPORT_DIR)) {
      fs.rmSync(REPORT_DIR, { recursive: true, force: true });
      console.log("Old Allure report deleted");
    }

    // Generate fresh report from results (quote paths)
    console.log("Generating Allure report...");
    execSync(`allure generate "${RESULTS_DIR}" --output "${REPORT_DIR}" --clean`, { stdio: "inherit" });

    // Open report on localhost (quote path)
    console.log("Opening Allure report in browser...");
    execSync(`allure open "${REPORT_DIR}" --host 127.0.0.1`, { stdio: "inherit" });

    console.log("Allure report successfully generated and opened.");
  } catch (err) {
    console.error("Error generating/opening Allure report:", err);
  }
};
