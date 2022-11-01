import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from './ServicesData'

const ServicesComponent = () => {

    const {ServiceId,ServiceCategory} = useParams()

    const {data} = useContext(Data)

    const [Services] = data

  return (
    <div className='Services-main-container'>
        {Services.map(
            (Service,index)=>
            Service.id === ServiceId && Service.category === ServiceCategory && (
                <div key={index}>
                    <h1>{Service.data}</h1>
                </div>
            )
        )}
    </div>
  )
}

export default ServicesComponent