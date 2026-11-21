const { createServer } = require('node:http');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

const root = resolve(__dirname, '../..');
const prefix = '/kiein-roland-website/';
const files = [
  ['', 'index.html', 'text/html'],
  ['script.js', 'script.js', 'application/javascript'],
  ['styles.css', 'styles.css', 'text/css'],
];
const assets = new Map(files.map(([route, file, type]) => [
  prefix + route,
  { body: readFileSync(resolve(root, file)), type: type + '; charset=utf-8' },
]));

createServer((request, response) => {
  const asset = assets.get(request.url.split('?', 1)[0]);
  if (!asset) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, { 'Content-Type': asset.type });
  response.end(asset.body);
}).listen(Number(process.argv[2]), '127.0.0.1');
