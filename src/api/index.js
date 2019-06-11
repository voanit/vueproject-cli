let HOST = process.env.HOST;
HOST = HOST === 'prod' ? 'api' : 'dev';
const baseUrl = 'https://' + HOST + '.xuebastudy.com';
let api = {
    baseUrl: baseUrl,
}
export default api
