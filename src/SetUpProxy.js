const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    
    app.use(
            createProxyMiddleware('/endpoint',
                        { 
                            target: 'https://thankful-twill-colt.cyclic.app', 
                            changeOrigin: true 
                        })
    )      
};
