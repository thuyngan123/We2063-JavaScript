// const projectFake = [
//     {
//         id: 1,
//         name: "Dự án 1",
//         teams: [
//             { id: 1, name: "Đạt" },
//             { id: 2, name: "Kiên" },
//             { id: 3, name: "Kiên" },
//         ],

//     },
//     {
//         id: 2,
//         name: "Dự án mẫu",
//         author: "Đạt",
//     }

// ];
// export default projectFake;
// const nemuList = [
//     { name: "Home", path: "/" },
//     { name: "Gioi thieu", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Post", path: "/posts" },
//     { name: "Contact", path: "/contact" }
// ]
const menuList = [
    { name: "Home", path: "/" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Projects", path: "/project" },
    { name: "Posts", path: "/posts" },
    { name: "Contact", path: "/contact" },
]
const projects = [
    { id: 1, name: "Dự án mẫu", img: "https://picsum.photos/400/400" },
    {
        id: 2,
        name: "Dự án 1",
        img: "https://picsum.photos/400/400",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Lâm" },
        ],
    },
    {
        id: 3,
        name: "Dự án tốt nghiệp",
        img: "https://picsum.photos/400/400",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Lâm" },
        ],
    },
];
export { projects, menuList };

