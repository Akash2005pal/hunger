"use client"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ProductInfoComponent({data}) { 
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    
    return (
        <div style={{
            display: 'flex',
            flexDirection:'column'
        
        }}>
                
           <Accordion style={{ boxShadow:'none',borderBottom:'1px solid #A9A9A9', background: "#F3ECF7"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" style={{
                display:'flex',
                fontWeight:400,
                fontSize: 20,
                 fontFamily: 'poppins',
                
            }}>Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails>
                {data?.ingridients}
        </AccordionDetails>
      </Accordion>
    
              


                <div style={{ marginTop: matches ? "4%" : "5%" }}>
                    <Accordion style={{ boxShadow:'none',borderBottom:'1px solid #A9A9A9', background: "#F3ECF7"}}>
                        <AccordionSummary
                        
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography component="span" style={{
                                display: 'flex',
                                fontSize: 20,
                                fontFamily: 'poppins',
                                fontWeight: 400
                            }}>
                                Share
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ paddingLeft: 0 }}>
                                             <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <img style={{width:'20px',height:'20px'}} src={'/images/linkedin-sign.png'} />
                        <img style={{width:'20px',height:'20px'}} src={'/images/social.png'}  />
                        <img style={{width:'20px',height:'20px'}} src={'/images/facebook.png'} />
                        <img style={{width:'20px',height:'20px'}}  src={'/images/instagram.png'}  />
                        <img style={{width:'20px',height:'20px'}} src={'/images/pinterest-logo.png'}  />
                    </div>
 
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        
    )
}