import React, { useEffect, useState } from 'react';
import {  useParams } from "react-router-dom";
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import female from './image/female.png';
import male from './image/male.png';
import found from './image/found.png';
import mixed from './image/mixed.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faFlag, faFutbol, faVenusMars} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faYoutube,faTwitter } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '10px 40px',
        background: '#ebb523',
        color: 'white',
        marginTop: '10px',
        borderRadius: '20px'
    },
    description: {
        color: 'white',
        marginTop: '10px'
    },
    image: {
        width: '95%',
        padding: '10px'
    },
    icon: {
        marginRight: '10px',
    },
    iconImg: {
        width: '21px',
        marginRight: '10px',
    },
    fbIcon:{
        fontSize :'50px',
        color: '#3B5998',
        background:'white',
        borderRadius:'50%',
    },
    twtIcon:{
        color: 'white',
        fontSize :'30px',
        marginRight:'30px',
        background : '#1DA1F2',
        borderRadius : '50%',
        padding: '10px',
    },
    ytIcon:{
        color: 'white',
        fontSize :'30px',
        backgroundColor: '#FF0000',
        borderRadius : '50%',
        padding: '10px',
        marginLeft:'30px'
    },
    footer:{
        textAlign:'center'
    }
});

const LeagueDetails = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [league, setLeague] = useState([]);
    const { strCountry, strGender, strSport, strLeague, intFormedYear,strWebsite,strTwitter,strYoutube } = league;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=+${id}`)
            .then(res => res.json())
            .then(data => {
                data = Object.values(data);
                data = Object.values(data[0]);
                setLeague(data[0]);
            })
    }, [id])
    console.log(league);
    return (
        <React.Fragment>
            <img src={league.strBanner} alt="" style={{ width: '100%', backgroundColor: '50%' }} />
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={6}>
                                    <h1>{strLeague}</h1>
                                    <h3><img src={found} alt="nothing" className={classes.iconImg} />Founded : {intFormedYear}</h3>
                                    <h3><FontAwesomeIcon className={classes.icon} icon={faFlag} /> Country: {strCountry}</h3>
                                    <h3><FontAwesomeIcon className={classes.icon} icon={faFutbol} />Sports Type: {strSport}</h3>
                                    <h3>
                                        {strGender === 'Male' ? (<FontAwesomeIcon className={classes.icon} icon={faMars} />)
                                            : strGender === 'Female' ? (<FontAwesomeIcon className={classes.icon} icon={faVenus} />)
                                                : (<FontAwesomeIcon className={classes.icon} icon={faVenusMars} />)} Gender: {strGender}</h3>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {strGender === 'Male' ? (<img src={male} alt="nothing" className={classes.image} />)
                                        : strGender === 'Female' ? (<img src={female} alt="nothing" className={classes.image} />)
                                            : (<img src={mixed} alt="nothing" className={classes.image} />)
                                    }
                                </Grid>
                            </Grid>
                        </Paper>
                        <div className={classes.description}>{league.strDescriptionEN}</div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.footer}>
                        <a  href={`https://${strTwitter}`}><FontAwesomeIcon className={classes.twtIcon} icon={faTwitter} /></a>
                        <a  href={`https://${strWebsite}`}><FontAwesomeIcon className={classes.fbIcon} icon={faFacebook} /></a>
                        <a  href={`https://${strYoutube}`}><FontAwesomeIcon className={classes.ytIcon} icon={faYoutube} /></a>
                       
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default LeagueDetails;