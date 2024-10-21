import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling

const CustomCalendar = ({setSelectedDate,selectedDate,tileContent}) => {
  return (
    <div className='w-full'>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
      />
      <style>
        {`
        .react-calendar {
            width: 100%;
          }
          .dot {
            height: 10px;
            width: 10px;
            background-color: #25C277;
            border-radius: 50%;
            display: block;
            margin: 0 auto;
            margin-top: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default CustomCalendar;
