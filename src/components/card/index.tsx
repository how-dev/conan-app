import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: 40,
            width: "80%",
            boxShadow: "4px 0 10px #7a3700",
            background: "radial-gradient(#7a3700 50%, black)",
            color: "white",
            borderRadius: 15,
        },
        media: {
            height: 300,
            paddingTop: '56.25%',
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

interface Props {
    title: string;
    year: number;
    cover: string;
    persons: Array<{ name: string; id: number;}>;
    description: string;
    totalPages: number;
    coverPrice: string;
    company: string;
    id: number;
}

export const CompleteCard: React.FC<Props> = ({ id, company, coverPrice, totalPages, persons, title, cover, year, description }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const history = useHistory();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <IconButton aria-label="settings" onClick={() => history.push(`/cover/${id}`)}>
                        <FormatIndentIncreaseIcon />
                    </IconButton>
                }
                title={title}
                subheader={year}
            />
            <CardMedia
                className={classes.media}
                image={cover}
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">Editora: {company}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <AddCircleIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Páginas: {totalPages}</Typography>
                    <Typography paragraph>{description}</Typography>
                    <Typography paragraph>Preço: {coverPrice}</Typography>

                    Principais Personagens:

                    {persons.map((person: {id: number, name: string}, index: number) => (
                        <Typography key={index} variant="body2" component="li">{person.name}</Typography>
                    ))}
                </CardContent>
            </Collapse>
        </Card>
    );
}
