
    export const request_init = (method, authToken) => {

    let header

    header = {
                method: method,
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'version': 'v1',
                'Authorization': 'Bearer '+ authToken
                },
            };
   
   
    if(authToken != undefined || authToken != null){
      
        header.headers = Object.assign(header.headers, {'Authorization': 'Bearer '+ authToken})
        
    }
 
    
    return header;
}

