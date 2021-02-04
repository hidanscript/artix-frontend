import React from "react";
import { useTranslation } from 'react-i18next';

export default function Discover() {
  const { t } = useTranslation();
  return (
    <div className="discover-page">
      <div className="discover-title">
        <h2 className="font-main text-purple">
          {t('DISCOVER')}
        </h2>
      </div>
    </div>
  );
}
