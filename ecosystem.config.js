module.exports = {
    apps: [
        {
            name: 'gotoperu-travel',
            port: '4000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
