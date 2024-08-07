'use client';
import React from 'react';
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuGithub,
  LuMail
} from 'react-icons/lu';
import MagneticIcon from '../General/MagneticIcon';
import {
  FACEBOOK_PROFILE_LINK,
  GITHUB_PROFILE_LINK,
  INSTAGRAM_PROFILE_LINK,
  LINKEDIN_PROFILE_LINK,
  MAIL_LINK
} from '@/lib/data';

type Props = {};

export default function FooterSocial({}: Props) {
  return (
    <>
      <MagneticIcon Icon={LuGithub} href={GITHUB_PROFILE_LINK} label='Github' />
      <MagneticIcon
        Icon={LuFacebook}
        href={FACEBOOK_PROFILE_LINK}
        label='Facebook'
      />
      <MagneticIcon
        Icon={LuInstagram}
        href={INSTAGRAM_PROFILE_LINK}
        label='Instagram'
      />
      <MagneticIcon
        Icon={LuLinkedin}
        href={LINKEDIN_PROFILE_LINK}
        label='LinkedIn'
      />
      <MagneticIcon Icon={LuMail} href={MAIL_LINK} label='Maik' />
    </>
  );
}
