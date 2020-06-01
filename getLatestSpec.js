const https = require('https');
const zlib = require('zlib');

const DefaultSpecUrl =
  'https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json';

module.exports = function(url = DefaultSpecUrl) {
  return new Promise((resolve, reject) => {
    const data = [];

    const req = https.request(
      url,
      {
        headers: {
          'accept-encoding': 'deflate, gzip',
        },
      },
      res => {
        let reader;
        const encoding = getHeader(res.headers, 'content-encoding');

        if (!encoding) {
          reader = res;
        } else if (encoding === 'gzip') {
          reader = res.pipe(zlib.createGunzip());
        } else if (encoding === 'deflate') {
          reader = res.pipe(zlib.createInflate());
        } else {
          reject(new Error(`can't process encoding ${encoding}`));
          return;
        }

        reader.on('data', chunk => {
          data.push(chunk);
        });

        reader.on('end', () => {
          try {
            const str = Buffer.concat(data).toString();
            const obj = JSON.parse(str);
            resolve(obj);
          } catch (err) {
            reject(err);
          }
        });
      },
    );

    req.on('error', reject);
    req.end();
  });
};

function getHeader(headers, key) {
  key = key.toLowerCase();

  for (const header in headers) {
    if (header.toLowerCase() === key) {
      const value = headers[header];
      if (Array.isArray(value)) {
        return value.join(', ');
      } else {
        return value;
      }
    }
  }
}
