import { useState } from "react"
import Background from "./components/background/Background"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"

const App: React.FC = () => {
   const heroData = [
      { text1: 'Dive into', text2: 'what you love' },
      { text1: 'Indulge', text2: 'your passions' },
      { text1: 'Give in to', text2: 'your passions' },
   ]

   const [heroCount, setHeroCount] = useState<number>(0)
   const [playStatus, setPlayStatus] = useState<boolean>(false)

   return (
      <main>
         <Background
            playStatus={playStatus}
            heroCount={heroCount}
         />
         <Navbar />
         <Hero
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
            setPlayStatus={setPlayStatus}
         />
      </main>
   )
}

export default App
