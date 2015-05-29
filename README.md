# fileCapture
An angular directive designed to simplify the capturing of a file via <input type="file"/>.

# Install
Include fileCapture.js into your project

Add "fileCapture" as a dependency for your project. 
```
angular.model("app", ["fileCapture"])
```

#Use
```
<input type="file" file-capture="capturedFile"/>
```

file-capture returns back an object that has two properties, preview and file. Preview holds a base64 version of the file that is ready to display on page depending on the file.

If image:
```
<img ng-src="{{capturedFile.preview}}"/>
```

File holds all the information exactly like a native form iput type file would. This is useful if you would like to pull the file size, file name, or any other meta data on the file.
