module.exports = {
    getMarker: `SELECT id , NAME , avatar , start_hours , end_hours , address , detail_address , latitude , longitude , banner_id , large_num , large_price , middle_num , middle_price , merchant_id , large_current , middle_current FROM marker`,
    getHots: `SELECT id, province, city, country, name, latitude, longitude FROM hot WHERE city = ?`,
    getDetailByMid: `SELECT a. name , a.avatar , a.start_hours , a.end_hours , a.address , a.detail_address , a.latitude , a.longitude , a.banner_id , a.large_num , a.middle_num , a.large_price , a.middle_price , a.large_current , a.middle_current , b.pic1 , b.pic2 , b.pic3 FROM marker a left join banner b on a.banner_id = b.id WHERE merchant_id = ?`,
    login: `SELECT user_id as userId , nick_name as nickName , gender , avatar as avatarUrl FROM user WHERE user_id = ?`,
    register: `INSERT INTO USER( user_id , open_id , union_id , nick_name , avatar , gender , city , province , country) VALUES(? , ? , ? , ? , ? , ? , ? , ? , ?)`,
    
}