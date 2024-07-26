'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

export default function Timeline() {
  return (
    <VerticalTimeline lineColor='#e5e7eb'>
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            visible
            contentStyle={{
              background: '#f3f4f6',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem'
            }}
            contentArrowStyle={{
              borderRight: '0.4rem solid #9ca3af'
            }}
            date={item.date}
            icon={<item.icon />}
          >
            <h3 className='font-semibold capitalize'>{item.title}</h3>
            <p className='!mt-0 font-normal'>{item.location}</p>
            <p className='!mt-1 !font-normal text-gray-700'>
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  );
}
