//api/getMarcacoes

import mysql from "@/mysqlConnection";
export async function GET(req){
    const res = await mysql.query("SELECT * FROM marcacoes")
    return new Response(JSON.stringify(res));
}