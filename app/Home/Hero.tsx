import Link from 'next/link'
import React from 'react'

// type 
// const Button = ({ text }) => {
//     return ()
// }

// hero header
const HeroHead = () => {
    const currentYear = new Date().getFullYear()

    return (
            <div className='flex flex-col gap-4'>
                <div>
                    <h1 className='text-6xl font-bold'>Tic Summit - {currentYear}</h1>
                </div>
                <div>
                    <h2>Empowering Young Innovators</h2>
                    <div>Cameroon's largest tech challenge for Secondary and High School students</div>
                </div>
                <div>
                    <div>Thes Summit provides a platform for these brilliant minds to connect with industry experts, gain valuable mentorship, and win prizes for their innovative ideas.</div>
                    <div>
                        <Link href="https://portal.ticsummit.org">
                            Apply Now
                        </Link>
                        <button>
                            Donate
                        </button>
                    </div>
                </div>
                <div>
                The summit provides a platform for these brilliant minds to connect with industry experts, gain valuable mentorship, and win prizes for their innovative ideas.
                </div>
            </div>
    )
}




function Hero() {
    return (
        <section className='h-screen bg-cover bg-[#010823] px-4 md:px-8'>
            <div className='h-full flex flex-col md:flex-row gap-8 items-center '>
                <div className='flex-1'>
                <HeroHead />
                </div>
                <div className='flex-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem sed vero ducimus officia temporibus, odit rerum quisquam nulla ipsam quis saepe doloremque soluta dolor impedit consequatur. Consequatur veritatis eius quasi molestiae obcaecati earum deserunt, ratione ex qui placeat minima nemo! Quod culpa tempore nesciunt voluptatibus eos similique! Sunt, est.
                </div>
            </div>
        </section>
    )
}

export default Hero