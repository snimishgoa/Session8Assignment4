# Session8Assignment4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Problem Statement

1. Create a service with two functions. First function will have array of object which it
will return (GET). Second function will have add the values in the array by using
unshift() method. Create another service from which we will get only array of objects
for dropdown List of Mr and Mrs.
2. The 1st service will be called in Component and 2nd service will be called in
@NgModule
3. Create a logging service with the method like log, info, warn, clear and whenever
adding the data it should log a message to the console “Adding data” and while
retrieving it should display message info “Retrieving data.” from the Service where it
is retrieving from.
4. Create text box to add the values in the array with the help of service and a table
to loop over the array values which we have added. Create a drop-down list and
access values from service. Use ngIf to hide the table unless you add the values in the
array. Show only if the length of an array is > 0
