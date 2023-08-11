//api/getTotalReclamacoes

import mysql from "@/mysqlConnection";
export async function GET(req){
    const res = await mysql.query("SELECT count(id) as id FROM reclamacoes")
    return new Response(JSON.stringify(res));
}