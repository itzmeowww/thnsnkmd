import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

import { Link } from '@/navigation';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/project-card';
import HashHeader from '@/components/hash-header';
import { Locale } from '@/lib/localized';

export default function Home({ params: { locale } }: { params: { locale: Locale } }) {
    const t = useTranslations('HomePage');

    return (
        <>

            <h1 className='text-center text-4xl font-bold'>{t('greeting')}</h1>

            <div className="w-full flex flex-col gap-2" id='about-me'>
                <HashHeader text={t('aboutHeader')} />
                <p className='font-light text-foreground'>
                    {t.rich('aboutBody', {
                        tit: (chunks) => (
                            <Link target='_blank' href={'https://www.titech.ac.jp'} className='text-primary underline'>
                                {chunks}
                            </Link>
                        ),
                    })}
                </p>

            </div>

            <div className="w-full flex flex-col gap-2" id='connect'>
                <HashHeader text={t('connectHeader')} />
                <p className='font-light text-foreground'>
                    {t('connectText')}
                </p>
                <div className='flex gap-2 flex-wrap my-2'>

                    <Link href={'https://github.com/itzmeowww'} target='_blank'>
                        <Button variant={'outline'} size={'sm'} >
                            GitHub
                        </Button>
                    </Link>



                    <Link href={'https://medium.com/@itzmeowww'} target='_blank'>
                        <Button variant={'outline'} size={'sm'}>
                            medium
                        </Button>
                    </Link>
                </div>
            </div>


            <div className="w-full flex flex-col gap-2 ">
                <HashHeader text={t('myStuffsHeader')} />
                <p className='font-light text-foreground'>
                    {t('myStuffsText')}
                </p>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-secondary p-4 rounded-2xl my-2 border'>
                    {projects.slice(0, 6).map((project, idx) => {
                        return (
                            <ProjectCard key={idx} project={project} locale={locale} />
                        )
                    })}

                </div>
                <div className='flex w-full items-center justify-center py-6'>
                    <Link href={'/projects'}>
                        <Button>{t('seeAll')}</Button>
                    </Link>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2 mt-6 ">
                <HashHeader text={t('miscHeader')} />
                <p className='mb-4'>
                    {t('miscText')}
                </p>
                <div className='flex gap-2 flex-wrap my-2'>
                    <Link href={'/japan'}>
                        <Button variant={'outline'}>{t('japanLogButton')}</Button>
                    </Link>
                </div>


            </div>
        </>
    );
}
