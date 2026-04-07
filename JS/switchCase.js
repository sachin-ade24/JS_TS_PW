/*
    Please never use switch..case for numbers and boolean parameters.
*/
let browser;

function lauchBrowser(browser){
    switch(browser.toLowerCase().replaceAll(' ', '')){
        case 'chrome':
            console.log('Launch the chrome.');
            break;
        case 'firefox':
            console.log('Launch the firefox.');
            break;
        case 'edge':
            console.log('Launch the edge.');
            break;
        case 'safari':
            console.log('Launch the safari.');
            break;
        default:
            console.log('INVALID browser..');
            break;
    }
}

lauchBrowser('Chrome');
console.log('Enter URL.');

console.log('======================================================================');

//Nested switch:
let env = 'qa';
let username = 'admin';

switch(env){
    case 'qa':
        console.log('Run the test cases on QA environment.');
            switch(username){
                case 'admin':
                    console.log('Login with Admin.');
                    break;
                default:
                    break;    
            }
        break;
    default:
        break;
}
