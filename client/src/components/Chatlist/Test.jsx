import Avatar from "../common/Avatar";


const Test = ({userInfo}) => {
    return userInfo?.profileImage ? (
      <Avatar type="sm" image={userInfo?.profileImage} />
    ) : <p>loading..</p>
  }

export default Test