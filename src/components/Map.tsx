import { Box } from '@chakra-ui/layout'
import React from 'react'

const Map = () => {
  return (
   <Box width={{ md: "3xl", lg: "sm", xl:"md" }} minW={"20"} >
     <iframe  className='w-full h-[450px]'
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.601990765754!2d85.35215200202785!3d27.697658577359334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19869793bff7%3A0xf2f77266b222365a!2sSinamangal%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1694676441685!5m2!1sen!2snp"
  //   width="600" 
  //   height="450" 
  //   style={{border:0}} 
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
   </Box>
  )
}

export default Map

