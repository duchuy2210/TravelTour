
class homeConttroller {
    show(req, res, next) { 
        res.render('index')    
    }
    duchuy(req, res, next) {
        res.render('duchuy')
    }
}

module.exports = new homeConttroller;