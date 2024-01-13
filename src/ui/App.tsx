import { ThemeProvider } from 'styled-components';

// pick a theme of your choice
import redWine from 'react95/dist/themes/blue';
import GlobalStyles from './globalStyles';
import InfoContainer from './smarts/InfoContainer';
import DayPicker from './smarts/DayPicker';


const App = () => (
  <div>
    <ThemeProvider theme={redWine}>
      <GlobalStyles />
      <InfoContainer />
      <DayPicker />
    </ThemeProvider>
  </div>
);

export default App;