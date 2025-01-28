import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
  font-family: 'Roboto', sans-serif; /* Clean font for the app */

  main {
    flex: 1;
    background: linear-gradient(145deg, #6a73e0, #3b4f9c); /* Soft gradient background */
    border: 3px solid #fff;
    backdrop-filter: blur(8px); /* Smoother backdrop effect */
    border-radius: 32px;
    overflow-x: hidden;
    padding: 2rem; /* Keep padding for spacing */
    padding-top: 0; /* Remove top space from all transactions */
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* Space between sections */
    align-items: center; /* Center align elements inside main */
    
    &::-webkit-scrollbar {
      width: 0; /* Hide scrollbar */
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 1rem;
      text-align: center;
    }

    p {
      font-size: 1.2rem;
      color: #f8f9fa; /* Lighter text for contrast */
      line-height: 1.5;
    }
  }
`;



export default App;
