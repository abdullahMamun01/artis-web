

const fetchWorks = async () => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/works`,{ next: { revalidate: 10 } });
    const data = await response.json();
    return data.data
}


export default fetchWorks