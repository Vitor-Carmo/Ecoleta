/*Criando o servidor com express*/

const express  = require("express")
const app = express()

// pegando o banco de dados 
const db = require("./database/db.js")


// configurar pasta publica
app.use(express.static("public"))

// habilitar o uso do req.body da nossa aplicação
app.use(express.urlencoded({
    extended: true
}))



//utiçizando template engine
// html dinâmico
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: app,
    noCache: true
})



// configurar rotas do meu sevidor 
// pagina inicial

//req: requisição
//res: resposta

app.get("/", (req, res) =>{
    // o path está desse jeito porcausa do nunjucks
    return res.render("index.html") 
})


app.get("/create-point", (req, res) =>{
    
    return res.render("create-point.html")
})

app.post("/savepoint", (req, res) =>{

    // req.body: o corpo do nosso formulário
    // console.log(req.body)


        const query = `
        INSERT INTO places (
            image
            , name
            , address
            , address2
            , state
            , city
            , items
        ) 
        VALUES (?,?,?,?,?,?,?);            
    `
    
    const values = [
        req.body.image
        , req.body.name
        , req.body.address
        , req.body.address2
        , req.body.state
        , req.body.city
        , req.body.items
    ]

    // callback
    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro")
        }

        console.log("Cadastrado com sucesso")
        //console.log(this)


        return res.render("create-point.html", { saved: true })
    
    }
    
                            //callback
     db.run(query, values, afterInsertData)
   
})


app.get("/search", (req, res) =>{
    
    const search = req.query.search

    if (search == ""){
        return res.render("search-results.html", {total: 0 })
    }

    // pegar os dados do banco de dados 
    //WHERE city LIKE '%${search}%'

        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
            if (err) {
                return console.log(err)
            }

            const total = rows.length
         
            // mostar a pagina html com os dados do banco de dados
            return res.render("search-results.html", { places: rows, total: total })
        })

})


// ligar o servidor, esse parâmetro é a porta
app.listen(3000)

// não ter que ficar fechando o servidor
//npm install nodemon -D