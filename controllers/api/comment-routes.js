const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/post/:id', withAuth, async (req, res) => {
 try{ 
  const commentData = await Comment.findAll({
    include: [User],
  });
// serialize the data
  const comments = commentData.map((comment) => comment.get({ plain: true }));
  
  res.render('single-post', {comments, loggedIn: req.session.loggedIn});
} catch(err) {
    res.status(500).json(err);
}
});

router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const newComment = await Comment.create({
      ...body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
