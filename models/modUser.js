const pool = require("../databases/db");
const md5 = require("md5");

const getUser = async (user, clave) => {
    const query = "select * from authuser where user = ? and clave = ?";
    const row = await pool.query (query,[user, md5(clave)]);
    return row[0];
};

module.exports = {getUser};