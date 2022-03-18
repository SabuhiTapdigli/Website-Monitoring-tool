const db = require('../database/db')

const getwebsites = async (req,res) => {

    try{
        const websites = await db.execute('select website_id,code,domain,owner,cpanel,username,password from website')
        res.status(200).send(websites[0])
        console.log(websites[0])
    }
    catch(error){
        res.status(400).send(error)
    }

}

const deletewebsite = async (req,res) => {
    const id = req.params.id
    try{
        const delwebsite = await db.execute('delete from website where id = ?',id)
        res.status(200).send(delwebsite)
    }
    catch (error) {
        res.status(400).send(error)
    }
}

const insertwebsite = async (req,res) => {
    const data = req.body
    try{
        const insertdata = await db.execute('insert into websites code,domain,owner,cpanel,username,password,domain_expire_date,hosting_expire_date,ssl_expire_date values (?,?,?,?,?,?,?,?,?',
        [
            code = data.code,
            domain = data.domain,
            owner = data.owner,
            cpanel = data.cpanel,
            username = data.username,
            password = data.password,
            domain_expire_date = data.domain_expire_date,
            hosting_expire_date = data.hosting_expire_date,
            ssl_expire_date = data.ssl_expire_date
        ])
        res.status(200).send(insertdata) 
    }
    catch(error){
        res.status(400).send(error)
    }
}

module.exports = {
    getwebsites,
    deletewebsite,
    insertwebsite
}