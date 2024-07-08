const { MongoDBModels } = require('../models');
const Review = MongoDBModels.Review;

const getAllReviews = async (req, res) => {
  const { bookId } = req.params;
  try {
    const reviews = await Review.find({ bookId }).populate('customerId', 'firstName lastName');
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const createReview = async (req, res) => {
  const { bookId, customerId, rating, comment } = req.body;
  try {
    const newReview = await Review.create({ bookId, customerId, rating, comment });
    res.status(201).json(newReview);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getAllReviews, createReview };
