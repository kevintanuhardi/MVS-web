const newsList = [
  {
    _id: 1,
    imgUrl: `${process.env.PUBLIC_URL}/news/fava-2018.png`,
    title: "2018 FAVA BALI, Bali",
    date: new Date('2018-11-01'),
    tags: ['Company News', 'Industrial News'],
    content: '',
    images: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/fava-2018.png`,
        title: "2019 Medical Expo Casablanca, Morocco",
      },
    ]
  },
  {
    _id: 2,
    imgUrl: `${process.env.PUBLIC_URL}/news/semarang 1-cropped.jpg`,
    title: "2019 Seminar & Workshop Gas Anasthesia & Orthopedic, Semarang",
    date: new Date('2019-01-22'),
    tags: ['Company News', 'Industrial News'],
    content: '',
    images: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/semarang 1-cropped.jpg`,
        title: "2019 Seminar & Workshop Gas Anasthesia & Orthopedic, Semarang",
      },
    ]
  },
  {
    _id: 3,
    title: "2019 Banten Veterinary Scientific Expo, Bekasi",
    date: new Date('2019-03-23'),
    tags: ['Company News', 'Industrial News'],
    content: '',
    images: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/banten 3.jpeg`,
        title: "Banten Veterinary Scientific Expo",
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/banten 1.jpeg`,
        title: "Banten Veterinary Scientific Expo",
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/banten 2.jpeg`,
        title: "Banten Veterinary Scientific Expo",
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/banten 4.jpeg`,
        title: "Banten Veterinary Scientific Expo",
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/banten 5.jpeg`,
        title: "Banten Veterinary Scientific Expo",
      },
    ]
  },
  {
    _id: 4,
    title: "2019 INAHEX, Bogor",
    date: new Date('2019-08-01'),
    tags: ['Company News', 'Industrial News'],
    content: '',
    images: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/inahex 3.jpeg`,
        title: "2019 INAHEX, Bogor",
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/inahex 1.jpeg`,
        title: "2019 INAHEX, Bogor",
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/inahex 2.jpeg`,
        title: "2019 INAHEX, Bogor",
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/news/inahex 4.jpeg`,
        title: "2019 INAHEX, Bogor",
      },
    ]
  },
  // {
  //   _id: 1,
  //   imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-1.jpeg`,
  //   title: "2019 Medical Expo Casablanca, Morocco",
  //   date: new Date(),
  //   tags: ['Company News', 'Industrial News'],
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint!',
  //   images: [
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-1.jpeg`,
  //       title: "2019 Medical Expo Casablanca, Morocco",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-1.jpeg`,
  //       title: "2019 Medical Expo Casablanca, Morocco",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-1.jpeg`,
  //       title: "2019 Medical Expo Casablanca, Morocco",
  //     },
  //   ]
  // },
  // {
  //   _id: 2,
  //   imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-2.jpg`,
  //   title: "2018 Stem Cell Expo, Florida",
  //   date: new Date(),
  //   tags: ['Company News', 'Industrial News'],
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint!',
  //   images: [
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-2.jpg`,
  //       title: "2018 Stem Cell Expo, Florida",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-2.jpg`,
  //       title: "2018 Stem Cell Expo, Florida",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-2.jpg`,
  //       title: "2018 Stem Cell Expo, Florida",
  //     },
  //   ]
  // },
  // {
  //   _id: 3,
  //   imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-3.jpeg`,
  //   title: "2018 Medical, Japan",
  //   date: new Date(),
  //   tags: ['Company News', 'Industrial News'],
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint!',
  //   images: [
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-3.jpeg`,
  //       title: "2018 Medical, Japan",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-3.jpeg`,
  //       title: "2018 Medical, Japan",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-3.jpeg`,
  //       title: "2018 Medical, Japan",
  //     },
  //   ]
  // },
  // {
  //   _id: 4,
  //   imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-4.jpg`,
  //   title: "The WFNS Event August 2019",
  //   date: new Date(),
  //   tags: ['Company News', 'Industrial News'],
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint!',
  //   images: [
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-4.jpg`,
  //       title: "The WFNS Event August 2019",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-4.jpg`,
  //       title: "The WFNS Event August 2019",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-4.jpg`,
  //       title: "The WFNS Event August 2019",
  //     },
  //   ]
  // },
  // {
  //   _id: 5,
  //   imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //   title: "The WFNS Event August 2019",
  //   date: new Date(),
  //   tags: ['Company News', 'Industrial News'],
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint!',
  //   images: [
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "The WFNS Event August 2019",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "The WFNS Event August 2019",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "The WFNS Event August 2019",
  //     },
  //   ]
  // },
  // {
  //   _id: 6,
  //   imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //   title: "Medical Respnse 2019",
  //   date: new Date(),
  //   tags: ['Company News', 'Industrial News'],
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint!',
  //   images: [
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "Medical Respnse 2019",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "Medical Respnse 2019",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "Medical Respnse 2019",
  //     },
  //   ]
  // },
  // {
  //   _id: 7,
  //   imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //   title: "Medical Respnse 2019",
  //   date: new Date(),
  //   tags: ['Company News', 'Industrial News'],
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint!',
  //   images: [
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "Medical Respnse 2019",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "Medical Respnse 2019",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "Medical Respnse 2019",
  //     },
  //   ]
  // },
  // {
  //   _id: 8,
  //   imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //   title: "Medical Respnse 2019",
  //   date: new Date(),
  //   tags: ['Company News', 'Industrial News'],
  //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nobis cum? Eligendi accusamus minima nemo delectus? Quidem laboriosam voluptas porro ipsam cupiditate ex provident maiores repudiandae. Quis modi temporibus sint!',
  //   images: [
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "Medical Respnse 2019",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "Medical Respnse 2019",
  //     },
  //     {
  //       imgUrl: `${process.env.PUBLIC_URL}/stock/news-stock-photo-primary.png`,
  //       title: "Medical Respnse 2019",
  //     },
  //   ]
  // },
]

export default newsList;