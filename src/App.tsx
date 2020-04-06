import "./App.scss";

import React, { Suspense } from "react";


const App: React.FC = () => {
  return (
    <Suspense fallback="...">
       {"Hello World!"}
    </Suspense>
  );
};

export default App

