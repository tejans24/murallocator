module.exports = function(app, passport) {
    app.get('/api',
      (req, res) => {
        return res.json({api: "API Endpoint"})
    });
}
