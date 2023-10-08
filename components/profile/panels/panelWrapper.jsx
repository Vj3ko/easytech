'use client'

import { motion } from 'framer-motion'

//This component wraps every panel so it has a smooth transition
const panelVariant = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const PanelWrapper = ({ children }) => {
  return (
    <>
      <motion.div variants={panelVariant} initial='hidden' animate='visible'>
        {children}
      </motion.div>
    </>
  )
}
