const ThemeModel = require('../model/ThemeModel');

module.exports = {
    getTheme: (req, res, next) => {
        ThemeModel.getTheme(result => {
            res.send(result)
        });
    }
};