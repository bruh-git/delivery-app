require('dotenv/config');
const fs = require('fs');
const { sign, verify } = require('jsonwebtoken');
// const key = require('../../')

const jwtSecret = fs.readFileSync('jwt.evaluation.key', 'utf8');

class JwtService {
  static createToken(payload) {
    return sign(payload, jwtSecret);
  }

  static validateToken(token) {
    const payload = verify(token, jwtSecret);
    if (!payload) {
      const e = new Error('Token must be a valid token');
      e.name = 'Authorization';
      throw e;
    }
    return payload;
  }
}

module.exports = JwtService;