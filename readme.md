# ds: digital signage
### quick and easy digital signage in node.js

ds is a web interface with minimal server-side hijinx to create quick, easy digital signage. 

## Requires:
1. A computer that runs Node.js (to act as a server)
2. Another computer with a web browser (to act as a client)
3. Sufficient network infrastructure to connect the two

## Installation:

First, make sure Node is installed:

http://nodejs.org

Then, either run install.sh or follow these steps:  
1. Clone this repository in Git  
	git clone https://github.com/skylineproject/ds.git  
2. Change your working directory to the directory of the cloned repository  
3. Install dependencies with NPM:  
	npm install  
4. Start the server with NPM:  
	npm start  
5. Navigate to localhost:5000/new to change the header and sign body text  
6. Click the box to the right of the text boxes, and see your sign in action  

## Configuration
Add CSS to /public/stylesheets/style.css
Change the Jade HTML templates in /views/index.jade and /views/new.jade

## Use
View the sign at http://localhost:5000
Edit the sign at http://localhost:5000/new

## Recommendations:
This software is intended for use behind a firewall, or a router that supports Network Address Translation. I have made no effort whatsoever to limit what the server gets as input, though that would probably be a good idea for a future enhancement.

With that in mind, please don't use this on any Internet-facing computer. Don't run this as a server where the port is open to the world. That's just an entirely horrid idea.

## Disclaimers:
To my knowledge, this program cannot access or change any files on the server or client computers, execute arbitrary code (against the V8 javascript engine or any other compiler/interpreter/runtime), or otherwise alter your machine past adding the functionality described above. Regardless, by running the software, you're taking sole responsibility for the results of running the software. No warranty for the software is provided.

But, hey, if you see something you think could be done better, please create pull request-- I created this as a proof of concept, and hope to use it as a quick way to create awesome, ad-hoc digital signs for any sort of use in my own day-to-day work. I'll be pushing updates as frequently as I make them.

## Future Enhancements
- change colors on the live site
- add authentication of some sort
- tidy up any extraneous bits
