import { ThemeProvider } from 'styled-components';

import { Button } from 'react95';
// pick a theme of your choice
import original from 'react95/dist/themes/original';
import GlobalStyles from './globalStyles';


const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Button primary>Primary</Button>
    </ThemeProvider>
  </div>
);

export default App;