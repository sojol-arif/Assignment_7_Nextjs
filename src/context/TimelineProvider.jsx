'use client'

import { useState } from 'react';
import { TimelineContext } from './Context';

export { TimelineContext as ThemeContext };

const TimelineContextProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

  return (
    <TimelineContext.Provider value={{ timelineData, setTimelineData }}>
      {children}
    </TimelineContext.Provider>
  )
}

export { TimelineContextProvider as ThemeProvider };
