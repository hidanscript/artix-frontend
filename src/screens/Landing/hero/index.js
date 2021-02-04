import React from "react";
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero-section">
      <img src="https://wallpapercave.com/wp/wp3025495.png"></img>
      <div className="hero-section__data">
        <h4 className="font-main text-white font-size-46">{t('FEATURED_ARTIST')}:<br></br>Hidanshira</h4>
        <p className="font-size-26 text-white font-main">Jirachi getting a stroke</p>
        <button className="artix-button btn btn-primary text-purple font-main font-size-22">{t('SEE_MORE_ABOUT_THIS_CREATOR')}</button>
      </div>
    </div>
  );
}
