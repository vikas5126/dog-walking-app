import React from 'react'
import Navbar from '../components/Navbar'
import headerImage from "../assets/images/reallygreatsite.com.png"
import DoorStep from '../components/DoorStep'
import Home2sec from '../components/Home2sec'
import Review from '../components/Review'
import Footer from '../components/Footer'
import image1 from "../assets/images/image1.jpg"
import image2 from "../assets/images/image2.jpg"

const home = () => {
  return (
    <div id='home'>
        <Navbar/>
        <div className='relative header flex justify-around w-[100%] items-center bg-[#f1d6bb] md:flex-row flex-col-reverse p-6 pt-[2rem] pb-[2rem] homePage'>
          <div className='static w-[80%] flex flex-col justify-center items-start gap-1.5 sm:absolute md:static top-[2rem] md:w-[40%]'>
            <h1 className='md:text-[3rem] font-bold text-[2.5rem]'>You Never Regret Your Decision.</h1>
            <p className='text-gray-600'>Join a community of 50k like-minded dog parents and canine experts. Get answers to your queries, shop for dog services and fresh food, and learn how you can become a better dog parent.</p>
            <button className='md:w-[12rem] md:h-[4rem] w-[9rem] h-[3rem] text-[1rem] bg-red-700 rounded-2xl text-white md:text-lg mt-4 mb-4'>Book Trial</button>
          </div>
          <div className='sm:w-[100%] md:w-[30rem] hidden sm:flex'>
            <img src={headerImage} alt="header" className='' />  
          </div>
        </div>
        <DoorStep/>
        <Home2sec/>

        <div className='flex justify-around flex-wrap items-center w-[100%] p-12 mt-8' >
          <Review/>
        </div>

        <div className='w-[100%] p-8 md:pr-48 md:pl-48 pr-4 pl-4 bg-gray-200 flex flex-col justify-center items-start gap-4 text-lg text-gray-500'>
          <h1 className='text-[2rem] text-blue-500'>Why is Walking Important for Dogs</h1>
          <p>We know you brought a new buddy home. Yes, it is cute and sweet. But now, day after day the bathroom breaks and outdoor strolls are hindering your work routine. No doubt you love your pet intensely, but work is also a crucial part of your life. For times like these, there are Dog Walkers. These hired individuals can take your dog for potty breaks and regular strolls. So you can relax and sit back. </p>
          <p>The fast-paced life and hectic schedules can hinder the quality time and bond between you and your pet. Moreover, it affects your dog’s daily need to exercise and bathroom breaks. For situations like these, there are dog walkers.</p>

          <h1 className='text-[2rem] text-gray-700'>What is a Dog Walker?</h1>
          <p>A dog walker is someone who charges a fee to walk and exercise your dog when you are unable to do so. Dogs are typically taken for walks throughout the day while their owners are at work or gone for a short period of time. Having a dog walking ensures that your dog is not deprived of outside stimulation.</p>

          <h1 className='text-[2rem] text-gray-700'>What are the qualities to look for in a dog walker in Delhi at home?</h1>
          <div className='w-[100%] p-4'>
          <li>Patience – As it has been said time and again, ‘patience is a virtue.’ Dogs sometimes tend to be stubborn and make the situation complex. For this, a dog walker should be calm</li>
          <li>Knowledge of the area – A good dog walker should know the area. He should know each and every park in the locality.</li>
          <li>a Good friend – In the end, it’s your pet who has to be comfortable with the walker. If your dog isn’t on the right foot with the walker, things will not be smooth for both of them. </li>
          </div>

          <img src={image2} className='aspect-16/9' alt="real image" />

          <p>One thing that plays a vital role in your dog’s health is exercise. Even after potty breaks, your pet is going to need a healthy dose of stimulation. Sometimes adding 20 -30 minutes for your pet to your schedule is not possible. The fast-paced life that we all live in today is not allowing any bonding time between you and your pet.
          </p>

          <img src={image1} className='aspect-16/9' alt="real image" />

          <p>Don’t deprive your pet of its little adventurous time, get connected with Dog Walkers in Delhi with Bark & Beyond.</p>

          <h1 className='text-[1.5rem] text-gray-700'>We Provide You With</h1>
          <div className='w-[100%] p-4'>
          <li>Professionals</li>
          <li>Medium to Talk and Connect with Service Providers</li>
          <li>Easy Payment Options</li>
          <li>Affordable Packages</li>
          <li>24/7 Customer Care Service</li>
          <li>Easy Access to Service Providers</li>
          </div>

          <p>Exercise is essential for hyperactive dogs to release their built-up energy. Even though we just want the best for our tiny buddies, our busy schedules prevent us from doing our tasks effectively. You can be with your pet even when you are not there in person. Don’t miss their happy times.</p>

          <p>The dog walkers can give you time-to-time updates on their activities even if it’s their upside rolling in Grass. When things get a little too busy to go home for lunch or take a walk with your dog through the neighbourhood in the hours between work and night, we can help. </p>
        </div>

        <Footer/>
    </div>
  )
}

export default home