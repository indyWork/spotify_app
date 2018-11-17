const searchAlbum = ( state = {}, action) => {
    switch(action.type) {
      case 'REQUEST_ALBUM':
      case 'ALBUM_NOT_EXISTS':
        return Object.assign({}, state, {
          isFetching: action.isFetching,
          error: action.error,
          meta: action.meta,
        })
      case 'RECEIVE_ALBUM':
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
  
  export default searchAlbum
  