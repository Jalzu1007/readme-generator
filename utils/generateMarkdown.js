//Created a function that returns a license badge based on which license is passed in
//If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'APACHE 2.0') {
    return '![License: APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GPL 3.0') {
    return '![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'BSD 3') {
    return '![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else {
    return '';
  }
}
//Created a function that returns the license link
//If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'BSD 3') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else {
    return '';
  }
}

//Created a function that returns the license section of README
//If there is no license, returns an empty string
function renderLicenseSection(license) {

  const licenseTexts = {
    MIT: 'This project is licensed under the MIT License.',
    "APACHE 2.0": 'This project is licensed under the APACHE 2.0 License.',
    "GPL 3.0": 'This project is licensed under the GPL 3.0 License.',
    BSD_3 : 'This project is licensed under the BSD 3 License.',
    None: ''
  };
  
  return licenseTexts[license] || '';
}

//Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  
  - [Usage](#usage)
  
  - [License](#license)

  - [How to Contribute](#Contribute)

  - [Tests](#tests)

  - [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

    ${data.install}

  ## Usage

    ${data.usage}

  ## License  

  ${renderLicenseSection(data.license)}

  For more informations, please visit: [License Link](${renderLicenseLink(data.license)})

  ## How to Contribute

    ${data.contribute}

  ## Tests

    To run tests, run the following command:

    ${data.test}

  ## Questions

    If you have any questions about the repository, open an issue or contact me directly at ${data.email}. You can find more of my projects at https://github.com/${data.username}`;
}

module.exports = generateMarkdown;
