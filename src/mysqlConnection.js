import { createPool } from 'mysql2/promise';


const dbParams = {
    host: 'localhost',
    user:"root",
    password:"EuTeAmo1000x",
    port:3306,
    database: "msm_app" 
}
const mysql = createPool(dbParams)
mysql.getConnection((err, res)=>{
    if (err) throw err;
    console.log(res)
})
export default mysql
