import Link from 'next/link'
import React from 'react'

type ButtonProps = { text: string, link: string }
const Button = ({ text, link }: ButtonProps) => {
    return (
        <Link className='py-2.5 px-8 round mt-4 border border-teal-200 text-teal-300 hover:bg-teal-300 text-lg transition-colors hover:text-slate-950 ease-in-out duration-200 font-bold ' href={link}>
            {text}
        </Link>
    )
}

// hero header
const HeroHead = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className='flex flex-col gap-2'>
            <div>
                <h1 className='text-6xl text-[#88F0E5] font-bold'>Tic Summit - {currentYear}</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-5xl font-bold'>Empowering Young <br /> Innovators</h2>
                    <div className='text-gray-400 text-lg font-semibold'>Cameroon's largest tech challenge for Secondary and High School students</div>
                </div>
                <div>
                    <div className='text-gray-400 text-lg font-semibold'>Thes Summit provides a platform for these brilliant minds to connect with industry experts, gain valuable mentorship, and win prizes for their innovative ideas.
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-8'>
                {/* <Link href="https://portal.ticsummit.org">
                        Apply Now
                    </Link> */}
                <Button text='Apply Now' link='https://portal.ticsummit.org' />
                {/* <button>
                        Donate
                    </button> */}
                <Button text='Donate' link='' />
            </div>
        </div>
    )
}




function Hero() {
    return (
        <section className='h-fit bg-cover bg-[#010823] py-14 px-4 md:px-8'>
            <div className='flex flex-col md:flex-row gap-8 items-center'>
                <div className='flex-1'>
                    <HeroHead />
                </div>
                <div className='flex-1 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem sed vero ducimus officia temporibus, odit rerum quisquam nulla ipsam quis saepe doloremque soluta dolor impedit consequatur. Consequatur veritatis eius quasi molestiae obcaecati earum deserunt, ratione ex qui placeat minima nemo! Quod culpa tempore nesciunt voluptatibus eos similique! Sunt, est.
                </div>
            </div>
        </section>
    )
}

export default Hero