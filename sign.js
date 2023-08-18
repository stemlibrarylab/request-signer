const crypto = require("crypto");

/**
 *
 * @param {string} body Serialized JSON or URL-encoded body
 * @param {string} secret Secret used to sign the payload
 * @returns {string} Signature, prefixed with "sha256="
 */
function signBody(body, secret) {
  const signature = crypto
    .createHmac("sha256", secret)
    .update(body, "utf8")
    .digest("hex");

  return `sha256=${signature}`;
}

module.exports.signBody = signBody;
