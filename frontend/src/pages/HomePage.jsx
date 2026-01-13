import React from 'react'

import { useState } from "react"
import Navbar from "../components/Navbar.jsx"
import RateLimitedUI from '../components/RateLimitedUI.jsx';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);

  return <div className="min-h-screen">
    <Navbar />

    {isRateLimited && <RateLimitedUI />}
  </div>
};

export default HomePage
