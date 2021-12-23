import React from 'react';
import ScrollToTop from 'react-scroll-up';
import 'react-toastify/dist/ReactToastify.css';
import s from './ScrollUp.module.css';

export default function ScrollUp() {
  return (
    <ScrollToTop
      showUnder={160}
      duration={500}
      style={{ right: 60, bottom: 42 }}
    >
      <div className={s.toTop} />
    </ScrollToTop>
  );
}
