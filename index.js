const core = require("@actions/core");
const { signBody } = require("./sign");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const secret = core.getInput("secret");
    if (!secret) {
      throw new Error("No secret provided");
    }

    const body = core.getInput("body") || "";
    const signature = signBody(body, secret);
    core.debug(`Signature: ${signature}`); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    core.setOutput("signature", signature);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
