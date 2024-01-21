import { ThemeProvider } from 'styled-components';

// pick a theme of your choice
import redWine from 'react95/dist/themes/blue';
import GlobalStyles from './globalStyles';
import InfoContainer from './smarts/InfoContainer';
import CraPicker from './smarts/CraPicker';
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import {Result} from "./smarts/Result.tsx";

dayjs.extend(utc)

const App = () => (
  <div>
    <ThemeProvider theme={redWine}>
      <GlobalStyles />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 50}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20}}>
          <InfoContainer />
          <Result />
        </div>
        <div>
          <CraPicker />
        </div>
      </div>
    </ThemeProvider>
  </div>
);

export default App;