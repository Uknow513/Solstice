import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiFormControl-root" : {
            borderRadius : 15,
            background : 'white',

            padding : '0px !important',

            "& svg" :{
                color : 'white'
            },

            marginBottom : 30,
        },
        '& .MuiOutlinedInput-root': {
            borderRadius : 15,

            padding : '0px !important',


            '& fieldset': {
                borderColor: theme.palette.green.G400 + ' !important',
            },
            '&:hover fieldset': {
                borderColor: theme.palette.green.G400 + ' !important',
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.green.G400 + ' !important'
            },
        },
        "& .MuiInputBase-input" :{
            color : 'black !important',
        },
    },
    createButtonCss  : {
        borderTopRightRadius : '15px !important',
        borderBottomRightRadius : '15px !important',

        background : '#3772FF !important',
        textTransform : 'capitalize !important',
        width : 300,
        ['@media (max-width : 950px)'] : {
            width : 150
        },
        ['@media (max-width : 350px)'] : {
            width : 'auto'
        },

        border : '2px solid #3772FF !important'
    }
})) ;
