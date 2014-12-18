![Img](public/images/img.gif)
# ds: digital signage
### quick and easy digital signage in node.js

ds is a web interface with minimal server-side hijinx to create quick, easy digital signage. 

## Requires:
1. Something that runs Node.js (to act as a server)
2. Something that runs a web browser (to act as a client)
**NOTE: These can be the same computer**
3. Sufficient network infrastructure to connect the two

## Installation:

First, make sure Node is installed:

http://nodejs.org

Then, follow these steps:  
1. Clone this repository in Git  
  ```git clone https://github.com/skylineproject/ds.git```  
2. Change your working directory to the directory of the cloned repository  
3. Install dependencies with NPM:    
  ```npm install```  
4. Start the server with NPM:    
  ```npm start```  
5. Navigate to localhost:8080/new to change the header and sign body text  
6. Click the box to the right of the text boxes, and see your sign in action  

## Configuration:
Add CSS to /public/stylesheets/style.css  
Change the Jade HTML templates in /views/index.jade and /views/new.jade

## Use:
View the sign at http://localhost:8080 
Edit the sign at http://localhost:8080/new  

***NOTE: In the hopes of ensuring the default connection is the most secure connection, you must manually uncomment line 24 in app.js in order to allow other computers to access the sign (i.e., to access the sign at something other than "localhost:8080"). In the future, this feature will be improved so uncommenting will not be necessary while not sacrificing the security.***

## Recommendations:
Please be mindful of who will be able to make changes to your site. You may wish to place your site behind a reverse-proxy through Nginx or similar software. In order to limit updates to specific users, you'll need to implement an authentication protocol, which can be done with any number of Express middleware. 

Finally, please use your network's protection mechanisms to your advantage. Block IP addresses that send multiple requests for the same nonexistant content in a certain timeframe. Monitor incoming traffic to determine if nefarious actions are taking place.

## Future Enhancement
- Support for a "Twitter Wall." This is in my testing branch now, will be migrated shortly.
- Support for displaying video, audio, images, and other websites.
- More GUI controls
- Raspberry Pi setup directions

### Contact
Give me a shout out on Twitter if you have any questions -- I'm [@brandon_mn](http://twitter.com/brandon_mn). Pull Requests, Issues, and Comments are welcome. Let me know how you're using it, too!
