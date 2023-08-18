const { signBody } = require("./sign");
const process = require("process");
const cp = require("child_process");
const path = require("path");

test("creates a SHA256 hash signature using the secret", async () => {
  const body = "key1=value1&key2=value2";
  const secret = "secret";
  const actual = signBody(body, secret);

  const expected =
    "sha256=59e0a47b8cb0220207101a844200073d87dccf3611ac230a56fab07352109b95";
  expect(actual).toBe(expected);
});

// shows how the runner will run a javascript action with env / stdout protocol
test("test runs", () => {
  process.env["WEBHOOK_SECRET"] = "secret";
  const codePath = path.join(__dirname, "sign.js");
  const result = cp
    .execSync(`node ${codePath}`, { env: process.env })
    .toString();
  console.log(result);
});
