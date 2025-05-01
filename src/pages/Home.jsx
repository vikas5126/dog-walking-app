import React from 'react'
import Navbar from '../components/Navbar'
import headerImage from "../assets/images/reallygreatsite.com.png"
import DoorStep from '../components/DoorStep'
import Home2sec from '../components/Home2sec'
import Review from '../components/Review'
import Footer from '../components/Footer'
import image2 from "../assets/images/image2.jpg"
import { Link } from 'react-router-dom'
import whatsapp from "../assets/images/whatsapp.png"

const home = () => {
  return (
    <div id='home'>
        <Navbar/>
        <div className='relative header flex justify-around w-[100%] items-center bg-[#f1d6bb] md:flex-row flex-col-reverse sm:p-6 pt-[2rem] pb-[2rem] homePage'>
          <div className='static w-[80%] flex flex-col justify-center items-start gap-1.5  md:static top-[2rem] md:w-[40%]'>
            <h1 className='md:text-[2.2rem] font-bold text-[2rem]'>"Lets go out with us and make your furry friend happy and active."</h1>
            <p className='text-gray-600 text-lg mt-8'>We take your dog out for the best walking experience to reduce boredom and encourage socialization. This helps prevent obesity and behavioral problems, while also strengthening your dog and keeping them active and happy.
              <br />
              <p className='mt-8 text-lg'>Go and check out our services by clicking on the Book trail.</p>
            </p>
            <Link to={'/walking'}><button className='md:w-[12rem] md:h-[4rem] w-[9rem] h-[3rem] text-[1rem] bg-green-700 rounded-2xl text-white md:text-lg mt-16 mb-4'>Book Trial</button></Link>
          </div>
          <div className='w-[100%] md:w-[30rem] hidden md:flex'>
            <img src={headerImage} alt="header" className='' />  
          </div>
        </div>
        <DoorStep/>
        <Home2sec/>

        {/* <div className='flex justify-around flex-wrap items-center w-[100%] p-12 mt-8' >
          <Review/>
        </div> */}

        <div className='flex justify-start items-center overflow-x-scroll gap-14 w-[100%] sm:pl-[3rem] pl-[1rem] m-auto'>
            <Review/>
        </div>

        {/* <div className='w-[100%] p-8 md:pr-48 md:pl-48 pr-4 pl-4 bg-gray-200 flex flex-col justify-center items-start gap-4 text-base text-gray-500'>
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
        </div> */}

        <Footer/>
        <div className='left-[80%] fixed bottom-0 md:left-[90%] lg:left-[95%] w-[5rem] p-4 text-center'>
          <a href="https://wa.me/+917339918386" target='_blank'>
          <img src={whatsapp} alt="" />
          </a>
        </div>
    </div>
  )
}

export default home