import { copyFileSync, readdirSync, statSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const workspaceRoot = join(__dirname, "..");
const partytownDir = join(
  workspaceRoot,
  "node_modules/@builder.io/partytown/lib"
);
const destinationDir = join(workspaceRoot, "dist/~partytown");
if (!existsSync(destinationDir)) {
  mkdirSync(destinationDir);
}

console.log("Copying Partytown files...");

readdirSync(partytownDir).forEach((file) => {
  const absoluteFilePath = join(partytownDir, file);
  if (!statSync(absoluteFilePath).isFile()) {
    return;
  }

  copyFileSync(absoluteFilePath, join(destinationDir, file));
});

console.log("Partytown files copied.");
