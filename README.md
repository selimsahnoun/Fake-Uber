# Fake-Uber
A mock Uber Front End App for educational purposes, called Fuber built with Angluar, Bootstrap and makes Google API calls to give the quickest route from Point A to Point B and a price according to the car type. 

### Important : This project is for educational purposes only and the source code shouldn't be use in production as it doesn't have good security, doesn't scale  and lacks many important features. 

### click on image to be directed to youtube for video demo

[<img src="https://img.youtube.com/vi/AJNHsBMKJDQ/maxresdefault.jpg" width="50%">](https://youtu.be/AJNHsBMKJDQ)

The github repository contains a basic implementation of a mock Uber Front End App (Fuber) using Angular. This app has the following features:

## Possibility of requesting a ride

  - Input the first letters of the address you're leaving from, the autocomplete google API will list the matching addresses in a drop down list
  - Input the first letters of the address you're heading to, the autocomplete google API will list the matching addresses in a drop down list
  - The agm-direction tag API will show the route on the map 
  - getDistanceMatrix google API will give you the duration and distance of the route
  - A list of cars will be shown to chose from
  

## Dependencies

  - Works with Angular, Bootstrap
 
 ## How to run the code
 
  To start  execute the command below: 
  
  ```bash
  ng serve
  ```
   ## How to input your own google Api key
   
   In the root folder create : "./api/googleMapsAPI.ts".
   
   inside the googleMapsAPI.ts, write this line : export const googleMapsAPIKey = 'Your API key';


