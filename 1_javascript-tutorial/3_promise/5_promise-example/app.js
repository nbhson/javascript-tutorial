var users = [
  {
    id: 1,
    name: "Kien Nguyen",
  },
  {
    id: 2,
    name: "Son Dang",
  },
  {
    id: 3,
    name: "Hung Dam",
  },
];

comments = [
  {
    id: 1,
    content: "Anh Son chua ra video",
    userId: 1,
  },
  {
    id: 2,
    content: "Vua ra xong em oi",
    userId: 2,
  },
  {
    id: 3,
    content: "Len xem nha!",
    userId: 2,
  },
];

// 1. lấy comment
// 2. từ comment lấy ra userId
// 3. từ userId lấy ra user tương ứng

function getComment() {
    return Promise.resolve(comments);
}

function getUsersByIds(userId) {
  var user = users.filter((user) => userId.includes(user.id))
  return Promise.resolve(user);
}

getComment()
  .then((comments) => {
    // get data
    var userIds = comments.map((comment) => {
      return comment.userId;
    });

    return getUsersByIds(userIds).then((users) => {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    console.log(data);
    // render UI
    var users = data.users;
    var comments = data.comments;
    
    var commentBlock = document.querySelector("#comments-block");
    var html = "";

    users.forEach((user) => {
      let userWithCommnet = comments.find((comment) => comment.userId === user.id);
      html += `<li><strong>${user.name}</strong>: ${userWithCommnet.content}</li>`;
    });
    
    commentBlock.innerHTML = html;
  });