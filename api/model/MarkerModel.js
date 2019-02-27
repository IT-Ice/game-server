const BaseModel = require('./BaseModel');

class MarkerModel extends BaseModel {
    constructor() {
        super();
    }

    /**
     * [getMarker 根据经纬度查询服务点]
     * @param {number} latitude 
     * @param {number} longitude 
     */
    async getMarker(latitude, longitude) {
        let sql = `SELECT
                        id ,
                        NAME ,
                        avatar ,
                        start_hours ,
                        end_hours ,
                        address ,
                        detail_address ,
                        latitude ,
                        longitude ,
                        banner_id ,
                        large_num ,
                        large_price ,
                        middle_num ,
                        middle_price ,
                        merchant_id,
                        large_current,
                        middle_current
                    FROM
                        marker`;
        let result = await this.query(sql);
        return result;
    }

    /**
     * [getHots 根据城市获取热门推荐]
     * @param {string} city 
     */
    async getHots(city) {
        let sql = `SELECT
                        id ,
                        province ,
                        city ,
                        country ,
                        name ,
                        latitude ,
                        longitude
                    FROM
                        hot
                    WHERE
                        city = ?`
        let result = await this.query(sql, [city]);
        return result;
    }
}

module.exports = new MarkerModel();