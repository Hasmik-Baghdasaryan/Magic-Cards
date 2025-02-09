import { createBrowserRouter } from "react-router-dom";

import App from "components/App/App";

export function createRouter (){
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>
        }
    ]);
    
    return router;
};