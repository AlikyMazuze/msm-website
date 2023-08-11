import mysql from "@/mysqlConnection"
export  async function POST(req){
    const {prev, paymentMethod} = await req.json();
    console.log(prev, paymentMethod)
    const rows = await mysql.query("INSERT INTO `msm_app`.`MARCACOES` (`nome`, `email`, `tel`, `horario`, dia, `pack`, `pay_method`) VALUES (?, ?, ?, ?,?, ?, ?);",[
        prev.nome,
        prev.email,
        Number.parseInt(prev.telefone),
        prev.horario.e,
        prev.horario.dia,
        Number.parseInt(prev.pacote),
        Number.parseInt(paymentMethod)
    ])
    console.log(rows)
    return new Response("Sucesso", {
        status: 201
    })
}