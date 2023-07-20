import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { HubConnectionState } from '@microsoft/signalr';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {HubConnectionState.Connected}
      <NxWelcome title="cart" />
    </StyledApp>
  );
}

export default App;
