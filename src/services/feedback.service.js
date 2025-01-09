
import { GetStaticPropsContext } from 'next';

const fetchFeedback = async () => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks`, { next: { revalidate: 1 } })
    const data = await response.json()

    return data.data || [];
}

export default fetchFeedback;

