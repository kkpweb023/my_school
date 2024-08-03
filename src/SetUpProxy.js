const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    
    app.use(
            createProxyMiddleware('/endpoint',
                        { 
                            target: 'https://notesdatabase-ycw0.onrender.com', 
                            secure:  false,
                            changeOrigin: true 
                        })
    )      
};
