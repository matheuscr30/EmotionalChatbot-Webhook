module.exports = function(application){
    application.post('/api', function (req, res) {
        application.app.controllers.index.conversation(application, req, res);
    });
};