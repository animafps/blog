const { copyLibFiles } = require("@builder.io/partytown/utils");

async function myBuildTask() {
  await copyLibFiles("dist/~partytown");
}

myBuildTask();
