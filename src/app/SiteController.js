class SiteController {

    index(req, res) {
        res.render('home');
    }

    search(req, res) {
        res.send('search page');
    }
}

module.exports = new SiteController;