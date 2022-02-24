var inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: "name",
        message: "say name",
        validate(a){
            if(a) return true;
        }
    },
    {
        type: 'number',
        name: "age",
        message: "say age",
        validate(a){
            if(a) return true;
        }
    },
    
    {
        type: 'list',
        name: "agse",
        message: "say agse",
        choices: ['a', 'b', 'c']
    },

    {
        type: 'expand',
        name: "age123",
        message: "say age123",
        choices: [
            { key: 'R', value: 'red' },
            { key: 'G', value: 'green' },
            { key: 'B', value: 'blue' },
        ],
        pageSize: 1,
        validate(a){
            if(a) return true;
        }
    },
    {
        type: 'checkbox',
        name: "age0",
        message: "say age0",
        choices: ['c', 'd'],
        validate(a){
            if(a) return true;
        }
    },
    {
        type: 'password',
        name: "age1",
        message: "say age1",
        validate(a){
            if(a) return true;
        }
    },
    // {
    //     type: 'editor',
    //     name: "age2",
    //     message: "say age2",
    //     validate(a){
    //         if(a) return true;

    //     }
    // },
    {
        type: 'rawlist',
        name: "age22",
        message: "say age22",
        validate(a){
            if(a) return true;
        }
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })