'use client'

import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

export const ScrollManager = (props: {
  section: number
  onSectionChange: (number: number) => void
}) => {
  const { section, onSectionChange } = props
  const scroll = useScroll()

  const lastScroll = useRef(0)
  const isAnimating = useRef(false)

  scroll.fill.classList.add('top-0')
  scroll.fill.classList.add('absolute')

  useEffect(() => {
    gsap.to(scroll.el, {
      duration: 1,
      scrollTop: section * scroll.el.clientHeight,
      onStart: () => {
        isAnimating.current = true
      },
      onComplete: () => {
        isAnimating.current = false
      }
    })
  }, [scroll.el, section])

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = scroll.offset
      return
    }

    const curSection = Math.floor(scroll.offset * scroll.pages)

    if (scroll.offset > lastScroll.current && curSection === 0) {
      onSectionChange(1)
    }
    if (
      scroll.offset < lastScroll.current &&
      scroll.offset < 1 / (scroll.pages - 1)
    ) {
      onSectionChange(0)
    }
    lastScroll.current = scroll.offset
    // scroll.el.scrollTo(0, section * scroll.el.clientHeight);
  })

  return null
}
