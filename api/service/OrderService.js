
/**
 * [disposeOrders 处理订单数据]
 * @param {Object} obj 
 */
function disposeOrders(obj) {
    let order = obj.map(item => {
        let orderItem = {
            id: item.id,
            name: item.name,
            avatar: item.avatar,
            address: item.address,
            latitude: Number(item.latitude),
            longitude: Number(item.longitude),
            phone: item.phone,
            order_num: item.order_num,
            date: disposeDate(item.date),
            order_date: item.order_date,
            order_price: item.order_price,
            large_num: item.large_num,
            middle_num: item.middle_num,
            status: item.status
        }
        return orderItem;
    })
    return order;
}

/**
 * [disposeDate 处理日期]
 * @param {str} dateStr 
 */
function disposeDate(dateStr) {
    let temp = dateStr.split(',');
    let resArr = [];
    if (temp.length === 1) {
        resArr[0] = temp[0];
        resArr[1] = temp[0];
    } else {
        resArr[0] = temp[0];
        resArr[1] = temp[temp.length - 1];
    }
    return resArr;
}

module.exports = {
    disposeOrders
}