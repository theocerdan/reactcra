import { Window, WindowContent, WindowHeader } from 'react95';
import Forms, { FormsInput } from '../dumbs/Form';

const InfoContainer = () => {

    const saveFormsData = (input: FormsInput) => {
        console.log(input);
    } 

    return (
      <Window style={{ width: '500px' }}>
        <WindowHeader>
          Information.exe
        </WindowHeader>
        <WindowContent>
            <Forms onSubmit={saveFormsData}/>
        </WindowContent>
      </Window>
    );
};

export default InfoContainer;