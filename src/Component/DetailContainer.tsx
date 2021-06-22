import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DetailCard from './DeatailCard';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import img from '../static/images/relief_gabi.jpg';
import img_ from '../static/images/unrelief_gabi.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      width: '100%',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    details:{
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }),
);


function DetailContainer(){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography align='center' className={classes.heading}>2021.08.18</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div>
            <Carousel interval={null}>
              <Carousel.Item>
                <img src={img} width='450px'/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={img_} width='450px' />
              </Carousel.Item>
            </Carousel>
          </div>
          <Typography>
            너무너무 재밌었다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>2021.05.23</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            너무너무 재밌었다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>2020.09.05</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            너무너무 재밌었다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>2020.08.18</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            너무너무 재밌었다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DetailContainer;