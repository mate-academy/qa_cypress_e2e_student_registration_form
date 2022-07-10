const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        e2e: {
            baseUrl: 'https://demoqa.com/automation-practice-form', 
            numTestsKeptInMemory: 10
        }, 
        
        // defaultCommandTimeout: 4000, 
        // retries: {
        //     runMode: 3, 
        //     openMode: 3
        // }
    },
})