const DOC_ALLURE_CONFIG = {
    CLEAN_REPORT_DIR: false,
    COPY_HISTORY: true,
    RESULT_DIR: '/allure/allure-results',
    REPORT_DIR: '/allure/allure-report',
    META: {
        STORY_ID: 'STORY',
        TEST_ID: 'ID',
        SEVERITY: 'normal',
        TEST_RUN: 'TEST_RUN'
    },
    STORY_LABEL: 'TestCafe Training',
    STORY_URL: 'https://jira.example.ca/browse/{{ID}}',
    TEST_LABEL: 'DEMO QA Tests',
    TEST_URL: 'https://jira.example.ca/secure/Tests.jspa#/testCase/{{ID}}',
    labels: {
        screenshotLabel: 'Screenshot',
        browserLabel: 'Browser',
        userAgentLabel: 'User Agent',
        allureStartMessage: 'Allure reporter started...',
        allureClosedMessage: 'Allure reporter closed...'
    }
};
 
module.exports = DOC_ALLURE_CONFIG;
