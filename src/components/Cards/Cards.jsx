import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup';

//import cNames from 'classnames';    // to allow multiple CSS style for each Grid 

const Cards = (props) =>{
   
    const {data} = props;
    const {confirmed, recovered, deaths, lastUpdate} = data
  //console.log("Recovered are "+ recovered); 
  //console.log('In Child');
  if (!confirmed) {
    return 'Loading...';
}  
   return (
    <div className={styles.container}>
        <Grid container spacing={3} justify="center">  
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterButtom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","                       
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of Covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterButtom>Recoverd</Typography>
                    <Typography variant="h5">
                    <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","                       
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Recoveries from Covid-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterButtom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","                       
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Deaths caused by Covid-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
)
   
}

export default Cards;