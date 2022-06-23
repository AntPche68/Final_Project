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
        <h2>Trusted By The Best</h2>
        <div>
          {partners.map(t=>
            <div key={t.id}>
              <img src={process.env.PUBLIC_URL + t.logo} alt="partners" />
              <p>{t.title}</p>
              <p>{t.abstract}</p>
            </div>  
            )}
        </div>
    </div>
  )
}
