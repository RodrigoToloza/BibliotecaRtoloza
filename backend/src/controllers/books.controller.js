import db from "../database"

export const createBook = async (req, res) => {
    const {titulo,autor,rate,votos,url,descripcion,cat1,cat2,cat3} = req.body;
    
    const sql = `INSERT INTO libros(
        titulo,autor,rate,votos,url,descripcion,cat1,cat2,cat3
        ) VALUES(`
            + '"' + titulo + '",'
            + '"' + autor + '",'
            + rate + ','
            + votos + ','
            + '"' + url + '",'
            + '"' + descripcion + '",'
            + '"' + cat1 + '",'
            + '"' + cat2 + '",'
            + '"' + cat3 + '"'
            +')';

    await db.query(sql, function (err, result) {
        if (err) throw err.sqlMessage;
        res.json('creando libro')
    } )
    
}

export const getBooks = async (req, res) => {
    await db.query('SELECT * FROM libros', (err, rows) => {       
        if (err) throw err;
        res.json(rows);
    })
}

export const getBookById = async (req, res) => {
    await db.query('SELECT * FROM libros where id = ?', req.params.bookId, (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
    })
}

export const getCats = async (req, res) => {
     await db.query('SELECT * FROM categorias', (err, rows) => {       
         if (err) throw err;
         res.json(rows);
     })
}

export const updateBookById = (req, res) => {
    res.json('En proceso...');
}

export const deleteBooksById = async(req, res) => {
    await db.query('DELETE FROM libros where id = ?', req.params.bookId, (err, rows) => {
        if (err) throw err;
        res.json(rows.affectedRows);
    });
}

export const getBestByCat = async (req, res) => {  
    const sql = `SELECT * FROM libros WHERE cat1=${req.params.cat} OR cat2=${req.params.cat} OR cat3=${req.params.cat} ORDER BY rate DESC LIMIT 6` 
    await db.query(sql, req.params.cat, (err, rows) => {
        if (err) throw err;
        res.json(rows)
    })
}
