
export type ExploreItem = {
    img: string;
    location: string;
    distance: string;
}
export type LiveItem = {
    title : string;
    img: string;
}

export type ListingCardItem = {
    img: string,
    location: string,
    title: string,
    description: string,
    star: number,
    price: string,
    total: string,
    long: number,
    lat: number,
};

export type ExploreData = ExploreItem[];
// cách viết gọn để sao chép các props và atribute bên trong
// ngoài ra có thể viết lại để định nghĩa type cho ExploreData dùng để fetch API
// export type ExploreData = {
//     img: string;
//     location: string;
//     distance: string;
// }
export type LiveData = LiveItem[];
export type SearhResultData = ListingCardItem[];