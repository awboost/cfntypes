const fs = require('fs');
const getLatestSpec = require('./getLatestSpec');

const { awsResourceSpecificationVersion: pkgVer } = JSON.parse(
  fs.readFileSync('package.json'),
);

getLatestSpec().then(
  ({ ResourceSpecificationVersion: awsVer }) => {
    console.log(`Current version ${pkgVer}, latest version ${awsVer}`);
    process.exit(pkgVer === awsVer ? 1 : 0);
  },
  err => {
    console.error(err);
    process.exit(2);
  },
);
