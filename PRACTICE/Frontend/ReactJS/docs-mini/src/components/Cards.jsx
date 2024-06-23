import React from 'react'
import {motion} from "framer-motion"

function Cards({name, referencec}) {
  return (
    <motion.div drag dragConstraints={referencec} whileDrag={{scale: 1.1}} className='w-52 h-52 bg-red-900 rounded-xl border border-solid border-teal-950 flex justify-center items-center font-sans font-bold'>
        {name}
    </motion.div>
  )
}

export default Cards