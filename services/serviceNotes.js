const models = require('../models');

module.exports = {
    addNewPost: function (req) {
        if (req.body.text) {
            //TODO field text is empty
        }
        return models.notes.create({
            userId: req.body.userId,
            title: req.body.title,
            text: req.body.text
        })
            .catch(e => {
                //TODO delete console
                //TODO error in addNewNote
                console.log("error" + e);
                return Promise.reject(e)
            })
    },
    deletePost: function (req) {
        return models.notes.destroy({where: {noteId: req.body.noteId}})
            .then(() => {
                //TODO delete console log
                console.log("was deleted")
            })
            .catch(e => {
//TODO delete
                console.log("errorr in delete " + e)
            })
    },
    getPosts: function (req) {
        return models.notes.findAll({where: {userId: req.body.userId}})
            .then(posts => {
                return Promise.resolve(posts);
            })
            .catch(e => Promise.reject(e));
    }

};