import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import { TopSection } from "./containers/TopSection";

const AppContainer = tw.div`
  flex
  w-full
  h-full
  overflow-hidden
`;

function App() {
  return (
    <AppContainer>
      <TopSection />
    </AppContainer>
  );
}

export default App;
