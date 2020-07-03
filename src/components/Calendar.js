import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Calendar.css';

function Calendar() {  

  return (
    <>
      <div>
        <blockquote>
          Github contributions
        </blockquote>
      </div>
      <div className="calendar">
        <GitHubCalendar username="kittaru87" />
      </div>
    </>
  )
}

export default Calendar;