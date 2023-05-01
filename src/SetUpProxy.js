const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    
    app.use(
            createProxyMiddleware('/endpoint',
                        { 
                            target: 'https://unusual-elk-flannel-nightgown.cyclic.app', 
                            secure:  false,
                            changeOrigin: true 
                        })
    )      
};
