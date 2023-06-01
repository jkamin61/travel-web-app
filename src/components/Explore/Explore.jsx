import css from './Explore.module.css';
import {Autocomplete, Button, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const Explore = () => {

    const countries = ['Norway', 'Sweden', 'Denmark'];

    return (
        <section className={css.explore}>
            <div className={css.mainText}>
                <h2>Explore the world with a smile</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                    venenatis,
                    lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                    leo
                </p>
            </div>
            <form className={css.form}>
                <Autocomplete
                    disablePortal
                    id="country-select"
                    options={countries}
                    sx={{
                        width: 350,
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: "white",
                        },
                        '& .MuiInputLabel-root': {
                            color: "white",
                            borderColor: "white"
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: "white",
                        }
                    }}
                    renderInput={(params) => <TextField {...params} label="Country"/>}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{
                        width: 350,
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: "white",
                            color: "white",
                        },
                        '& .MuiButtonBase-root-MuiIconButton-root': {
                            color: "white",
                        },
                        '& .MuiSvgIcon-root': {
                            fill: "white",
                        },
                        '. &MuiInputBase-input-MuiOutlinedInput-input': {
                            color: "white",
                        },

                    }}></DatePicker>
                </LocalizationProvider>
                <TextField id="number-of-people-for-trip" label="Number of people" variant="outlined" sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        color:"white",
                        borderColor: "white",
                    },
                    '& .MuiOutlinedInput-input': {
                        color: "white"
                    },
                    '& .Mui-focused': {
                        color: "white",
                        borderColor: "white",
                    },
                    '& .MuiInputLabel-root': {
                        color: "white",
                    },
                    '& .MuiInputBase-input-MuiOutlinedInput-input': {
                        color: "white",
                    },
                }}/>
                <Button variant="outlined" sx={{
                    color:"white",
                    borderColor: "white",
                }}>Find Trip Now</Button>
            </form>
        </section>
    )
}