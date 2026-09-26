/*
install playwright
npm init playwright@latest

run test
npx playwright test tests/NavigationMethods.spec.ts --headed --project=chromium --workers=1
npx playwright test tests/getByText.spec.ts --project=chromium --workers=1

run test with specific testcase like login or P1
npx playwright test --grep "P1"

run with multiple tags
npx playwright test --grep "@login|@Smoke|@Regression"

run testcases except regression testcases
npx playwright test --grep-invert "@Regression"

run testcase in debug mode
npx playwright test tests/HandlingElements.spec.ts --debug

no.of test case list
npx playwright test --list  

retry
npx playwright test tests/HandlingElements.spec.ts --retries=1

*/