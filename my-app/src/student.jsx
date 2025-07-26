// import PropTypes from 'prop-types'

function Student({ name = "Guest", age = 25, isStudent = true }){
    return(
        <div className="student">
           <p>Name: {name}</p>
           <p>Age: {age}</p>
           <p>IsStudent: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.defaultProps = {
    name: "Guest",
    age: 25,
    isStudent: true
};

export default Student