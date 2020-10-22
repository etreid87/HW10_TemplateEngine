const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


function promptUser() {
  return inquirer.prompt([
      {
          type: "input",
          name: "nameManager",
          message: "Enter name of Manager: "
      },
      {
          type: "input",
          name: "idManager",
          message: "Enter ID number of manager: "
      },
      {
          type: "input",
          name: "emailManager",
          message: "Enter email of manager: "
      },
      {
          type: "input",
          name: "officeManager",
          message: "Enter office number of manager: "
      },
      {
          type: "input",
          name: "nameEngineer1",
          message: "Enter name of engineer number 1: "
      },
      {
          type: "input",
          name: "idEngineer1",
          message: "Enter ID number of engineer number 1: "
      },
      {
          type: "input",
          name: "emailEngineer1",
          message: "Enter email of engineer number 1: "
      },
      {
          type: "input",
          name: "githubEngineer1",
          message: "Enter GitHub Username of engineer number 1: "
      },
      {
          type: "input",
          name: "nameIntern",
          message: "Enter name of Intern: "
      },
      {
          type: "input",
          name: "idIntern",
          message: "Enter ID number of Intern: "
      },
      {
          type: "input",
          name: "emailIntern",
          message: "Enter email of Intern:"
      },
      {
          type: "input",
          name: "schoolIntern",
          message: "Enter school of intern: "
      },
     
  ]);
}


async function init() {
  console.log("success")
  try {
      const answers = await promptUser();

      const html = generateHTML(answers);
    //writeFile will creat html page with the answers
      await writeFileAsync("index.html", html);

      console.log("Successfully wrote to index.html");
  } catch (err) {
      console.log(err);
  }
}

init();