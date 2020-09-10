# password-generator-2020

### Author: David Guthmann

github: https://github.com/Dguthmann/  
livesite: https://dguthmann.github.io/password-generator-2020/index.html

## List of Contents

index.html
script.js
style.css
README.md

## Basic Overview of Project

This is a basic password generator function that allows for these criteria  
character length: 8-120 characters
character types: uppercase, lowercase, numeric, and special
The way the function works is it prompts the user for length and types of characters used.
THEN it will fill up a string with all of the valid types and generate a password of defined length using pseudorandom Math.random  
After this it will use the source html and css documents to show the password created on the page.  
NOTE this is not a secure way to generate a password, as it relies on a client side interaction AND pseudorandom processes of the computer.

## Screenshot of Website



## resources Used


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt why I implimented as string instead of array logic




## Further Development Plans

The project is considered complete by me, as it would require massive changes to the base functions to change a lot of the functionalities to make the passwords safer (aka things I researched when working on this: server side generation, etc).  


## Changelog

2020-09-10: Addition of more comments to the file, and writing of README, first deployment
2020-09-09: Creation of files, coding the script.js file, multiple commits during the day as it was fleshed out and bug tested.
