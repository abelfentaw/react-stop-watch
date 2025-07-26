

function UserGreeting(props){
return(
    props.logging ? <h2 className="welcome-message">Welcome {props.userName}</h2> 
                :  <h2  className="logging-message">Please Continue Logging</h2>
);
}
export default UserGreeting