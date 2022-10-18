import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import styled from 'styled-components';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import FormSubmit from './components/formSubmit';
import FormResult from './components/formResult';
import './App.css';
import 'react-block-ui/style.css'

const Container = styled.div`
  height: 100vh;
`

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <Router>
            <Routes>
              <Route path="/submit" element={<FormSubmit />} />
              <Route path="/result" element={<FormResult />} />
              <Route path="/" element={<Navigate to="/submit" />} />
            </Routes>
          </Router>
        </Container>
      </PersistGate>
    </Provider >
  );
}

export default App;
