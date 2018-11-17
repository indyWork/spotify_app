
const album_style = {
    albumGroup: {      
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
    },

    albumHeader: {       
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '96%',
        marginTop: '30px',
        marginLeft: '6%',
    },

    albumBody: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'left',
        justifyContent: 'left',
        textAlign: 'left',
        height: '90%',
        width: '96%',
      },

    artistName: {
        display: 'block',
        fontSize: '28px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.2',
        letterSpacing: 'normal',
        textAlign: 'left',
    },
    album: {
        display: 'block',
        fontSize: '24px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.2',
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#848484'
    },
    albumName: {
        fontSize: '22px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.14',
        letterSpacing: 'normal',
        textAlign: 'left',
        paddingTop: '20px',
        marginLeft: '30px',
        marginRight:'5px',
    },

    albumArtist: {
        fontSize: '18px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.14',
        letterSpacing: 'normal',
        textAlign: 'left',
        marginLeft: '30px',
        
    },

    albumReleaseDate: {

        fontSize: '18px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.14',
        letterSpacing: 'normal',
        textAlign: 'left',
        marginTop: '20px',
        marginLeft: '30px',
    },
    albumTrack: {
        fontSize: '18px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.14',
        letterSpacing: 'normal',
        textAlign: 'left',
        marginBottom: '10px',
        marginLeft: '30px',
    },

    albumPreview:{
        borderTop: '1px solid black',
        backgroundColor:'#EFEFEF',
        height: '35px',
        paddingTop: '10px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '20px'
    },

    previewLink: {
        fontSize: '18px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.14',
        letterSpacing: 'normal',
        color: 'black',
        textDecoration: 'none',
    },

    card:{
        display: 'inline-block',
        maxWidth: '350px',
        minWidth: '300px',
        margin: '4%',   
        marginbottom: '19px',
        padding: '0px !important',
        border: '1px solid #AEAEAE',
        height: '490px',
        
    },
    cardImg: {
        margin: '0',
        padding: '0',
        width: '100%',
    },
    cardContent:{
        height: '210px',
        position: 'relative',
        padding: '0',
    },
    cardInfo:{
        height: '175px',
    }
    
}

const artist_style = {
    card:{
        display: 'inline-block',
        maxWidth: '350px',
        minWidth: '300copx',  
        margin: '4%',   
        marginbottom: '19px',
        padding: '0px !important',
        border: '1px solid #AEAEAE',
        height: '470px',
        
    },
    cardButton:{
        border: '0px',
        width: '100%',
    },
    cardAction: {
        backgroundColor: 'violet',
        padding: '-20px !important',
        margin: '-20px !important',
        height: '100%',
        width: '100% !important'
    },
    cardImg: {
        margin: '0',
        padding: '0',
        width: '100%',
    },
    cardContent:{
        height: '170px',
    },
    
    artistName: {
        fontSize: '22px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.14',
        letterSpacing: 'normal',
        textAlign: 'left',
    },
    artistFollower: {
        fontSize: '18px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.14',
        letterSpacing: 'normal',
        textAlign: 'left',
        marginTop: '15px',
    },
    artistPopularity: {
        textAlign: 'left',
        marginTop: '65px',
    },
    searchMsg: {
        fontSize: '28px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.14',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: 'red',
    },
}

const search_style = {
    searchContainer: {
        height: '100%',
        display: 'inline-block',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    searchBox: {
        height: '80px',
        border: '1px solid #AEAEAE',
        borderRadius: '10px',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '30px',

    },

    boxText: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '26px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.14',
        letterSpacing: 'normal',
    },
    boxImg: {
        padding: '1em',
        textAlign: 'right',
    },

    imgStyle: {
        width: '30px',
        height: '30px',
    }
}

const main_style = {
    container: {
        height: '98vh',
    },

    header: {
        backgroundColor: '#D7D7D7',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '30px',
        fontFamily: 'Roboto',
        fontSize: '26px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.2',
        letterSpacing: 'normal',
        textAlign: 'left',
        border: '1px solid #969696',
        color: '#333333',
        height: '5%',
        
    },

    main: {
        height: '95%',
    }

}

const login_style = {
    loginContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBox: {
        height: '80px',
        border: '1px solid #AEAEAE',
        borderRadius: '10px',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',


    },
    boxText: {
        padding: '1em',
        flexGrow: '7',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: '26px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.2',
        letterSpacing: 'normal',

    },
    boxImg: {
        padding: '1em',
        textAlign: 'right',
    }


}

export { main_style, login_style, search_style, artist_style, album_style }