


const fetchHeroData = async () => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/hero`, { next: { revalidate: 1 } });
    const data = await response.json();
    return data.data
};


export default fetchHeroData