/**
 * [API 返回格式处理]
 * @param {Number} code 
 * @param {String} message 
 * @param {Object} data 
 */
function returnValue(code = 0, message = 'success', data) {
    return {
        code: code,
        message: message,
        currentTime: new Date().getTime(),
        data: data
    }
}

module.exports = {
    returnValue: returnValue
}