module.exports = {
    'GET /': require('./frontend/index2.js'),
    'POST /getdata': require('./backend/getdata.js'),
    'GET /frontend/style.css': require('./frontend/css.js'),
    'GET /frontend/index.js': require('./frontend/js.js')
};
