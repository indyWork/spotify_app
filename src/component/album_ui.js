import React from "react";

import { album_style } from "../styling.js";


import { Typography, Card, CardMedia, CardContent } from '@material-ui/core';

class Album_ui extends React.Component {
    render() {
        const { data, isFetching, error } = this.props;
        console.log(data);
        
        return (
            <div className="col-xg-12 col-g-12 col-12 col-s-10 col-xs-12 " style={album_style.albumGroup}>

                <React.Fragment>
                    {
                        (data != undefined &&
                            data.length != 0 &&
                            isFetching == false) ?
                            <React.Fragment>
                                <div style={album_style.albumHeader}>
                                    <div style={album_style.artistName}>{data.items[0].artists[0].name}</div>
                                    <div style={album_style.album}>Albums</div>
                                </div>

                                <div style={album_style.albumBody}>
                                    {data.items.map(item => {
                                        let image = "";

                                        if (item.images.length > 0) {
                                            for (let img in item.images) {
                                                if (img != undefined) {

                                                    image = item.images[0].url;
                                                }
                                            }
                                        }
                                        return (
                                           
                                            <Card 
                                            // raised={false} elevation={0}
                                                key={item.id}
                                                className="col-xg-2 col-g-3 col-4 col-s-5 col-xs-9 " 
                                                style={album_style.card} >



                                                <div className="cardAction" >
                                                    <CardMedia
                                                        component="img"
                                                        alt="Image not found"
                                                        style={album_style.cardImg}
                                                        height="280px"
                                                        image={image}
                                                        title="Artist image"
                                                    />
                                                    <CardContent style={album_style.cardContent}>
                                                        <div style={album_style.cardInfo}>
                                                        <Typography style={album_style.albumName}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography style={album_style.albumArtist}>
                                                            {item.artists[0].name}
                                                        </Typography>
                                                        <Typography style={album_style.albumReleaseDate}>
                                                            {item.release_date}
                                                        </Typography>
                                                        <Typography style={album_style.albumTrack}>
                                                            {item.total_tracks} tracks
                                                        </Typography>
                                                        </div>
                                                        
                                                         <Typography style={album_style.albumPreview}>
                                                             <a target="_blank" href={item.external_urls.spotify} style={album_style.previewLink}>
                                                                Preview on Spotify
                                                             </a>
                                                          </Typography>
                                                    </CardContent>
                                                </div>


                                            </Card>
                                            
                                        )
                                        
                                    })}
                                </div>
                            </React.Fragment>
                            :
                            null
                    }
                </React.Fragment>
            </div>
        );
    }
}

export default Album_ui;