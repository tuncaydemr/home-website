import arrowIcon from '../../assets/arrow_btn.png'
import playIcon from '../../assets/play_icon.png'
import pauseIcon from '../../assets/pause_icon.png'

import './Hero.css'

interface HeroType {
   text1: string
   text2: string
}

interface HeroProps {
   heroData: HeroType
   heroCount: number
   setHeroCount: React.Dispatch<React.SetStateAction<number>>
   playStatus: boolean
   setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const Hero: React.FC<HeroProps> = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }: any) => {
   const handleChange = (index: number) => {
      setHeroCount(index)

      setPlayStatus(false)
   }

   return (
      <div className='mx-28 mt-36'>
         <div className='text-white text-[110px] font-[500] leading-[130px]'>
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
         </div>
         <div className='flex items-center gap-[50px] mt-[70px] py-[5px] pr-[8px] pl-[30px] bg-white rounded-[60px] cursor-pointer w-fit'>
            <p className='text-[#292929] text-[20px] font-[500]'>Explore the features</p>
            <img
               src={arrowIcon}
               alt="Arrow Icon"
            />
         </div>
         <div className='mt-36 flex justify-between'>
            <ul className='flex items-center gap-6'>
               <li
                  onClick={() => handleChange(0)}
                  className={`hero-dot ${heroCount === 0 ? 'orange' : ''}`}
               ></li>
               <li
                  onClick={() => handleChange(1)}
                  className={`hero-dot ${heroCount === 1 ? 'orange' : ''}`}
               ></li>
               <li
                  onClick={() => handleChange(2)}
                  className={`hero-dot ${heroCount === 2 ? 'orange' : ''}`}
               ></li>
            </ul>
            <div className='flex items-center gap-7'>
               <img
                  onClick={() => setPlayStatus(!playStatus)}
                  src={playStatus ? pauseIcon : playIcon}
                  alt="Play Pause Icon"
                  className='cursor-pointer'
               />
               <p className='text-white text-[19px]'>See the video</p>
            </div>
         </div>
      </div>
   )
}

export default Hero
