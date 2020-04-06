const users = require('../database/Users')

module.exports = {
    show: (req, res) => {
        res.render("login", { error: undefined });
    },
    login: (req, res) => {
        let user = users.find(u => {
            return (u.nome.toLowerCase() == req.body.user.toLowerCase() ||
                u.email.toLowerCase() == req.body.user.toLowerCase())
                && u.senha == req.body.password
        })

        if (user) {
            req.session.user = JSON.stringify(user)
            res.redirect("/pizzas")
        } else {
            res.render("login", { error: "Email ou Senha Invalido!" })
        }
    }
}
