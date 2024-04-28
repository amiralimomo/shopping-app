
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {

  const client = new QueryClient();

  useEffect(() => {

  }, [])
  return (

    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />


        </Routes>
        <Footer/>
      </Router>
    </QueryClientProvider>

  );
}

export default App;
