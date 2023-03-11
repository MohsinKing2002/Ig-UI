const Posts = [
  {
    postId: 1,
    caption: "Farewell and Teachers day programme",
    image:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1663070718/funtasticVgram/jn6sonwcozj2si3hzzoc.jpg",
    owner: {
      userId: 1,
      name: "Tom Holland",
      avatar:
        "https://res.cloudinary.com/dseldmvfp/image/upload/v1663066809/funtasticVgram_users/tzqrnulkfqou26daikv0.jpg",
    },
    likes: [],
    comments: [],
  },
  {
    postId: 2,
    caption: "⏺️ Nice smile ⏺️",
    image:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1663071933/funtasticVgram/uj9gabdwgtw2opdyv27p.jpg",
    owner: {
      userId: 2,
      name: "Asif Mondal",
      avatar:
        "https://res.cloudinary.com/dseldmvfp/image/upload/v1663071140/funtasticVgram_users/w8n4bkiaoluvyc1xpl6d.jpg",
    },
    likes: [{ userId: 4 }, { userId: 1 }, { userId: 5 }],
    comments: [],
  },
  {
    postId: 3,
    caption: "Me 😎",
    image:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1663610868/funtasticVgram/tpozofeleaspniqwkhfu.jpg",
    owner: {
      userId: 2,
      name: "Asif Mondal",
      avatar:
        "https://res.cloudinary.com/dseldmvfp/image/upload/v1663071140/funtasticVgram_users/w8n4bkiaoluvyc1xpl6d.jpg",
    },
    likes: [{ userId: 3 }, { userId: 1 }],
    comments: [
      {
        user: { userId: 2 },
        comment: "Guys Like share and Comment...!!",
      },
      {
        user: { userId: 3 },
        comment: "🔥🔥🔥🔥🔥",
      },
    ],
  },
  {
    postId: 4,
    caption: "Love it ❤",
    image:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1664726011/funtasticVgram/n9vtugrzzod6tfkquliw.jpg",

    owner: {
      userId: 3,
      name: "Mohsin King",
      avatar:
        "https://res.cloudinary.com/dseldmvfp/image/upload/v1664103054/funtasticVgram_users/gq8auczvalr1vl3bh3lf.png",
    },
    likes: [{ userId: 1 }, { userId: 4 }],
    comments: [],
  },
  {
    postId: 5,
    caption: "Me at tea garden🖤",
    image:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1664768087/funtasticVgram/bjkwjgzwnmha16mqjz2c.jpg",
    owner: {
      userId: 3,
      name: "Mohsin King",
      avatar:
        "https://res.cloudinary.com/dseldmvfp/image/upload/v1664103054/funtasticVgram_users/gq8auczvalr1vl3bh3lf.png",
    },
    likes: [{ userId: 1 }, { userId: 2 }, { userId: 3 }],
    comments: [
      {
        user: { userId: 1 },
        comment: "Nice pic ",
      },
      {
        user: { userId: 2 },
        comment: "nice pic bro",
      },
    ],
  },
  {
    postId: 6,
    caption: "😂😂😂😂",
    image:
      "https://res.cloudinary.com/dseldmvfp/image/upload/v1663082493/funtasticVgram/jtngqrvmwsbetbtequ5h.jpg",
    owner: {
      userId: 6,
      name: "Asif ",
      avatar:
        "https://res.cloudinary.com/dseldmvfp/image/upload/v1663074130/funtasticVgram_users/lkbzj8irjh6pgwrmtmep.jpg",
    },
    likes: [{ userId: 1 }],
    comments: [],
  },
];

export default Posts;
