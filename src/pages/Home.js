import React, { useEffect } from 'react'
import AllProductContainer from '../components/Home/AllProduct'
import BannerContainer from '../components/Home/Banner'
import IntroductionContainer from '../components/Home/Introduction'
import LatestContainer from '../components/Home/Latest'
import ServiceContainer from '../components/Home/Service'

import { useDispatch } from 'react-redux'
import { getAllProduct } from '../features/product/productSlice'
import FeedbackContainer from '../components/Home/Feedback'
import PromotionContainer from '../components/Home/Promotion'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProduct())
  }, [])

  return (
    <>
      <BannerContainer />
      <IntroductionContainer />
      <LatestContainer />
      <ServiceContainer />
      <AllProductContainer />
      <FeedbackContainer />
      <PromotionContainer />
    </>
  )
}

export default Home
