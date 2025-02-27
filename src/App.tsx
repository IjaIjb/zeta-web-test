import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import routes from './routes/Index';
import { Routes } from 'react-router-dom';


function App() {
  return (
    <div className="">
     <Suspense fallback={<div></div>}>
     <Routes>
          {routes.map((route: any, i: number) =>
            route.component ? (
              <Route key={i} path={route.path} element={<route.component />} />
            ) : null
          )}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
