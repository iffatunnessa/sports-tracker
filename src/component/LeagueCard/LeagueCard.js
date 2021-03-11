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

const useStyles = makeStyles({
    root: {
        width: 290,
        height: 340,
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
        color:'white'
    },
    icon:{
        marginLeft: '10px',
    },
    btn:{
        background: 'linear-gradient(90deg, #ebb523 30%, #fcb900 90%)',
    }
});

const LeagueCard = (props) => {
    const classes = useStyles();
    const { strLeague, strSport, strBadge ,idLeague} = props.league;
    
    return (
        <Grid item xs={12} sm={4}>
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
                    <Button component={Link} variant="contained" classes={{root: classes.btn, label: classes.btnText}}  to={`/leagueDetails/${idLeague}`}>Explore  <FontAwesomeIcon className={classes.icon} icon={faArrowRight}/> </Button> 
                    
                </CardActions>
                
            </Card>
        </Grid>

    );
};

export default LeagueCard;