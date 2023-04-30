const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    
    app.use(
            createProxyMiddleware('/http://localhost:3000',
                        { 
                            target: 'https://unusual-elk-flannel-nightgown.cyclic.app', 
                            secure:  false,
                            changeOrigin: true 
                        })
    )      
};
