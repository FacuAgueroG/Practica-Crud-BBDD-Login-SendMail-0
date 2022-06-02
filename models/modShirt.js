const pool = require("../databases/db");

const getShirts = async () => {
    try {
        const query = "select * from camisetas"
        const rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
};


const getShirt = async (id) =>{
    try {
        const query = "select * from camisetas where id =?"
        const row = await pool.query(query, [id]);
        return row; 
    } catch (error) {
        console.log(error)
    }
};

const addShirt = async (data) => {
    try {
        const query = "insert into camisetas set?"
        const rows = await pool.query(query, [data]);
        return rows;
    } catch (error) {
        console.log(error);
    }
};

const modifyShirt = async (data, id) => {
    try {
        const query = "update camisetas set ? where id = ?";
        const row = await pool.query(query, [data, id])
        return row;
    } catch (error) {
        console.log(error)
    }
};

const deleteShirt = async (id) => {
        const query = "delete from camisetas where id =?"
        const row = await pool.query(query, [id]);
        return row; 
};

module.exports = {getShirts, addShirt, getShirt, deleteShirt, modifyShirt};