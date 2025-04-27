import React from 'react'
import dogTraining from "../assets/images/dog-training-service.svg"
import dogGrooming from "../assets/images/grooming-service.svg"
import dogWalking from "../assets/images/walking-service.svg"
import dogVacation from "../assets/images/vaccination-service.svg"
import { Link } from 'react-router-dom'
import HomePop from './HomePop'


const DoorStep = () => {
    // const [handleClick, setHandleClick] = React.useState(false)
    const [click, setClick] = React.useState(false);
    const card = [
        {
            title: "Dog Training",
            image: dogTraining,
            color: 'rgb(255, 164 ,164)',
            // nav: '/walking'
        },
        {
            title: "Dog Grooming",
            image: dogGrooming,
            color: 'rgb(153, 222 ,128)',
            nav: '/grooming'
        },
        {
            title: "Dog Walking",
            image: dogWalking,
            color: 'rgb(128, 222 ,255)',
            nav: '/walking'
        },
        {
            title: "Dog Vaccination",
            image: dogVacation,
            color: 'rgb(255, 128 ,255)'
        }
    ]

    const handleClick = () => {
        setClick(!click);
        // setHandleClick(!handleClick)
        console.log(click)
    }

    return (
        <div>
            <h1 className='text-[2.5rem] font-semibold text-center m-12'>Our Services at your Doorstep</h1>
            <div onClick={handleClick} className='flex justify-around items-center w-[100%] flex-wrap '>
                {card.map((item, index) => (
                    <Link to={`${item?.nav}`} key={index}>
                    <>
                    {/* {click && <HomePop/>} */}
                    <div 
                        key={index} 
                        className='flex flex-col justify-center items-center gap-4 border-0 w-[12rem] h-[13rem] rounded-xl shadow-[0px_20px_30px_-10px_rgb(82 82 82)]' 
                        style={{ borderColor: item.color }}
                        >
                        <div>
                            <img src={item.image} alt={item.title} className='w-[9rem] h-[9em]' />
                        </div>
                        <div className='flex justify-center items-center w-[100%] bg- h-[3rem] rounded-lg' style={{ backgroundColor: item.color }}>
                            <p className='text-lg font-semibold'>{item.title}</p>
                        </div>
                    </div>
                    </>
                 </Link>
                ))}
            </div>
        </div>
    )
}

export default DoorStep