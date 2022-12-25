import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Colors } from '../config/Colors'
import { motion, AnimatePresence } from 'framer-motion'
import IconButton from '../elements/IconButton'
import { BsBagCheckFill } from 'react-icons/bs'

const BubbleContainer = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Bubble = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 0 5px;
  border: 2px solid ${Colors.Primary};
  background: ${(props) => (props.active ? Colors.Primary : 'white')};
  transition: 0.4s;
  &:hover {
    background: ${Colors.PrimaryLight};
    transition: 0.4s;
  }
`

export default function Carousel({ interval, reversed, apiConfig }) {
  const [data, setData] = useState([])

  const [activeIndex, setActiveIndex] = useState(0)

  const refreshImage = (item) => {
    return item
  }

  useEffect(() => {
    if (interval) {
      const interval = setInterval(() => {
        console.log('Function Called')
        const dataLength = data.length
        if (dataLength - 1 > activeIndex) {
          setActiveIndex((prevState) => prevState + 1)
        } else {
          setActiveIndex(0)
        }
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [activeIndex])

  return (
    <div
      className='w-100'
      style={{
        height: '500px',
        backgroundColor: 'rgb(240,240,240)',
        position: 'relative'
      }}
    >
      <div
        className='container d-flex flex-column  h-100 justify-content-center'
        style={{ overflow: 'hidden' }}
      >
        <div
          className={`d-flex align-items-center ${
            reversed ? 'row-reverse' : ''
          }  justify-content-between`}
        >
          <div className='mx-5 px-5'>
            <AnimatePresence>
              {data.map((item, index) => (
                <>
                  {index === activeIndex && (
                    <>
                      <motion.h1
                        initial={{ y: -20, x: 10 }}
                        animate={{ y: 0, x: 0 }}
                      >
                        {data[activeIndex].headerText}
                      </motion.h1>
                      <motion.h1
                        className='my-3'
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                      >
                        {data[activeIndex].headerText2}
                      </motion.h1>
                      <motion.p initial={{ x: 20 }} animate={{ x: 0 }}>
                        {data[activeIndex].description}
                      </motion.p>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <IconButton
                          background={'black'}
                          className='my-3 px-4 py-2 d-flex align-items-center'
                          style={{ borderRadius: '30px', fontWeight: '500' }}
                          hover={Colors.PrimaryLight}
                        >
                          <BsBagCheckFill className='me-2' /> Shop Now
                        </IconButton>
                      </motion.div>
                    </>
                  )}
                </>
              ))}
            </AnimatePresence>
          </div>
          {data.map((item, index) => (
            <>
              {/* <AnimatePresence> */}
              {index === activeIndex && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1
                  }}
                  exit={{ opacity: 0 }}
                  src={data[activeIndex].image}
                  alt='None'
                  style={{ width: '500px', height: '400px' }}
                />
              )}
              {/* </AnimatePresence> */}
            </>
          ))}
        </div>
        {/* <img src={data} /> */}
      </div>

      <BubbleContainer>
        {data.map((item, index) => (
          <Bubble
            onClick={() => setActiveIndex(index)}
            active={index === activeIndex}
          ></Bubble>
        ))}
      </BubbleContainer>
    </div>
  )
}
