import "./App.css"
import 'react-loading-skeleton/dist/skeleton.css'
import { RouterProvider } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { Context } from "./Context/Context";
import React, { Suspense } from "react";
import { router } from "./routes";

function App() {
  return (
    <>
      <Context.Provider value={null}>
        <SkeletonTheme>
          <Suspense fallback={<p>Loading</p>}>
            <RouterProvider router={router} />
          </Suspense>
        </SkeletonTheme>
      </Context.Provider>
    </>
  );
}


export default App;
