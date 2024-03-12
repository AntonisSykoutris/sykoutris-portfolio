'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VscClose } from 'react-icons/vsc';
import { twMerge } from 'tailwind-merge';
import { IconType } from 'react-icons';

type TypewriterProps = {
  textArray: string[];
  fileName: string;
  Icon: IconType;
  className?: string;
};

const Typewriter = ({ textArray, fileName, Icon, className }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (textIndex < textArray.length) {
      const text = textArray[textIndex];

      if (currentIndex < text.length) {
        // Add a character to the currentText every second
        const typingInterval = setInterval(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, 50);

        // Blink the cursor
        const cursorInterval = setInterval(() => {
          setCursorVisible(prevCursorVisible => !prevCursorVisible);
        }, 500);

        // Clear intervals when all characters are typed
        return () => {
          clearInterval(typingInterval);
          clearInterval(cursorInterval);
        };
      } else {
        // Move to the next string and reset currentIndex
        setCurrentIndex(0);
        setTextIndex(textIndex + 1);
      }
    }
  }, [currentIndex, textArray, textIndex]);

  // Apply inline styling to highlight "function"
  const styledText = (
    <pre className='relative font-mono text-xs text-white 2xl:text-base '>
      {currentText
        .split('%')
        .map((segment, index) => {
          let color = '';

          const token = segment.trim();
          const doubleQuotesPattern = /"([^"]*)"/;
          const yellowPattern = /\(\) \{/;
          const commentsPattern = /\/\*[^]*\*\//;
          const keywords = [
            'export',
            'default',
            'function',
            'type',
            'if',
            'else',
            'return',
            'await',
            'async',
            'while',
            'for',
            'switch',
            'case',
            'break',
            'continue',
            'class',
            'extends',
            'super',
            'new',
            'this',
            'const',
            'let',
            'var',
            'true',
            'false',
            'null',
            'undefined',
          ];
          const typeProperties = ['name', 'surname', 'age', 'profession', 'hobbies', 'loves'];
          if (
            keywords.includes(token) ||
            token === 'return (' ||
            token === '=' ||
            token === ')' ||
            token === 'Logo' ||
            token === 'Hero' ||
            token === 'SectionDivider' ||
            token === 'About' ||
            token === 'Experience' ||
            token === ':'
          )
            color = 'text-[#ff2cf1]';
          else if (
            yellowPattern.test(token) ||
            token === 'className' ||
            token === '{' ||
            token === '}' ||
            token === 'Antonis'
          )
            color = 'text-[#ffd400]';
          else if (doubleQuotesPattern.test(token))
            // Check for text within double quotes
            color = 'text-[#0ef3ff]';
          else if (
            token === '<main' ||
            token === '</main>' ||
            token === '<section' ||
            token === '</section>' ||
            token === '>' ||
            token === '<' ||
            token === '/>' ||
            token === ';' ||
            typeProperties.includes(token)
          )
            color = 'text-[#ff2e97]';
          else if (commentsPattern.test(token)) color = 'text-[#0778ff]';
          else color = 'text-[#fff]';
          if (segment.trim() === '')
            // Filter out empty segments
            return null;

          return (
            <span key={index} className={`${color}`}>
              {segment}
            </span>
          );
        })
        .filter(segment => segment !== null)}
      <motion.span
        className='cursor inline-block text-white'
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        |
      </motion.span>
    </pre>
  );

  return (
    <div className={twMerge('h-40 w-[20rem] rounded-lg bg-gray-900 shadow-2xl 2xl:h-60 2xl:w-[27rem]', className)}>
      <div className='flex w-full items-center justify-between rounded-t-lg bg-gray-800'>
        <div className=' flex items-center justify-between gap-3 rounded bg-[#1d1641] p-1 text-xs text-[#3e7eca] 2xl:text-base'>
          <Icon className='h-4 w-4 2xl:h-5 2xl:w-5' fill='#0288d1' />
          <span>{fileName}</span>
          <VscClose className='h-4 w-4 2xl:h-5 2xl:w-5' fill='#f9e9e2' />
        </div>
      </div>
      <div className='py-2  pl-3'>{styledText}</div>
    </div>
  );
};

export default Typewriter;
