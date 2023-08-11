//api/getTotalMarcacoes

import mysql from "@/mysqlConnection";
export async function GET(req){
    const res = await mysql.query("SELECT count(id) as id FROM marcacoes")
    return new Response(JSON.stringify(res));
}