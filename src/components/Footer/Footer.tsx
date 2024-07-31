'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FooterSocial from './FooterSocial';
import FooterNav from './FooterNav';
import Section from '../General/Section';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className='mx-auto flex w-[95svw] flex-col items-center md:w-[90svw] xl:w-[65svw]'>
      <Section className='h-fit'>
        <motion.div className='flex h-full flex-col items-center self-end'>
          <div className='flex w-full flex-col items-center justify-between gap-4 border-b border-t py-6 md:flex-row'>
            <FooterNav />
            <div className='flex justify-center gap-x-5 sm:justify-start'>
              <FooterSocial />
            </div>
          </div>

          <div className='pt-8 text-center text-sm text-primary'>
            © {currentYear} - Present Sykoutris Antonis. All rights reserved.
          </div>
        </motion.div>
      </Section>
    </section>
  );
}
