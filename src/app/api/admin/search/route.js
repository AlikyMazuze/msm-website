//api/admin/search
import mysql from "@/mysqlConnection";
export async function POST(req){
    const {value} = await req.json()
    try {
        const res = await mysql.query(`SELECT * FROM marcacoes 
        WHERE
        email LIKE ? OR
        tel LIKE ? OR
        pack = ? `, ["%"+value+"%","%"+value+"%", value])
    
        return new Response(JSON.stringify(res),{status: 200}); 
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify("Um erro ocorreu."),{status: 500});         
    }
    
}