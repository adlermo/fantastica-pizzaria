module.exports = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.render("login", {error: "É necessário login para acessar a página!"})
    }
}