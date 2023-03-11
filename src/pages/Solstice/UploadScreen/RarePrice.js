import React,{ useEffect, useState} from 'react' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { InputRarePriceConfig } from '../../../redux/actions/upload';

import {
    Box,
    Grid,
    Slider,
    FormControl,
    Radio,
    FormControlLabel,
    RadioGroup,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    useMediaQuery
} from '@mui/material';

import CloseImage from '../../../assets/close.svg' ;

import ETHIMAGE from '../../../assets/tokens/ETH.png' ;
import SOLIMAGE from '../../../assets/tokens/SOL.png' ;
import USDCIMAGE from '../../../assets/tokens/USDC.png' ;

import MasterCard from '../../../assets/paycards/Mastercard.svg' ;
import VisaCard from '../../../assets/paycards/Visa.svg' ;
import DiscoverCard from '../../../assets/paycards/Discover.svg' ;
import MaestroCard from '../../../assets/paycards/Maestro.svg' ;

import StepperControl from '../../../components/Solstice/UploadScreen/StepperControl';
import CalendarModal from '../../../components/Modals/CalendarModal';
  
import { useTheme } from '@mui/styles';
import { useStyles } from './StylesDiv/RarePrice.styles' ;

const RarePrice = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;

    const match1280 = useMediaQuery('(min-width : 1280px)') ;
    const match855 = useMediaQuery('(min-width : 855px)') ;

    const {
        handleChangeUploadStep,
        InputRarePriceConfig,

        rareBiddingPrice,
        rareBiddingUnit,
        rareAvailableItems,
        rareRoyalty,
        rareStripeCard,
        rareUnlimited,
        rareListingTime,
    } = props;

    const months = [
        "Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ] ;

    const [openCalendarModal, setOpenCalendarModal] = useState(false) ;
    const [selectedDay, setSelectedDay] = useState({
        from :{
            year: 2019,
            month: 4,
            day: 16,
        },
        to : {
            year: 2019,
            month: 4,
            day: 19,
        }
    });
    const [unlimited, setUnlimited] = useState(true) ;
    const [royalty, setroyalty] = useState(70);
    const [biddingPrice, setBiddingPrice] = useState('');
    const [biddingUnit, setBiddingUnit] = useState(0);
    const [availableItems, setAvailableItems] = useState('') ;
    const [stripeCard, setstripeCard] = useState('visa');

    const [disableContinue, setDisableContinue] = useState(true) ;

    const handleUnlimited = () => {
        setUnlimited(true) ;
        handleCloseCalendarModal() ;
    }

    const handleApply = () => {
        if(selectedDay.to) {
            setUnlimited(false) ;
            handleCloseCalendarModal();
        }
    }

    const handleChangeSelectedDay = (e) => {
        setSelectedDay(e);
    }

    const handleOpenCalendarModal = () => {
        setOpenCalendarModal(true) ;
    }

    const handleCloseCalendarModal =() => {
        setOpenCalendarModal(false) ;
    }

    const handleChangeBiddingPrice = (biddingPrice) => {
        setBiddingPrice(biddingPrice);
    }

    const handleChangeBiddingUnit = (biddingUnit) => {
        setBiddingUnit(biddingUnit) ;
    }
 
    const handleChangeAvailableItems = (availableItems) => {
        if(availableItems === '') setAvailableItems(availableItems) ;
        else setAvailableItems(Number(Number(availableItems).toFixed(0))) ;
    }

    const handleChangeRoyalty = (fee) => {
        setroyalty(fee) ;
    }

    const handleChangestripeCard = (stripeCard) => {
        setstripeCard(stripeCard) ;
    }

    const handleBack = () => {
        handleChangeUploadStep('price-config') ;
    }
    
    const handleContinue = () => {
        InputRarePriceConfig(biddingPrice, biddingUnit, availableItems, royalty, stripeCard, selectedDay, unlimited) ;
        handleChangeUploadStep('product-checkout') ;
    }

    useEffect(() => {
        handleChangeRoyalty(rareRoyalty);
        handleChangeBiddingPrice(rareBiddingPrice);
        handleChangeBiddingUnit(rareBiddingUnit) ;
        handleChangeAvailableItems(rareAvailableItems);
        handleChangestripeCard(stripeCard) ;
        setUnlimited(rareUnlimited);
        handleChangeSelectedDay(rareListingTime) ;
    }, [rareBiddingPrice, rareBiddingUnit, rareRoyalty, rareStripeCard, rareAvailableItems, rareListingTime, rareUnlimited]);

    useEffect(() => {
        if(biddingPrice !== '0' && availableItems !== '0' && royalty !== 0 && biddingPrice !== '' && availableItems !== '') setDisableContinue(false) ;
        else setDisableContinue(true) ;
    }, [biddingPrice, availableItems, royalty]) ;

    return (
        <Box className={classes.root}>
            <Box className={classes.greenBlur} />
            <Box className={classes.blueBlur} />
            <Box className={classes.pageTitleDiv}>
                Pricing and Tool
            </Box>
            <Box className={classes.typeDiv} >
                <Box sx={{color :"#338BEF" }}>Rare: &nbsp;</Box>
                <Box sx={{color : '#43D9AD'}}>Exclusive digital products</Box>
            </Box>
            <Grid container sx={{mt : '30px', mb : '30px'}}>
                <Grid item xs={match855 ? 6 : 12} sx={{ display : 'flex'}}>
                    <Box sx={{color : "#43D9AD", width : !match855 && '90%'}} >
                        <Box className={classes.priceCardTitle}>
                            Minimum Bidding Price
                        </Box>
                        <Box className={classes.priceCard}>
                            <Box>
                                <TextField
                                    placeholder='10.99'
                                    value={biddingPrice}
                                    type={'number'}
                                    onChange={(e) => handleChangeBiddingPrice(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {/* <FormControl variant="standard" className={classes.symbolDiv}>
                                                    <Select
                                                        disableUnderline
                                                        value={priceUnit}
                                                        onChange={(e) => handleChangePriceUnit(e.target.value)}
                                                        MenuProps={{
                                                            className : classes.selectDiv
                                                        }}
                                                    >
                                                        <MenuItem value={0}>
                                                            <img src={SOLIMAGE} width={30} height={30} style={{borderRadius : '50%'}}/>&nbsp;SOLT
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl> */}
                                                <Box sx={{color : theme.palette.green.G200, fontSize : '25px'}}>
                                                    USD
                                                </Box>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={match855 ? 6 : 12} >
                    <Box sx={{color : "#43D9AD"}}>
                        <Box className={classes.priceCardTitle}>
                            # of available items 
                        </Box>
                        <Box className={classes.availableCount}>
                            <TextField
                                type={'number'}
                                placeholder='200'
                                value={availableItems}
                                onChange={(e) => handleChangeAvailableItems(e.target.value)}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
             <Grid container>
                <Grid item xs={12} sx={{display : 'flex', alignItems : 'flex-end', height : '150px'}}>
                    <Box sx={{width : !match855 && '90%'}}>
                        <Box className={classes.royaltyDiv}>Royalty {royalty}%</Box>
                        <Box className={classes.royaltyCardDiv} >
                            <Slider
                                value={royalty}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                color={'primary'}
                                onChange={(e) => handleChangeRoyalty(e.target.value)}
                            />
                            <Box className={classes.percentTipDiv}>{royalty}% tip</Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
           <Grid container sx={{mt : '60px'}}>
                {/* <Grid item xs={match1280 ? 6 : 12} sx={{display : 'flex',}} >
                    <Box className={classes.bankAccountDiv}>
                        <Box sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                            <Box sx={{color : 'white', fontSize : 25, fontWeight : 'bold'}}>
                                Seller Bank Account
                            </Box>
                            <img src={CloseImage} />
                        </Box>
                        <FormControl sx={{mt : '20px' , mb : '20px'}}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={stripeCard}
                                onChange={(e) => handleChangestripeCard(e.target.value)}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="visa" control={<Radio  className={classes.radioBoxCss}/>} label="Visa" />
                                <FormControlLabel value="discover" control={<Radio className={classes.radioBoxCss}/>} label="Discover" />
                                <FormControlLabel value="maestro" control={<Radio className={classes.radioBoxCss}/>} label="Maestro" />
                                <FormControlLabel value="master" control={<Radio className={classes.radioBoxCss}/>} label="Master" />
                            </RadioGroup>
                        </FormControl>
                        <Box sx={{display  : 'flex', justifyContent : 'center', gap : '10px'}}>
                            <img src={VisaCard} className={stripeCard === 'visa' ? classes.activePaymentCard : classes.paymentCard} onClick={() => handleChangestripeCard('visa')}/>
                            <img src={DiscoverCard} className={stripeCard === 'discover' ? classes.activePaymentCard : classes.paymentCard} onClick={() => handleChangestripeCard('discover')}/>
                            <img src={MaestroCard} className={stripeCard === 'maestro' ? classes.activePaymentCard : classes.paymentCard} onClick={() => handleChangestripeCard('maestro')}/>
                            <img src={MasterCard} className={stripeCard === 'master' ? classes.activePaymentCard : classes.paymentCard} onClick={() => handleChangestripeCard('master')}/>
                        </Box>
                    </Box>
                </Grid>
                 <Grid item xs={match1280 ? 6 : 12} sx={{mb : '30px', mt : !match1280 && '20px',}}>
                    <Box sx={{color : '#43D9AD', fontFamily : 'Montserrat', fontSize : 20, pb : '10px', textAlign : match1280 ? 'center' : 'left'}}>
                        Listing Time Frame
                    </Box>
                    <Box className={classes.timeFrameCardDiv} onClick={handleOpenCalendarModal}>
                        {
                            !unlimited ? <>
                            {months[selectedDay?.from?.month-1]}&nbsp;{selectedDay?.from?.day} - {months[selectedDay?.to?.month-1]}&nbsp;{selectedDay?.to?.day}
                            </> : "Unlimited"
                        }
                    </Box>
                </Grid> */}
                <Grid item xs={12}>
                    <StepperControl 
                        activeStep={2}
                        handleBack={handleBack}
                        handleContinue={handleContinue}

                        disableContinue={disableContinue}
                    />
                </Grid>
            </Grid>
            
            <CalendarModal
                open={openCalendarModal}
                handleClose={handleCloseCalendarModal}

                selectedDay={selectedDay}

                handleChangeSelectedDay={handleChangeSelectedDay}
                handleSecond={handleApply}
                handleFirst={handleUnlimited}
                
                text1={'Unlimited'}
                text2={'Apply'}
            />
        </Box>
    )
}
RarePrice.propTypes = {
    InputRarePriceConfig : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    rareBiddingPrice : state.upload.rareBiddingPrice,
    rareBiddingUnit : state.upload.rareBiddingUnit,
    rareRoyalty : state.upload.rareRoyalty,
    rareStripeCard : state.upload.rareStripeCard,
    rareAvailableItems : state.upload.rareAvailableItems,
    rareListingTime : state.upload.rareListingTime,
    rareUnlimited : state.upload.rareUnlimited
});
const mapDispatchToProps = {
    InputRarePriceConfig
};
export default connect(mapStateToProps, mapDispatchToProps)(RarePrice) ;     