const friends = require('../app/data/friends');

app.get('/api/friends', (req, res) => {
    res.json(friends);

});

app.post('/api/friends', (req, res) =>{

});