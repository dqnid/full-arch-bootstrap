#! /usr/bin/env node
const path = require("node:path");
const { execSync } = require("child_process");
const readlineSync = require("readline-sync");

const variants = ["NestJS", "ExpressJS"];
const variant_branch_mapping = { NestJS: "nestjs", ExpressJS: "express" };

console.log("\x1b[34mBackend framework variants:\x1b[0m");

const variant = readlineSync.keyInSelect(
  variants,
  "\x1b[34m>\x1b[0m Choose backend framework",
);

if (variant < 0) {
  console.log("\x1b[31mBye!\x1b[0m");
  return;
} else {
  const project_name = readlineSync.question(
    "\x1b[34m>\x1b[0m Project name (empty for default): \x1b[0m",
  );

  const git_command =
    "git clone -b " +
    variant_branch_mapping[variants[variant]] +
    " https://github.com/dqnid/full-stack-archetype.git " +
    project_name;

  console.log("\x1b[34mCloning the repo...\x1b[0m");
  console.log("\x1b[34m-------------------\x1b[0m");

  execSync(git_command, {
    stdio: [0, 1, 2], // stdin, stdout, stderr
    cwd: path.resolve(""),
  });

  console.log("\x1b[32m-----\x1b[0m");
  console.log("\x1b[32mDone!\x1b[0m");
  console.log("\x1b[32m-----\x1b[0m");
}
