const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const data = {
  name: chalk.red('              CACI International Inc'),
  work: chalk.blue('An information solutions and services company\n              in support of national security missions and\n              government transformation for Intelligence,\n              Defense, and Federal Civilian customers.'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('CACIIntl'),
  github: chalk.gray('https://github.com/') + chalk.cyan('CACI-International'),
  linkedin: chalk.gray('https://linkedin.com/company/') + chalk.cyan('caci-international-inc'),
  web: chalk.cyan('https://caci.com'),
  hiring: chalk.red('              We\'re hiring!\n              Find your innovation and imagination at https://careers.caci.com'),
  npx: chalk.white('npx') + ' ' + chalk.white('caci'),
  labelWork: chalk.gray.bold('      About:'),
  labelTwitter: chalk.gray.bold('    Twitter:'),
  labelnpm: chalk.gray.bold('        npm:'),
  labelGitHub: chalk.gray.bold('     GitHub:'),
  labelLinkedIn: chalk.gray.bold('   LinkedIn:'),
  labelWeb: chalk.gray.bold('        Web:'),
  labelCard: chalk.white('       Card:')
}

const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const hiring = `${data.hiring}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading +
               newline + newline +
               working + newline + newline +
               twittering + newline +
               githubing + newline +
               linkedining + newline +
               webing + newline + newline +
               hiring + newline + newline +
               carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
