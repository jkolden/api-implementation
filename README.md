# api-implementation
Starter code for Oracle chatbot

To use this starter code simply create a new API in MCS and import the mcebots.raml file. Since the API being created by this .raml file is a custom component, it is recommended that you create an API name that ends with "CCS". This is important so that you can tell which is a shared service API vs. which is a custom component API.

### After the API is created:

1. Navigate to the Security tab and turn off login required.

2. Navigate to the implementation tab and download the Javascript scaffold. To start developing. The downloader folder and files will be named after the API that you created in MCS.

3. Within the downloaded scaffold folder, create a file structure for your custom code:
folder
 --> js
   --> components
      --> {purpose}

4. Note that as we develop there will be some files in the starter custom code that we will also need to access. From the Starter Custom Code, copy the following files and place them into the newly created js folder:
- registry.js
- sdk.js
- shell.js

5. From the Starter Custom Code copy the say_hello.js file into the lowest folder under js and rename it accordingly.

6. Add both folders - the code for the project you are going to build *and* the starter code application - to your Atom project directory.

7. Copy the dependencies from the package.json file of the starter application to the package.json file of the project you are building:
~~~~
"dependencies": {
  "joi": "^9.2.0",
  "log4js": "^1.1.1"
},
~~~~

8. Open the .js file of our custom component. This is where the custom component introduces itself to the bot and this is where we add our custom code for this component.

9. Edit the registry.js file. This is how the bot knows which components to add.

example:
~~~~
module.exports = {
    components: {
        'video.sample': require('./components/sample/sample')
  }
};
~~~~

10. Delete the code from the css.js file of our new project but first make not of the GET url. Then copy the code from the starter application mcebots.js into the ccs.js file of our new project. Copy everything including this line but replace the GET url with the url that we noted from above:
~~~~
const apiURL = '/mobile/custom/bots_samples/components';
~~~~

11. Update the shell variable to match the folder directory of our project because our shell.js file sits in the js folder:
~~~~
var shell = require('./js/shell')();
~~~~

12. Open a terminal window and import the dependencies:
~~~~
$ npm install
~~~~

13. zip the custom component folder
