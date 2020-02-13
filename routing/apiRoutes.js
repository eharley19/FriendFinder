const friends = require('../app/data/friends');

module.exports = (app) => {

    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        console.log(req.body);
        var bestMatch = {};
        var userScores = req.body.scores;
        //loop through friends array and compare userScores with scores of each friends object.
        //calculate difference; determine which friend has the lowest difference.
        //push user data to friends array.
        //display bestMatch in modal on html

    });
}