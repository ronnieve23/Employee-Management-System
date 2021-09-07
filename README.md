# Employee-Management-System

![MIT BADGE](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
This Repository contains code for Rutgers Coding Bootcamp's Challenge 12 "Employee Tracker". 

For this This week's challenge, we were tasked to  to build a command-line application to manage a company's employee database using Node.js, Inquirer, and MySQL.

The app utilizes Node.js, MySQL, the MySQL2 package, the Inquirer package, and the Console.table package.


 ## Table Of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Demonstration](#demonstration)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)



## Installation
1. Download and install Node.js from https://nodejs.org/en/download/

2. Download and install MySQL Community Server from https://dev.mysql.com/downloads/mysql/ . For a full installation guide of MySQL on your machine, please visit the following link: https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide.

3. Clone the repository OR download the code from https://github.com/ronnieve23/Employee-Management-System

4. Open the cloned/downloaded repository (Employee-Management-System) in VS Code.

5. Inside VS code, go to the db folder and open "connection.js".

6. Inside connection.js, update the "user" and "password" field to the ones that you had set up when installing MySQL.

7. Open terminal inside VS code and type "npm i"; wait for the installation to finish.

8. In the terminal, type "mysql -u username -p" (replace username with your mysql username) and hit enter. You will be asked to enter the password you set up for MySQL and the MySQL command line should initiate.

9. Run the following MySQL commands in order:

        a. source db/db.sql       
        b. source db/schema.sql
        c. quit
        

10. In the terminal, type "node index.js"

11. Navigate through the menu and choose whatever you would want to do with your database! Since the tables will be be empty, it would be a good idea to start by adding the departments, the job roles, and finally the employees (in this order).

12. Hit CTRL+C on your keyboard to stop running the app.


 ## Demonstration
 For the purposes of this demo, the tables have been pre-filled with some values already.
 
 [Click me to see  a video of how the app is used!](https://drive.google.com/file/d/1aFi0WiBUeLM2ww2OuqFVdG4puo3L3zod/view?usp=sharing)

 ## Usage

 The app can be used to manage your employee database!

 ## Contributing

 You can contribute to the development of the app by sending suggestions to Ronnieve_Romero@yahoo.com

 ## Questions 

  For any questions, please feel free to reach out to me at the following:

  Github: https://github.com/ronnieve23

  Email: Ronnieve_Romero@yahoo.com

  ## License

 ![MIT BADGE](https://img.shields.io/badge/License-MIT-blue.svg)

  The packages used in this app are licensed under the MIT license. To read more about the MIT license, please click the following link:

  https://choosealicense.com/licenses/mit/
