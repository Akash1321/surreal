const PostHeader = ({username, createdAt}) => {
    return (
        <div>
            <p>{username}</p>
            <p>{createdAt}</p>
        </div>
    )
}

export {PostHeader}