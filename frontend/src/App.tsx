import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import About from './pages/About';
import Niche from './pages/Niche';
import TubeThoughts from './pages/TubeThoughts';
import WriteClub from './pages/WriteClub';
import InConversation from './pages/InConversation';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Nav } from './components/Nav';
import { styled } from 'styled-components';

const queryClient = new QueryClient();

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Container>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/niche" element={<Niche />} />
            <Route path="/tube-thoughts" element={<TubeThoughts />} />
            <Route path="/write-club" element={<WriteClub />} />
            <Route path="/in-conversation" element={<InConversation />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
