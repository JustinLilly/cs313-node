function calculateRate(mailType, weight) {

    var lookup = {
        stamped:  {'1': 0.55, '2': 0.7, '3': 0.85, '3.5': 1},
        metered: {'1': 0.5, '2': 0.65, '3': 0.8, '3.5': 0.95},
        flats: {'1': 1, '2': 1.2, '3': 1.4, '4': 1.6, '5': 1.8, '6': 2, '7': 2.2, '8': 2.4, '9': 2.6, '10': 2.8, '11': 3, '12': 3.2, '13': 3.4},
        firstClass: {'1': 2.65, '2': 3.85, '3': 4.05, '4': 4.25, '5': 4.45, '6': 4.65, '7': 4.85, '8': 5.05, '9': 5.25, '10': 5.45, '11': 5.65, '12': 5.85, '13': 6.05, '16': 8.85, '32': 10.75}
    }

    var rate = lookup[mailType][weight];

    return rate;
}

function doMaths(req, res) {
    console.log("Doing maths from a different file");
    var weight = req.query.weight;
    var mailType = req.query.mailType;
    var rate = calculateRate(mailType, weight);
    var stuff = {weight: weight, mailType: mailType, rate: rate};
    res.render('results', stuff);
}


module.exports = {doMaths: doMaths};