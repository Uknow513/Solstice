import * as React from 'react' ;

import { useWalletInfo } from '../../../contexts/WalletContext' ;

import {connect} from 'react-redux' ;
import { ExpandedItem } from '../../../redux/actions/setting';
import PropTypes from 'prop-types' ;

import ExpandMoreIcon from '@mui/icons-material/ExpandMore' ;

import {
    Box ,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button
} from '@mui/material' ;

import { useStyles } from './StylesDiv/PurchaseLink.styles';
import { useTheme } from '@mui/material' ;

const PurchaseLink = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;
    
    const [expand, setExpand] = React.useState(false) ;

    const {
        ExpandedItem,
        expandedItem
    } = props ;

    const {
        provider ,
        web3Provider,
        walletAddress,
        chainData,
        isWalletConnected,
    } = useWalletInfo() ;

    const TriggerExpandedItem = (e, expanded, itemIndex) => {
        ExpandedItem(itemIndex) ;
        setExpand(expanded) ;
    }
    
    React.useEffect(() => {
        if(expandedItem !== 4){
            setExpand(false) ;
        }
    }, [expandedItem]) ;

    return (
        <Box className={classes.root}>
            <Accordion
                expanded={expand}
                onChange={(e, expanded) => TriggerExpandedItem(e, expanded, 4)}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{backgroundColor : 'rgba(51, 139, 239, 0.21) !important'}}
                >
                    <Box sx={{display : 'flex', justifyContent : 'flex-start', alignItems : 'center'}}>
                        <Box className={classes.circlePrefix} /><Box>Create purchase links</Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails
                    sx={{padding : '10px'}}
                >
                    <Box className={classes.descriptionDiv}>
                        Comming Soon...
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
       
    )
}
PurchaseLink.propTypes = {
    ExpandedItem : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    expandedItem : state.setting.expandedItem
})
const mapDispatchToProps = {
    ExpandedItem
}
export default connect(mapStateToProps, mapDispatchToProps)(PurchaseLink) ;