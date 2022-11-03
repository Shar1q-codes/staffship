import React from 'react'
import { HashLink } from 'react-router-hash-link'


const ServicesNav = () => {
  return (
    <div className='Services-Nav'>
        <HashLink to='#global' className='hash-link'>Global Recruiting</HashLink>
        <HashLink to='#staffsol' className='hash-link'>Staffing & Solutions</HashLink>
        <HashLink to='#remote' className='hash-link'>Remote Teams</HashLink>
        <HashLink to='#occ' className='hash-link'>Offshore Cost Centers</HashLink>
        <HashLink to='#odc' className='hash-link'>Offshore Development Centers</HashLink>
        <HashLink to='#digital' className='hash-link'>Digital Marketing & SEO</HashLink>
        <HashLink to='#lead' className='hash-link'>Lead Generation & Management</HashLink>
    </div>
  )
}

export default ServicesNav