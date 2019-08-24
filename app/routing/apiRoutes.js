const path = require('path');
let peopleData = require('../data/friends.js');

module.exports = function apiRoutes(app){
    app.get('/api/friends', (req, res) => {
        res.json(peopleData);
    });

    app.post('/api/friends', (req, res) => {
        peopleData.push(req.body);
        let user = req.body
        let userScore = JSON.parse(user.scores)
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
            console.log(bestDif)
        }
        res.json(peopleData[bestIndex])
    })
};