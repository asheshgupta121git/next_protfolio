import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
            </div>
            <div className='flex-1'> 
                    <p className='mb-10 max-w-2xl font-Ovo'>I am Ashesh Gupta, a B.Tech student with a strong foundation in development and data management. My expertise lies in building dynamic and responsive web applications using React , and I excel at problem-solving with Java. I have hands-on experience with the MERN stack and a passion for creating efficient, user-centric solutions. In addition to my technical skills, I am a quick learner, constantly looking for opportunities to improve and grow in the tech space.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({icon, iconDark, title, description},index)=>(
                            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black" key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3'/>
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                        {/* ----------tools 1:05:04 to continue watching ------------ */}

                        <h4 className="my-6 text-gray-700 font-Ovo">Tools</h4>

                        <ul className="flex items-center gap-3 sm:gap-5">
                          {toolsData.map((tool, index)=>(
                            <li key={index} className="flex items-center justify-center w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-x-1 duration-500">
                              <Image src={tool} alt='tool' className="w-5 sm:7"></Image>
                            </li>
                          ))}
                        </ul>

            </div>
        </div>


    </div>
  )
}

export default About
