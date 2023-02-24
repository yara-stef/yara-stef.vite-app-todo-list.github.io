import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { borderRadius } from '@mui/system';

const CheckBox = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const theme = createTheme({
      palette: {
        neutral: {
          main: 'rgb(220, 220, 220)',
          contrastText: '#black',
        },
      },
    });

    return (
        <div className='checkbox'>
            <div className='checkbox-inner'>
                <Checkbox {...label} />
            <span>todo</span>
            <ThemeProvider theme={theme}>
              <Button sx={{borderRadius: 50, }} color="neutral" variant="contained">
                Delete
              </Button>
            </ThemeProvider>
            </div>            
            <hr></hr>
        </div>
       
    );
};

export default CheckBox;

