module.exports = {
    apps: [
        {
            name: 'gotoperu-travel',
            port: '3001',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
