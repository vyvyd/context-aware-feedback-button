# Context-Aware Feedback Button

## Aim 
For an Single-Page-Application (SPA), design a feedback button that can be used **across** various micro-frontends.

This button has a context aware target email address that can be set from any micro-frontend loaded on the UI.

**Assumptions:** 
1. Configuring the property is done through DOM events

## Running the application

```bash
./gradlew bootRun
```

and under the `ui\components` folder 

```bash
npm start 
```

Browse to http://localhost:8080/

### UI screens

Screen 1:  
![Alt text](images/1.png?raw=true "Title")

Screen 2:  
![Alt text](images/2.png?raw=true "Title")

Screen 3:  
![Alt text](images/3.png?raw=true "Title") 

## Development

This project uses Thymeleaf to render `index.html`.

The compiled webcomponent build output are symlinked to avoid CORS issues, and also, because I was super lazy and didn't do this in better way.


## Task List 
- [x] Hello World SpringBoot
- [x] Render a simple HTML page through SpringBoot 
- [x] Simple web-page index.html (bootstrap) that includes a simple webcomponent button
- [x] Introduce Stencil to render the web-component
- [x] Have not to copy over the compile ts files
- [ ] **Clean up project structure**
- [x] Open a modal when you click the button 
- [x] Send event to the web-component that contains some info
- [x] The opened modal will display the contents sent in the event

