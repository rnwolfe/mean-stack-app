const jwt = require('jsonwebtoken');
const jwtSecret = 'secret_this_should_be_longer_UohY4Z0Ep^ZXaLoKgts%NYCJr#KUBQwf7fQhWGdKjLlG7$clvm#LgR@N7AQJK2qBq3iz@NO7N@B!RjNSRsvO49datNW0fo6Rkg7q';

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, jwtSecret);
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Authentication failed!'
    });
  }
};
