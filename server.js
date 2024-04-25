const chalk = require('chalk')
const app = require('./app')

app.listen(4242, () => {
    console.log(chalk.bgYellow('server is running at port 4242'))
})