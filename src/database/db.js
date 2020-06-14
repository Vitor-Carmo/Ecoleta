//importar a dependencia do sqlite 
const sqlite3 = require("sqlite3").verbose()

//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utlizar objeto banco de dados para nossas operações
//db.serialize(() =>{
    // 1criar a tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT
    //         , image TEXT
    //         , name TEXT
    //         , address TEXT
    //         , address2 TEXT
    //         , state TEXT
    //         , city TEXT
    //         , items TEXT
        
    //     );
    // `)

    // //2 inserir os dados

    
    // const query = `
    //     INSERT INTO places (
    //         image
    //         , name
    //         , address
    //         , address2
    //         , state
    //         , city
    //         , items
    //     ) 
    //     VALUES (?,?,?,?,?,?,?);            
    // `
    
    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    //     , "PaperSider"
    //     , "Guilherme Gembala, Jardim América"
    //     , "N° 260"
    //     , "Santa catarina"
    //     , "Rio do sul"
    //     , "Papéis e Papelão"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }
    

    
    //  db.run(query, values, afterInsertData)



    // 3 consultar dados das tabelas 
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros")
    //     // ver os registros 
    //     console.log(rows)
    // })

    

   // 4 deletar dados 
    // db.run(`DELETE  FROM places WHERE id = ?`, [5], function(err){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso! ")
    // })

    



//}) 