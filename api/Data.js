const user = {
    id: 1,
    username: "ozgur",
    avatar:
        "https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png",
};

const videos = [
    {
        id: 1,
        title: "Better Call Saul - Episode 1",
        views: "32.1M",
        date: "2 month ago",
        duration: "54:00",
        img: "https://occ-0-37-448.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWQsoCrI_buXLiY7rDKMvUx6TIPddQ2P0PFGQsJXe67khTatgDGiNTHANlqQVtmHFZJIxXpHTmjDUlsqB7WH8hq5O6GXBm5Hj0ZB_gEazZ5OpMDctHGcbtcl.jpg?r=86a",
        channel: {
            name: "AMC",
            avatar:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Amc_logo.svg/2560px-Amc_logo.svg.png",
        },
    },
    {
        id: 2,
        title: "Cristiano Ronaldo - Interview",
        views: "11.4M",
        date: "1 month ago",
        img: "https://www.telegraph.co.uk/content/dam/football/2022/11/14/TELEMMGLPICT000316211071_trans_NvBQzQNjv4Bq9-OLdCkMsygBJpZp9bgLApdfPYxSI3xOIaWp9OPfn8Q.jpeg",
        duration: "57:00",
        channel: {
            name: "Piers Morgan",
            avatar:
                "https://upload.wikimedia.org/wikipedia/commons/5/5f/%D0%A3%D1%87%D0%B0%D1%81%D1%82%D1%8C_%D0%9F%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B0_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8_%D1%83_%D0%B4%D1%80%D1%83%D0%B3%D0%BE%D0%BC%D1%83_%D0%A1%D0%B0%D0%BC%D1%96%D1%82%D1%96_%D0%BF%D0%B5%D1%80%D1%88%D0%B8%D1%85_%D0%BB%D0%B5%D0%B4%D1%96_%D1%82%D0%B0_%D0%B4%D0%B6%D0%B5%D0%BD%D1%82%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D1%96%D0%B2_48_%28cropped2%29.jpg",
        },
    },
    {
        id: 3,
        title: "Everything In Its Right Place(live) - RADIOHEAD",
        views: "5.5M",
        date: "2 years ago",
        img: "https://jdanspsawyksui.files.wordpress.com/2012/11/2012-11-06-20-49-13.jpg",
        duration: "05.35",
        channel: {
            name: "Radiohead",
            avatar:
                "https://yt3.ggpht.com/iGWTxAf6tokq9e2cVapQL6D1qgbtD-oFkVLqcUGF24WjUwX68qCm-iN4mMqqJEz_4eRSi-EyEQ=s88-c-k-c0x00ffffff-no-nd-rj",
        },
    },
    {
        id: 4,
        title: "The Good, The Bad, and the Ugly - Soundtrack",
        views: "7M",
        date: "12 years ago",
        img: "https://www.looper.com/img/gallery/the-ending-of-the-good-the-bad-and-the-ugly-explained/intro-1618414257.jpg",
        duration: "07:10",
        channel: {
            name: "Movie Soundtrack",
            avatar:
                "https://cdn4.vectorstock.com/i/1000x1000/33/78/soundtrack-logo-vector-19293378.jpg",
        },
    },
    {
        id: 5,
        title: "Queen - Somebody To Love",
        views: "134K",
        date: "1 day ago",
        img: "https://upload.wikimedia.org/wikipedia/en/d/dc/Stlove.jpg",
        duration: "6:23",
        channel: {
            name: "Queen",
            avatar:
                "https://upload.wikimedia.org/wikipedia/tr/a/ad/Queen_II.jpg",
        },
    },
    {
        id: 6,
        title: "Create 3D Site with Spline and React - Full Course",
        views: "13M",
        date: "3 days ago",
        img: "https://i.ytimg.com/vi/EJxeMbDTkVI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5MKAnqsKkfcj4ujyxlU77Yp6uag",
        duration: "01:02:59",
        channel: {
            name: "DesignCode",
            avatar:
                "https://yt3.ggpht.com/ytc/AKedOLSG2QdV_OH21196ZrsD1_2IZROJSYLRJXeOsE6BZQ=s68-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 7,
        title: "Bill Gates Explains the Internet to Dave (1995) | Letterman",
        views: "387K",
        date: "10 month ago",
        img: "https://i.ytimg.com/vi/fs-YpQj88ew/mqdefault.jpg",
        duration: "7:53",
        channel: {
            name: "Letterman",
            avatar:
                "https://yt3.ggpht.com/Ccu7vqj5HtqrsKni0t9evP95vyYq07FfGM4h2l9NazKJnvi8jzr06RPM8IY_8nnbuQiWRFIRmg=s88-c-k-c0x00ffffff-no-rj",
        },
    },
    {
        id: 8,
        title: "Angela Yu (The Complete Web Development Bootcamp 2022) review",
        views: "9K",
        date: "5 month ago",
        img: "https://i.ytimg.com/vi/l5jUaLBXEg8/maxresdefault.jpg",
        duration: "07:24",
        channel: {
            name: "Angela Yu",
            avatar:
                "https://pbs.twimg.com/profile_images/1523987597751726081/XuQeo7gC_400x400.jpg",
        },
    },
];

module.exports = { user, videos };