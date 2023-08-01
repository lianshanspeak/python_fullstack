moudle.exports = function(app){
    proxy('/api1',{
        target:'http://localhost:5000',
        changeOrigin:true,
        pathRewrite:{'^/api1':''}
    })
}