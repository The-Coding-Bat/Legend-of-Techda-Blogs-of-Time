const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Ted is the best!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "He really deserves better..."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I think Ted is my idol."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Great work Ted!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "What would I do is Ted didn't exist?"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Ted is the Chosen One..."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Wow, Ted sure is increible."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "The Phenomenal TJ Styles!!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;