'use client'

import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { motion } from 'framer-motion'

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const paragraphs = [
    "I knew coming to the US and specifically to New York would be fun (and slightly scary), but when you walked into my life, and more specifically became my lovely partner, everything started to feel better.",
    "Colors were more vivid, scents were more noticable, and tastes were stronger. Overall, life started to feel more real, and New York started to feel like the dream city everyone always talks about.",
    "I thank God all the time for you when I do my prayers. You make me believe in God even more strongly. To me knowing you is no coincidence. Choosing to sit next to you, and later becoming friends, close friends, partners, and lovers, AT HOFSTRA, is kind of rare and magical to me.",
    "I mean, this is true for anyone in regards to anybody they meet. The chances of 2 specific people meeting eachother in this world is obviously always low. But they quite often happen to be such regular friendships or relationships. But I always felt magic in our love. I feel it to be so truthful, so lovely, so caring, and just so right... I just always felt you are so right for me. So did my parents. I was always looking for this perfect girl with my high standards: Hard working, beautiful, caring, lovely, this, and that... But you proved me such people exist, although they are rare and might take some time to come across them.",
    "You are all I ever tell you. Gorgeous, happy, lovely, smart, hardworking, and an amazing human being. Not only that, you remind me to be those and become a better human every living day. You encourage me to work harder, not just for myself, but for us. You make me see a bright future ahead of us. You make never lose my optimism. You are just the perfect fuel I always needed and forever need to function as best as I can in this world.",
    "Yapping to you about Kyle's car insurance on SIC's staircases and giving side eyes to Jonathan while walking up the stairs with you in front of us never had me think we would come this far. But we did, and I could not be any happier.",
    "I love you and our lovely story. I love our families, and every single day we have spent since we met. Thank you for your love and that magical gum.",
    "Mwah. Happy Anniversary love.",
    "- Mani"
  ]

  return (
    <div className="flex flex-col items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-white mystery-quest"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Happy 1st Year Gianna
      </motion.h1>
      <div className="max-w-3xl w-full space-y-8 text-white mystery-quest">
        {paragraphs.map((paragraph, index) => (
          <motion.p 
            key={index} 
            className="text-xl leading-relaxed"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
        <motion.button
          className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition duration-300 mystery-quest"
          onClick={() => setShowConfetti(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Click to Celebrate!
        </motion.button>
      </div>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
    </div>
  )
}
