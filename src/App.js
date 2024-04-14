
import './App.css';
import { QueryClient,QueryClientProvider } from "react-query";
import { useEffect } from 'react';

import {Home} from "./components/home";
function App() {

  const client=new QueryClient();
 
useEffect(()=>{

},[])
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Home/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
