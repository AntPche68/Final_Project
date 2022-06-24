import React, { useEffect, useState } from 'react'
import s from './TrustedByTheBest.module.sass'

export default function TrustedByTheBest() {
  const [partners, setPartners] = useState([]);

  const allPartners = (resolve, reject = ()=>{}) => {
    fetch('http://localhost:5000/api/partner/all')
          .then(data=>data.json(), reject)
          .then(resolve);
  }

  useEffect(()=>{
    allPartners(setPartners)
  }, [])

  return (
    <div className={s.main}>
      <p className={s.text}>Trusted By The Best</p>
      <div className={s.card}>
        {partners.map(t=>
          <div className={s.partner} key={t.id}>
            <img src={process.env.PUBLIC_URL + t.logo} alt="partners" />
            <p className={s.title}>{t.title}</p>
            <p className={s.abstract}>{t.abstract}</p>
          </div>  
          )}
      </div>
    </div>
  )
}
