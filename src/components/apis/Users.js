const Users = [
  {
    userId: 1,
    name: "Tom Holland",
    email: "tom@holland.com",
    avatar:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1663066809/funtasticVgram_users/tzqrnulkfqou26daikv0.jpg",
    posts: [{ postId: 1 }],
    followings: [{ userId: 2 }, { userId: 3 }, { userId: 4 }],
    followers: [{ userId: 2 }, { userId: 3 }, { userId: 4 }],
  },
  {
    userId: 2,
    name: "Asif Mondal",
    email: "Asif@mondal.com",
    avatar:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1663071140/funtasticVgram_users/w8n4bkiaoluvyc1xpl6d.jpg",
    posts: [{ postId: 2 }, { postId: 3 }],
    followings: [{ userId: 1 }, { userId: 3 }, { userId: 5 }],
    followers: [{ userId: 1 }, { userId: 3 }, { userId: 6 }],
  },
  {
    userId: 3,
    name: "Mohsin King",
    email: "mohsin@gmail.com",
    avatar:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1664103054/funtasticVgram_users/gq8auczvalr1vl3bh3lf.png",
    posts: [{ postId: 4 }, { postId: 5 }],
    followings: [{ userId: 2 }, { userId: 4 }, { userId: 5 }],
    followers: [{ userId: 2 }, { userId: 4 }],
  },
  {
    userId: 4,
    name: "Mr Faiz Hayat",
    email: "faiz@gmail.com",
    avatar:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1664726451/funtasticVgram_users/c5l3miypu8tw5wjw7rc9.jpg",
    posts: [],
    followings: [{ userId: 2 }, { userId: 3 }, { userId: 5 }],
    followers: [{ userId: 2 }, { userId: 3 }, { userId: 1 }],
  },
  {
    userId: 5,
    name: "Arish Ahmed",
    email: "arish@gmail.com",
    avatar:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1663581984/funtasticVgram_users/dg4ki4xrxzilobljdln1.jpg",
    posts: [],
    followings: [{ userId: 2 }, { userId: 3 }, { userId: 4 }],
    followers: [{ userId: 2 }, { userId: 3 }, { userId: 4 }],
  },
  {
    userId: 6,
    name: "Asif ",
    email: "asif2072002@gmail.com",
    avatar:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1663074130/funtasticVgram_users/lkbzj8irjh6pgwrmtmep.jpg",
    posts: [{ postId: 6 }],
    followings: [{ userId: 1 }, { userId: 3 }, { userId: 4 }],
    followers: [{ userId: 2 }, { userId: 5 }, { userId: 4 }],
  },
];

export default Users;
