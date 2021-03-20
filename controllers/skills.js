const Skill = require('../models/skill');

const index = (req, res) => {
    res.render("skill/index", {
        skills: Skill.getAll()
    })
}

const show = (req, res) => {
    res.render('skill/show', {
        skill: Skill.getOne(req.params.id)
    })
}

module.exports = {
    index,
    show
}