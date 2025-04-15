import React from 'react'
import dogTraining from "../assets/images/dog-training-service.svg"
import dogGrooming from "../assets/images/grooming-service.svg"
import dogWalking from "../assets/images/walking-service.svg"
import dogVacation from "../assets/images/vaccination-service.svg"


const DoorStep = () => {
    const card = [
        {
            title: "Dog Training",
            image: dogTraining,
            color: 'rgb(255, 164 ,164)',
        },
        {
            title: "Dog Grooming",
            image: dogGrooming,
            color: 'rgb(153, 222 ,128)'
        },
        {
            title: "Dog Walking",
            image: dogWalking,
            color: 'rgb(128, 222 ,255)'
        },
        {
            title: "Dog Vaccination",
            image: dogVacation,
            color: 'rgb(255, 128 ,255)'
        }
    ]
    return (
        <div>
            <h1 className='text-[2.5rem] font-semibold text-center m-12'>Our Services at your doorstep</h1>
            <div className='flex justify-around items-center w-[100%] flex-wrap gap-4'>
                {card.map((item, index) => (
                    <div 
                        key={index} 
                        className='flex flex-col justify-center items-center gap-4 border-2 w-[12rem] h-[11rem]' 
                        style={{ borderColor: item.color }}
                    >
                        <div>
                            <img src={item.image} alt={item.title} className='w-[7rem] h-[7em]' />
                        </div>
                        <div className='flex justify-center items-center w-[100%] bg- h-[3rem]' style={{ backgroundColor: item.color }}>
                            <p className='text-lg font-semibold'>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoorStep