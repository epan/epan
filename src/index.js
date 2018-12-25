#! /usr/bin/env node
// Tells Node.js that this is a CLI tool

const boxen = require("boxen");
const { bold, cyan } = require("chalk").default;

const lines = [
  bold("Eric Pan"),
  "Front End Engineer at FutureAdvisor (BlackRock)",
  "",
  bold(" Twitter: ") + cyan("https://twitter.com/epan"),
  bold("  GitHub: ") + cyan("https://github.com/epan"),
  bold("LinkedIn: ") + cyan("https://linkedin.com/in/ericpan"),
  bold("   Email: ") + cyan("reachEP@gmail.com")
];

const message = lines.join("\n");

const styles = {
  borderColor: "cyan",
  borderStyle: "round",
  margin: 1,
  padding: 1
};

const box = boxen(message, styles);

process.stdout.write(box + "\n");
