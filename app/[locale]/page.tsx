import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

import { Book, Hash } from 'lucide-react'
import { Link } from '@/navigation';
import { projects } from '@/data/projects';
import Image from 'next/image';
import ProjectCard from '@/components/project-card';
import HashHeader from '@/components/hash-header';
export default function Home() {
    const t = useTranslations('HomePage');

    return (
        <>

            <h1 className='text-center text-4xl font-bold'>{t('greeting')}</h1>

            <div className="w-full flex flex-col gap-2" id='about-me'>
                <HashHeader text='about-me' />
                <p className=''>
                    You can call me Win or Thanasan Kumdee.
                    <br />
                    I'm an undergraduate student in Computer Science at the {" "}
                    <Link target='_blank' href={'https://www.titech.ac.jp'} className='text-yellow-500 underline'> 
                        Tokyo Institute of Technology
                    </Link>
                    {" "}
                    in Japan.
                </p>

                <p>
                </p>
            </div>

            <div className="w-full flex flex-col gap-2" id='connect'>
                <HashHeader text='connect' />
                <p className='mb-4'>
                    Here are some links to link with me.
                </p>
                <div className='flex gap-2 flex-wrap'>

                    <Link href={'https://github.com/itzmeowww'} target='_blank'>
                        <Button variant={'secondary'} size={'sm'}>
                            GitHub
                        </Button>
                    </Link>



                    <Link href={'https://medium.com/@itzmeowww'} target='_blank'>
                        <Button variant={'secondary'} size={'sm'}>
                            medium
                        </Button>
                    </Link>
                </div>
            </div>


            <div className="w-full flex flex-col gap-2 mt-6 ">
                <HashHeader text='my-stuffs' />
                <p className='mb-4'>
                    I do coding 'cause it is fun and here are some of my stuffs.
                </p>

                <div className='grid sm:grid-cols-2  lg:grid-cols-3 gap-4'>
                    {projects.slice(0, 6).map((project, idx) => {
                        return (
                            <ProjectCard key={idx} project={project} />
                        )
                    })}

                </div>
                <div className='flex w-full items-center justify-center py-6'>
                    <Link href={'/projects'}>
                        <Button>See All of My Stuff</Button>
                    </Link>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2 mt-6 ">
                <HashHeader text='misc' />
                <p className='mb-4'>
                    You might also wanna check these out.
                </p>
                <div>
                    <Link href={'/japan'}>
                        <Button variant={'secondary'}>Japan Log</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
