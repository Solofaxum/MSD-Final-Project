# CS571 Homework 08
## Using Expo SDK
Create a new Expo React Native application and add `ReactNavigation` to boot a Stack Navigator with the following screens:
* `Home` screen
* `Contacts` screen
* `Map` screen
* `Gallery` screen
* `Camera` screen  
## Screens' Details  
* The `Home` screen will display 4 buttons to navigate through the rest of components. Align the buttons to be centered vertically and horizontally within the screen.
* The `Contacts` screen will display a list of user's contacts using `SectionList` component.  
* The `Map` screen will display a map with a marker to the user's current location.
* The `Gallery` screen will display a button to open the `ImagePicker` and then it displays the user's selected image.
* The `Camera` screen will access the user's camera and offers two functionalities:
    * A button to flip the camera (Font/Back)
    * A button to take a picture and add it to the user's photo library.
  
**Note:** In order for the Operating System to grant the app access to `Contacts`, `Location`, `ImagePicker`, and `Camera` APIs, the app will need to receive a `'granted'` permission status for each API.

Report URL
https://docs.google.com/document/d/1-WdgyW6de7Psw6kqZ1l8KVH6E-PZ9h1PjNv-iplipH4/edit#heading=h.9nvcibv3gama 