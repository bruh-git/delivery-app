require('dotenv/config');
const fs = require('fs');
const { sign, verify } = require('jsonwebtoken');

const jwtSecret = fs.readFileSync('jwt.evaluation.key', 'utf8');

class JwtService {
  static createToken(payload) {
    return sign(payload, jwtSecret);
  }

  static validateToken(token) {
    try {
      const payload = verify(token, jwtSecret);
      return payload;

    } catch (err) {
      console.log(err);
      const e = new Error('Token must be a valid token');
      e.name = 'Authorization';
      throw e;
    }
  }
}

module.exports = JwtService;