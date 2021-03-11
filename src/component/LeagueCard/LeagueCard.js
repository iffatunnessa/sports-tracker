import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        maxHeight: 400,
        margin: '20px',
        textAlign:'center'
    },
    img:{
        width:100,
        height:100,
        paddingTop:30,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnArea:{
        justifyContent: 'center',
        paddingBottom: 20,
    },
    btnText:{
        textTransform: 'capitalize',
    },
    icon:{
        marginLeft: '10px',
    },
});

const LeagueCard = (props) => {
    const classes = useStyles();
    const { strLeague, strSport, strBadge ,idLeague} = props.league;
    // console.log(teamHandler);
    return (
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.img}
                        component="img"
                        height="140"
                        image={strBadge}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {strLeague}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {strSport}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.btnArea}>
                    <Button component={Link} variant="contained" color="primary" classes={{label: classes.btnText}}  to={`/leagueDetails/${idLeague}`}>Explore  <FontAwesomeIcon className={classes.icon} icon={faArrowRight}/> </Button> 
                    
                </CardActions>
                
            </Card>
        </Grid>

    );
};

export default LeagueCard;