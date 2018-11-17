
import { request_init } from "./helper"


const fetch_Artist = () =>({
  type: 'REQUEST_ARTIST',
  isFetching: true,
  error: false,
  meta:{receivedAt: Date.now()}
})


  const receive_Artist = (json) =>({
  type: 'RECEIVE_ARTIST',
  payload: json,
  isFetching: false,
  error: false,
  meta:{receivedAt: Date.now()}
})

const Artist_not_exists = () =>({
  type: 'ARTIST_NOT_EXISTS',
  isFetching: false,
  error: true,
  meta:{receivedAt: Date.now()}
})



  const get_Artist = (input) => (dispatch) => {
  dispatch(fetch_Artist())
  let request_query = ''
  if(input != null){
      Object.keys(input).map((key, index)=>{
          if(index != 0){
          request_query += '&'
          }
          request_query += key + '=' + input[key]
      })
  }


  let request = fetch('https://api.spotify.com/v1/search?'+request_query, request_init('GET', input.authToken))
    .then((response)=>{
      if(response.ok){
          
          
        response.json()
          .then((responseJson)=>{
            dispatch(receive_Artist(responseJson));
          })
      }else{
        dispatch(Artist_not_exists());
      }
    })
  return request;
}


export { get_Artist }
