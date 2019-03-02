const db = require('../../common/database');
// const redis = require('../../lib/redis');
const mapping = require('../../common/mapping');
// const openRedis = require('../../config').openRedis;
class MarkerModel {

    /**
     * [getMarker 根据经纬度查询服务点]
     * @param {number} latitude 
     * @param {number} longitude 
     */
    async getMarker(latitude, longitude) {
        let sql = mapping.getMarker;
        let result = await db.query(sql);
        return result;
    }

    /**
     * [getHots 根据城市获取热门推荐]
     * @param {string} city 
     */
    async getHots(city) {
        let sql = mapping.getHots;
        let result = await db.query(sql, [city]);
        return result;
    }

    /**
     * [getDetailByMid 根据商户id查询商户详情]
     * @param {String} mid 
     */
    async getDetailByMid(mid) {
        let sql = mapping.getDetailByMid;
        let result = await db.query(sql, [mid]);
        return result;
    }

    // async getMarker(latitude, longitude) {
    //     let result = [];
    //     if (openRedis) {
    //         let res =  await redis.getAsync('marker');
    //         if (res[0] === null) {
    //             result = await this.getMarkerByDB();
    //         } else {
    //             result = JSON.parse(res);
    //         }
    //     } else {
    //         result = await this.getMarkerByDB();
    //     }
    //     return result;
    // }

    /**
     * [getMarkerByDB 根据经纬度从db查询服务点]
     */
    // async getMarkerByDB() {
    //     let sql = mapping.getMarker;
    //     let result = await db.query(sql);
    //     openRedis && redis.set('marker',JSON.stringify(result));
    //     return result;
    // }
}

module.exports = new MarkerModel();