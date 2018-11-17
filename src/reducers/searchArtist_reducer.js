const searchArtist = ( state = {}, action) => {
    switch(action.type) {
      case 'REQUEST_ARTIST':
      case 'ARTIST_NOT_EXISTS':
        return Object.assign({}, state, {
          isFetching: action.isFetching,
          error: action.error,
          meta: action.meta,
        })
      case 'RECEIVE_ARTIST':
        return Object.assign({}, state, {
          data: action.payload,
          isFetching: action.isFetching,
          error: action.error,
          meta: action.meta,
        })
      default:
        return state
    }
  }
  
  export default searchArtist
  