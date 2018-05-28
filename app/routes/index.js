module.exports = function(application){
    application.post('/api', function (req, res) {
        application.controllers.index.conversation(application, req, res);
    });
};
