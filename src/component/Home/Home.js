import React, { useEffect, useState } from 'react';
import LeagueCard from '../LeagueCard/LeagueCard';
import './Home.css';
import {Container, Grid} from '@material-ui/core';

const Home = () => {
    const [leagues , setLeagues] = useState([]);
    useEffect (()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England")
        .then(res=>res.json())
        .then(data => { 
            const dataArray = Object.values(data);
            setLeagues(dataArray[0])})
    },[])
    console.log(leagues); 
    return (
        <React.Fragment>
            <div className='banner'>
                <p>Sports Tracker</p>
            </div>
            <Container maxWidth="md">
                <Grid container spacing={0}>
                {
                    leagues.map(league => <LeagueCard league={league}> </LeagueCard>)
                }
                </Grid>
            
            </Container>
        </React.Fragment>
            
            
    );
};

export default Home;