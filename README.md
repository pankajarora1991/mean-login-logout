# angular-node-login-logout v.0.1

### [Express 4.6] + [Angular 8] (Single page application) Simple login logout pages
-Bootstrap 4 

## Pre-request
- Node 10+

## QuickStart (prod run)
- clone repositery
- [npm install]
- run the app: [npm start] (angular build to 'dist' folder)


## Angular developement (dev environment only) 
- cd angular
- run angular-cli command: [ng serve]
- run express server: [npm start]

## Architecture

# Express/Node server
- app.js
- controller
    - user_controller  
- service
    - user_service (class for user lookup)
- routes 
    - user.routes 
- dist (angular production files)
- angular (angular src)
- bin


# Angular

- src
    - app
        - data_model (contain interface/class/enum model)
        - guard (routing guard)
        - login (component/page)
        - private (user dashboard)
        - service
            - auth.service (authenticate user/ http call)
            - toast.service (success/failure message)
        - toast (component to show toast in UI)
        - welcome (component/page)
    - app.component
    - app.routing


