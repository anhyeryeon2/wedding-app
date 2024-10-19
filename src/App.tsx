import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './App.module.scss'
import Heading from './components/sections/Heading'
import Video from './components/sections/Video'

import FullScreenMessage from './components/shared/FullScreenMessage'
import { Wedding } from '@models/wedding'
import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/Intro'
import Invitation from './components/sections/Invitation'
import Calendar from './components/sections/Calendar'
import Contact from './components/sections/Contact'
import AttendCountModal from './components/AttendCountModal'

import useWedding from './hooks/useWedding'

const cx = classNames.bind(styles)

function App() {
  const { wedding, isLoading, error } = useWedding()


  if (error) {
    return <FullScreenMessage type="error" />
  }

  if (wedding == null) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Contact groom={groom} bride={bride} />
      <AttendCountModal wedding={wedding} />
    </div>
  )
}

export default App