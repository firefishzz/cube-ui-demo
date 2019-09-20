'use strict'
const env = process.env.self_env
module.exports = {
  NODE_ENV: '"production"',
  ENV_CONFIG: env === 'pro' ? '"pro"' : '"test"'
}
