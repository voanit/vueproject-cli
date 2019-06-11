let HOST = process.argv.splice(2)[0] || 'prod';
console.log(HOST);
module.exports = {
  NODE_ENV: '"production"',
  HOST: '"' + HOST + '"'
}
