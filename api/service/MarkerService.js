/**
 * [markers 处理marker业务逻辑]
 * @param {Array} obj 
 */
function markers(obj) {
    let result = obj.map((item, index) => {
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
                end_houts: item.end_hours,
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
                        state: getBaggageStoreState(item.large_num, item.large_current),
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
 * @param {number} max 
 * @param {number} current 
 */
function getBaggageStoreState(max, current) {
    return Number(max) - Number(current) === 0 ? 0 : 1;
}

/**
 * [hots 热门推荐]
 * @param {Array} obj 
 */
function hots(obj) {
    let result = obj.map((item, index) => {
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

/**
 * [detail  商户详情]
 * @param {Array} obj 
 */
function detail(obj) {
    if (obj.length === 0) {
        return {};
    }
    let detail = obj[0];
    let banner = [obj[0].pic1 || '', obj[0].pic2 || '', obj[0].pic3 || ''].filter(item => {
        return item !== '';
    });
    let baggage = {
        middle_sized: {
            max: detail.middle_num,
            current: detail.middle_current,
            state: getBaggageStoreState(detail.middle_num, detail.middle_price),
            price: Number(detail.middle_price)
        },
        large_sized: {
            max: detail.large_num,
            current: detail.large_current,
            state: getBaggageStoreState(detail.large_num, detail.large_current),
            price: Number(detail.large_price)
        }
    }
    let result = {
        name: detail.name,
        avatar: detail.avatar,
        start_hours: detail.start_hours,
        end_hours: detail.end_hours,
        address: detail.address,
        detail_address: detail.detail_address,
        latitude: Number(detail.latitude),
        longitude: Number(detail.longitude),
        banner: banner,
        baggage: baggage
    }
    return result;
}

module.exports = {
    markers,
    hots,
    detail
}