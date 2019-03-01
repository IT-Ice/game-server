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

    async getDetailByMid(mid) {
        let sql = `SELECT
                a.name,
                a.avatar,
                a.start_hours,
                a.end_hours,
                a.address,
                a.detail_address,
                a.latitude,
                a.longitude,
                a.banner_id,
                a.large_num,
                a.middle_num,
                a.large_price,
                a.middle_price,
                a.large_current,
                a.middle_current,
                b.pic1,
                b.pic2,
                b.pic3
            FROM
                marker a left join banner b on a.banner_id = b.id
            WHERE
                merchant_id = ?`;
        let result = await this.query(sql, [mid]);
        return result;
    }
}

module.exports = new MarkerModel();