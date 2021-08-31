import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components';
import { SEE_VISITS_QUERY } from '../graphql/visits';
import { useMutation, useQuery } from '@apollo/client';
import { y4m2d2Format } from '../Util/DateHandle';


const useStyles = makeStyles(({ palette }) => ({

    card: {
        borderRadius: 4,
        minWidth: 256,
        textAlign: 'center',
        marginTop: 3,
        padding: 3,
        height: 110
    },
    details: {
        padding: 0,
        "&:last-child": {
            paddingBottom: 0
        },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 100,
        height: 100,
        margin: 0,
    },
    typo: {
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 13,
        textAlign: "left",
        marginBottom: '0.1em',
        marginLeft: 8,
    },
    detailInfo: {
        fontSize: 12,
        textAlign: 'left',
        color: palette.grey[600],
        marginBottom: 3,
        paddingLeft: 10,
        paddingTop: 5,
    },
    statLabel: {
        fontSize: 12,
        color: palette.grey[500],
        fontWeight: 500,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        margin: 0,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        letterSpacing: '1px',
    },
}));

function ProfileCard({ id ,name, dateName, place, yyyymmdd, file, rating}) {
    const styles = useStyles();
    const placeOrEmpty = place ? '@'+place : ""
    const formatDateTime = y4m2d2Format(yyyymmdd)
    console.log(file);
    return (
        <Card className={styles.card}>
            <CardContent className={styles.details}>
                <div className={styles.typo}>
                    <h3 className={styles.heading}>{name}</h3>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        style={{ marginLeft: 8 }}
                    />
                    <div className={styles.detailInfo}>
                        <p style={{ marginBottom: 3 }} >{`${dateName}${placeOrEmpty}`}</p>
                        <p >{formatDateTime}</p>
                    </div>
                </div>
                <Avatar className={styles.avatar} src={file} />
            </CardContent>
        </Card>
    );
};

export default ProfileCard