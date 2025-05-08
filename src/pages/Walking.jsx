import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Review from '../components/Review'
import Stepper from '../components/Stepper'
import image1 from "../assets/images/image1.jpg"
import image2 from "../assets/images/image2.jpg"

const Walking = () => {
  return (
    <> 
    <Navbar/>
    
    <Form/>

    <Stepper/>

    {/* <h1 className='font-bold text-[2rem] text-center mt-15'>Our Happy customer</h1> */}
    {/* <div className='flex justify-start items-center overflow-x-scroll gap-14 w-[100%] pl-[3rem] m-auto'>
        <Review/>
    </div> */}

    <div className='w-[100%] p-[4rem] md:pr-48 md:pl-48 bg-gray-200 flex flex-col justify-center items-start gap-4 text-base text-black'>
              {/* <h1 className='text-[2rem] text-blue-500'>Why is Walking Important for Dogs</h1>
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
    
              <p>Don’t deprive your pet of its little adventurous time, get connected with Dog Walkers in Delhi with BarkingTales.</p>
    
              <p>Exercise is essential for hyperactive dogs to release their built-up energy. Even though we just want the best for our tiny buddies, our busy schedules prevent us from doing our tasks effectively. You can be with your pet even when you are not there in person. Don’t miss their happy times.</p>
    
              <p>The dog walkers can give you time-to-time updates on their activities even if it’s their upside rolling in Grass. When things get a little too busy to go home for lunch or take a walk with your dog through the neighbourhood in the hours between work and night, we can help. </p> */}



              <h1 className='text-[2rem] text-black'>Dog walking is essential for a dog's which help them  physically, mentally, and emotionally well-being. Here’s why:</h1>
          <li><b>Physical Health–</b> Regular walks help maintain a healthy weight, improve cardiovascular fitness, and strengthen muscles.</li>
          <li><b>Mental Stimulation– </b>Dogs explore new scents, sights, and sounds, preventing boredom and destructive behaviors.</li>
          <li><b>Behavioral Benefits–</b> Walking reduces hyperactivity, anxiety, and aggression by burning excess energy.</li>
          <li><b>Socialization–</b> Encounters with other dogs and people improve social skills and confidence.</li>
          <li><b>Bonding Time–</b> Walking strengthens the owner-dog relationship through shared activity and trust.</li>
          <li><b>Prevents Health Issues–</b> Regular exercise aids digestion, joint health, and reduces risks of obesity-related diseases.</li>
          <li><b>Routine & Discipline– </b>Scheduled walks create structure, reinforcing good habits and potty training.</li>
          <p className='text-[2rem] text-black'>A daily walk is a simple yet powerful way to keep your dog happy, healthy, and well-behaved with wagging tail! 🐕</p>
            </div>
    <Footer/> 
    </>
  )
}

export default Walking