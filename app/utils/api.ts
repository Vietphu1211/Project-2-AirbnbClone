// Gọi Api getExplore
export const getExplore = async() => {
  try {
    const res =  await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
    const exploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.log(error);
  }
}

// Gọi Api phần Live are

export const getLive = async() => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`)
    const LiveData = await res.json();
    return LiveData;
  } catch (error) {
    console.log("errors:",`${error}`)
  }
};

export const getSearchresult = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const searchResultDate = await res.json();
    return searchResultDate;
  } catch (error) {
    console.log(error);
  }
};
