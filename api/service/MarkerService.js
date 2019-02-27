
/**
 * [markers 处理marker业务逻辑]
 * @param {obj} markers 
 */
function markers(markers) {
    let result = markers.map((item, index) => {
        let marker = {
            iconPath: '../../images/store@3x.png',
            id: item.id,
            latitude: Number(item.latitude),
            longitude: Number(item.longitude),
            width: 35,
            height: 41,
            detail: {
                name: item.NAME,
                avatar: item.avatar,
                status: 1,
                start_hours: item.start_hours,
                end_houts: item.end_houts,
                banner_id: item.banner_id,
                merchant_id: item.merchant_id,
                baggage: {
                    middle_sized: {
                        max: item.middle_num,
                        current: item.middle_current,
                        state: getBaggageStoreState(item.middle_num, item.middle_current),
                        price: Number(item.middle_price)
                    },
                    large_sized: {
                        max: item.large_num,
                        current: item.large_current,
                        state: getBaggageStoreState(item.middle_num, item.middle_current),
                        price: Number(item.large_price)
                    }   
                }
            }
        }
        return marker;
    });
    return result;
}

/**
 * [getBaggageStoreState 计算商户存储状态]
 * @param {*} max 
 * @param {*} current 
 */
function getBaggageStoreState(max, current) {
    return Number(max) - Number(current) === 0 ? 0 : 1;
}

/**
 * [hots 热门推荐]
 * @param {string} hot 
 */
function hots (hot) {
    let result = hot.map((item, index) => {
        let hot = {
            id: item.id,
            name: item.name,
            province: item.province,
            city: item.city,
            country: item.country,
            latitude: Number(item.latitude),
            longitude: Number(item.longitude)
        }
        return hot;
    });
    return result;
}

module.exports = {
    markers,
    hots
}