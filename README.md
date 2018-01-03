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
a. registry.js
b. sdk.js
c. shell.js
