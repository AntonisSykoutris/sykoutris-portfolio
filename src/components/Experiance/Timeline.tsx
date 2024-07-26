/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';

export default function Timeline() {
  // const { ref } = useSectionInView('Experience');

  return (
    <VerticalTimeline lineColor='#f3f4f6'>
      {experiencesData.map((item, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true
        });
        // const { ref, inView } = useInView({ threshold: 0 }); // Trigger every time
        return (
          <div key={index} ref={ref} className='vertical-timeline-element'>
            <VerticalTimelineElement
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
              visible={inView}
              date={item.date}
              icon={<item.icon />}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem'
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='!mt-0 font-normal'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </div>
        );
      })}
    </VerticalTimeline>
  );
}
