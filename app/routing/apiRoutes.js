const path = require('path');
let peopleData = require('../data/friends.js');

module.exports = function apiRoutes(app){
    app.get('/api/friends', (req, res) => {
        res.json(peopleData);
    });

    app.post('/api/friends', (req, res) => {
        
        let user = req.body
        let userScore = user.scores
        let bestDif = 50;
        let bestIndex = 0;
        for (let i = 0; i < peopleData.length; i++) {
            let friendScore = peopleData[i].scores;
            let temp = 0;
            for (let j = 0; j < friendScore.length; j++) {
                temp += Math.abs(parseInt(friendScore[j])-parseInt((userScore[j])))
            }
            if(temp < bestDif){
                bestDif = temp;
                bestIndex = i;
            }
        }
        peopleData.push(req.body);
        res.json(peopleData[bestIndex])
    })
};