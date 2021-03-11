import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import {Container} from '@material-ui/core';

const LeagueDetails = () => {
    const {id} = useParams();
    const [league , setLeague] = useState({});
    useEffect (()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=+${id}`)
        .then(res=>res.json())
        .then(data => {
            data = Object.values(data);
            data = Object.values(data[0]);
            setLeague(data[0]);
            })
    },[id])
    console.log(league);
    return (
        <React.Fragment>
            <img src={league.strBanner} alt="" style ={{width:'100%', backgroundColor:'50%'}}/>
            <Container maxWidth="md">

            {
                league.strDescriptionEN
            }
            </Container>
        </React.Fragment>
    );
};

export default LeagueDetails;