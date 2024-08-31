import React from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ContentLayout from './components/content/ContentLayout';
import ContentSection from './components/content/ContentSection';
import LatestArticles from './components/content/LatestArticles';
import SliderComponent from './components/content/SliderComponent';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Header />
      <SliderComponent />
      <ContentSection />
      <ContentLayout />
      <LatestArticles />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
