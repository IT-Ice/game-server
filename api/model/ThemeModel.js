const BaseModel = require('./BaseModel');

class ThemeModel extends BaseModel {
    constructor() {
        super();
    }

    getTheme(callback) {
        let sql = `SELECT * from theme`;
        this.query(sql,{},(err, result, fileds) => {
            callback && callback(result)
        });
    }
}

module.exports = new ThemeModel();