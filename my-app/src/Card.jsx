// import profile from './assets/profile.jpg'
function Card(){
    const profile = 'src/assets/profile.jpg'
    return(
        <div className="card">
           <img className="card-image" src={profile} alt="profile picture" />
           <h3 className='card-title'>Abel Fentaw</h3>
           <p className='card-text'>I'm a Software Engineer and backend developer</p>
        </div>
    );
}
export default Card