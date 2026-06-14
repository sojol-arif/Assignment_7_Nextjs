'use client'

import { useState } from 'react';
import { TimelineContext } from './context';

const TimelineContextProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

  return (
    <TimelineContext.Provider value={{ timelineData, setTimelineData }}>
      {children}
    </TimelineContext.Provider>
  )
}

export default TimelineContextProvider
