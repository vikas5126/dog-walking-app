import React from 'react'
import Spotlight from "../../reactbit/SpotlightCard/SpotlightCard"
import reviewImage from "../assets/images/testimonialImg.png"
const Review = () => {
    const comments = [
        {
            comment: 'I had a great experience with Bark & Beyond. The trainers were knowledgeable and patient, and my dog learned so much in just a few sessions. Highly recommend!',
            name: 'John Doe',
            star: '⭐⭐⭐⭐⭐',
        },
        {
            comment: 'The grooming service was fantastic! My dog came back looking and smelling amazing. The staff was friendly and took great care of my furry friend.',
            name: 'Jane Smith',
            star: '⭐⭐⭐⭐⭐',
        },
        {
            comment: 'I love the convenience of at-home pet care. The team at Bark & Beyond is professional and caring, and my pets are always happy after their visits.',
            name: 'Emily Johnson',
            star: '⭐⭐⭐',
        },
        {
            comment: 'Bark & Beyond has been a lifesaver for me and my dog. The trainers are patient and understanding, and they really know how to work with different breeds.',
            name: 'Michael Brown',
            star: '⭐⭐⭐⭐',
        },
        {
            comment: 'I can’t thank Bark & Beyond enough for their amazing service. My dog has made so much progress in just a few weeks, and I couldn’t be happier.',
            name: 'Sarah Wilson',
            star: '⭐⭐⭐⭐',
        },
        {
            comment: 'The walking service is top-notch! My dog loves his daily walks with the friendly staff at Bark & Beyond. I feel confident knowing he’s in good hands.',
            name: 'David Lee',
            star: '⭐⭐⭐⭐⭐',
        },
    ]
  return (
    
        <>
        {comments.map((item, index) => (
            <Spotlight key={index} spotlightColor="rgba(255, 255, 255, 0.25)" className="w-[18rem] m-auto mt-12 mb-12 shrink-0 review sm:w-[23rem]">
                <div className='flex justify-center items-center w-[100%]'>
                    <img src={reviewImage} alt="" className='rounded-[50%] mb-[1.5rem] w-[5rem]'/>
                </div>
                <p className='text-lg text-white mb-2'>"{item.comment}"</p>
                <p>{item.star}</p>
                <p className='text-lg text-blue-300 mt-2'>{item.name}</p>
            </Spotlight>
        ))}
        </>
  )
}

export default Review