import Card20268F from '@/public/images/cards/card2026_8f.jpg'
import Card20268B from '@/public/images/cards/card2026_8b.jpg'
import Image from 'next/image'
const Page = () => {
    return <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Image alt='Card Front' src={Card20268F} className='rounded-2xl '></Image>
        <Image alt='Card Back' src={Card20268B} className='rounded-2xl ' ></Image>
    </div>
}

export default Page