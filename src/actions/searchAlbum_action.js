import { request_init } from "./helper"


const fetch_Album = () =>({
  type: 'REQUEST_ALBUM',
  isFetching: true,
  error: false,
  meta:{receivedAt: Date.now()}
})


  const receive_AlBum = (json) =>({
  type: 'RECEIVE_ALBUM',
  payload: json,
  isFetching: false,
  error: false,
  meta:{receivedAt: Date.now()}
})

const Album_not_exists = () =>({
  type: 'ALBUM_NOT_EXISTS',
  isFetching: false,
  error: true,
  meta:{receivedAt: Date.now()}
})



  const get_Album = (input) => (dispatch) => {
  dispatch(fetch_Album())
  let request_query = ''

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let url = 'https://api.spotify.com/v1/artists/'+input.id+"/albums";
  
  let request = fetch(proxyurl+url, request_init('GET', input.authToken))
    .then((response)=>{
      if(response.ok){
          
        response.json()
          .then((responseJson)=>{
            dispatch(receive_AlBum(responseJson));
          })
      }else{
        dispatch(Album_not_exists());
      }
    })
  return request;
}


export { get_Album }
