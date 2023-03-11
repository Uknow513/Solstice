import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles((theme) => ({
    root : {
        backgroundColor : '#010C15',

        "& .Mui-disabled": {
            color : 'gray !important',
            backgroundColor: 'rgb(28, 37, 49) !important',
        }
    },
    descriptionDiv : {
        backgroundColor : '#011627',
        
        padding : 30,
        margin : 20,
        height : 'calc(100vh - 40px)',
        
        border: '1px solid #1E2D3D',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 8,
        
        position : 'relative',

        overflow : 'hidden',

        ['@media (max-width : 800px)'] : {
            height : 'auto'
        },
    },
    helloDiv : {
        fontStyle: 'normal',
        fontWeight: 450,
        fontSize: 18,
        letterSpacing : 1.5,

        marginBottom : 10,

        color: '#E5E9F0'
    },
    welcomeDiv : {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 62,
        letterSpacing : 5,

        marginBottom : 15,
        
        color: '#E5E9F0',

        ['@media (max-width : 414px)'] : {
            fontSize : 40
        },
        ['@media (max-width : 390px)'] : {
            fontSize : 35,
        },
    },
    tickDiv : {
        color : '#43D9AD',
        fontSize : 20,
        fontWeight : 400,

        letterSpacing : 3,

        ['@media (max-width : 385px)'] : {
            fontSize : 18,
            letterSpacing : 1,
        },
        ['@media (max-width : 290px)'] : {
            fontSize : 14,
            letterSpacing : 1,
        },
    },
    slashDiv : {
        color: '#607B96',

        fontSize : 14,
        fontWeight : 400,

        marginTop : 170,
        marginBottom : 100
    },
    lineDiv : {
        borderBottom : '2px solid #1E2D3D',
        
        marginLeft : -30,
        marginBottom : 80,
        marginTop : 30,

        width  : '70%',
    },
    greenBlur : {
        position : 'absolute',
        width: 200,
        height: 150,
        left: 45,
        top: 170,

        background: '#43D9AD',
        opacity: '0.35',
        filter: 'blur(55px)',
        transform: 'rotate(-140.38deg)'
    },
    blueBlur : {
        position : 'absolute',
        width: 200,
        height: 150,
        right: 45,
        top: 450,

        background: '#4D5BCE',
        opacity: '0.35',
        filter: 'blur(55px)',
        transform: 'rotate(-140.38deg)'
    },
    formDiv : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        
        height : '100vh',

        paddingLeft : '20%',
        paddingRight: '20%',

        ['@media (max-width : 950px)'] : {
            paddingLeft : '10px',
            paddingRight : '10px'
        },

        ['@media (max-width : 800px)'] : {
            height : 'auto',
        },
        
        "& .MuiGrid-item" : {
            display : 'flex',
            justifyContent : 'center'
        },
        "& .MuiInputAdornment-root" : {
            "& p" :{
                color : 'white !important'
            } 
        },
        "& .MuiInputLabel-root" : {
            color : "white !important",
        },
        "& .MuiFormControl-root" : {
            borderRadius : 5,
            color : 'white',
            "& svg" :{
                color : 'white'
            }
        },
        '& .MuiOutlinedInput-root': {
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
            color : 'white !important',
        },
        "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: 'red',
        },
        "& .MuiFormHelperText-root" : {
            background : '#010C15 !important',
            marginTop : '10px !important'
        },

        "& .MuiFormHelperText-root" : {
            fontSize: 15,
            color : '#ff2929 !important',
            marginTop : '5px !important'
        },
    },
    signUpDiv : {
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 28,
        color: '#FFFFFF',

    },
    buttonCss : {
        textTransform : 'capitalize !important',
        letterSpacing : '3px !important',
        width : 250,
        borderRadius : '25px !important',
        height : '50px',
        fontSize : '20px !important',
    },
    contentDiv : {
        color : "#969AA8 !important",
        fontSize : 13,

        flexDirection : 'column !important',
        alignItems: 'center',


        marginTop : '20px !important',
        marginBottom : '20px !important'
    },
    contentHighlight : {
        color : '#338BEF',
        borderBottom : '1px solid',
        cursor : 'pointer',
        "&:hover" : {
            color : 'white'
        },
        textAlign : 'center',
    },
    questionDiv : {
        color : '#969AA8 !important',
        marginBottom : '10px !important',
    },
    flagDiv : {
        color : theme.palette.green.G200,
        "& input" : {
            '&:focus': {
                border: "1px solid " + theme.palette.green.G400 + ' !important',
            },
            '&:hover': {
                border: "1px solid " + theme.palette.green.G400 + ' !important',
            },

            outline : 'none !important',
            padding : '10px !important',
            display : 'flex !important', alignItems : 'center !important',
            paddingLeft : '10px !important',
            color : '#43D9AD !important',
            background : theme.palette.blue.main,
            border: "1px solid " + theme.palette.green.G400 + ' !important',
            height : 48,
            width : '100% !important',
            borderRadius : 5
        },
    }
})) ;