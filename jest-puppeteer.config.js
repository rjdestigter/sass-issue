module.exports = {
  server: {
    command: `npm run start:e2e`,
    port: 7777,
    launchTimeout: 60000,
    usedPortAction: 'ignore'
  },
  launch: {
    // executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    headless: process.env.HEADLESS === 'FALSE' ? false : true,
    slowMo: 0,
    args: /true/i.test(process.env.LOCAL_CI) ? [] : ['--no-sandbox', '--disable-setuid-sandbox']
  }
}
