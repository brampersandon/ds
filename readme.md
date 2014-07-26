![ds: dead simple digital signage](https://raw.githubusercontent.com/skylineproject/ds/master/public/images/img.gif)
### quick and easy digital signage in node.js

ds is a web interface with minimal server-side hijinx to create quick, easy digital signage. 

## Requires:
1. A computer that runs Node.js (to act as a server)
2. Another computer with a web browser (to act as a client)
3. Sufficient network infrastructure to connect the two

## Compulsory "here be dragons" notice:
This software is intended for use behind a firewall, router that supports Network Address Translation, or other system that limits traffic from external sources. This software is brand-new, and should be considered a pre-alpha.

With that in mind, please don't use this on any Internet-facing computer. Don't run this as a server where the port is open to the world. That's simply not a safe or sane idea. If you would like to help make this software a bit more impervious to nefarious individuals, please issue a pull request.

## Installation:

First, make sure Node is installed:

http://nodejs.org

Then, either run ```install.sh``` or follow these steps:  
1. Clone this repository in Git  
  ```git clone https://github.com/skylineproject/ds.git```  
2. Change your working directory to the directory of the cloned repository  
3. Install dependencies with NPM:    
  ```npm install```  
4. Start the server with NPM:    
  ```npm start```  
5. Navigate to localhost:5000/new to change the header and sign body text  
6. Click the box to the right of the text boxes, and see your sign in action  

## Configuration:

### Basic Configuration:
ds is completely extensible using open technologies like JavaScript, CSS, and easy-to-use tools like the [Jade HTML templating system](http://jade-lang.com). This means you'll be able to quickly and easily edit my default files to make your own sign, lickety-split.

#### TO CHANGE THE HEADER IMAGE
The header image is stored in ```public/images/img.gif```. If you have a header you'd like to use instead, you can rename it to ```img.gif``` and put it in the public/images folder in place of my standard image. I've also created an Illustrator template for the file, which can be found at ```public/images/ds.ai```.

#### TO CHANGE THE DEFAULT TEXT
The default text that shows up on the sign's two lines before the text is changed by the '/new' page can be changed by editing the ```routes/index.js``` file, and changing the values of the ```sign.top``` and ```sign.bottom``` properties of the ```sign``` JavaScript object.

### Next-level Configuration:
Add CSS to ```public/stylesheets/style.css```
Change the Jade HTML templates in the ```views``` directory.
Update the way your server responds to client requests for signage information using the ```routes/index.js``` file
Set up a proxy using nginx to redirect requests for port 80 on your server to port 5000, if you're willing, able, and comfortable with that.

## Using ds:
View the sign at [localhost:5000](http://localhost:5000)
Edit the sign at [localhost:5000/new](http://localhost:5000/new)

## Disclaimers:
To my knowledge, this program cannot access or change any files on the server or client computers, execute arbitrary code (against the V8 javascript engine or any other compiler/interpreter/runtime), or otherwise alter your machine past adding the functionality described above. Regardless, by running the software, you're taking sole responsibility for the results of running the software. No warranty for the software is provided.

But, hey, if you see something you think could be done better, please create pull request-- I created this as a proof of concept, and hope to use it as a quick way to create awesome, ad-hoc digital signs for any sort of use in my own day-to-day work. I'll be pushing updates as frequently as I make them.

## Future Enhancements
- add support for a scrolling twitter handle
- condense server into one single file
- filter input and output

### Contact
Give me a shout out on twitter if you have any questions -- I'm @brandon_mn
