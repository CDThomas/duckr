// Data needed by pages
Home
  All ducks

User profile
  User info
  User's ducks

Replies
  Specific duck
  Duck's replies

// Firebase schema:
/users
  uid
    name
    uid
    avatar

/notifications
  uid
    notificationId
      type
      author
      authorAvatar
      uid (of author)
      duckId
      timestamp

/ducks
  duckId
    avatar
    duckId
    name
    text
    timestamp
    uid (of duck author)

/likeCount
  duckId
    0

/usersDucks
  uid
    duckId
      avatar
      duckId
      name
      text
      timestamp
      uid (of duck author)

/replies
  duckId
    replyId
      name
      comment
      uid
      timestamp
      avatar

/usersLikes
  uid
    duckId: true
