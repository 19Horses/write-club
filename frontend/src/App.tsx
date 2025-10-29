import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import { styled } from 'styled-components';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { InConversation } from './pages/InConversation';
import { Niche } from './pages/Niche';
import { StarryNights } from './pages/StarryNights';
import { WriteClub } from './pages/WriteClub';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/niche" element={<Niche />} />
            <Route path="/starry-nights" element={<StarryNights />} />
            <Route path="/write-club" element={<WriteClub />} />
            <Route path="/in-conversation" element={<InConversation />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
