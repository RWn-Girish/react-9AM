

const HOCComp = (Component) => {
    return ({isLoading, ...props}) => {
        if(isLoading){
            return <h1>Loading....</h1>
        }else{
            return <Component {...props} />
        }
    }
}


export default HOCComp;