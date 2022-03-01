export default function User(props) {
    return (
        <div className="user">
            <img src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=" style={{width: "50px"}} alt="avatarImg"/>
            <img src="" alt={props.username} />
            <p>Frist Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Username: {props.username}</p>
        </div>
    )
}