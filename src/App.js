import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Personagem from './components/Personagem/Personagem';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/personagem/:id" element={<Personagem />}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
