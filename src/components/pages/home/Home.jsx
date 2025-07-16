import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import { Link } from 'react-router-dom'
import ButtonHeroHomePage from '../../partials/ButtonHeroHomePage'
import CardHeroHomePage from '../../partials/CardHeroHomePage'
import EventCardHomePage from '../../partials/EventCardHomePage'

const Home = () => {
    
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div className="relative">
            {/* Hero Section */}
            <div className="relative h-screen">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <img
                src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
                alt="Cycling hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                    Ride Beyond Limits
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8">
                    Discover the world on two wheels with our expert guides and
                    community
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {/* Hero Section Road Biking Button */}
                    <ButtonHeroHomePage link={"/road-biking"} buttonColor={"bg-green-600"} hoverColor={"hover:bg-green-700 hover:scale-105"} buttonText={"Road Biking"} />

                    {/* Hero Section Mountain Biking Button */}
                    <ButtonHeroHomePage link={"/mountain-biking"} buttonColor={"bg-blue-600"} hoverColor={"hover:bg-blue-700 hover:scale-105"} buttonText={"Mountain Biking"} />
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Sections */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Explore Cycling Disciplines
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                  Whether you prefer smooth pavement or rugged trails, we've got
                  you covered
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Road Biking Card */}
                <CardHeroHomePage imageUrl={"https://images.unsplash.com/photo-1531045535792-b515d59c3d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"} Alt={"Road biking"} title={"Road Biking"} description={"Speed, endurance, and the open road"} buttonTextColor={"text-green-700"}/>
                

                {/* Mountain Biking Card */}
                <CardHeroHomePage imageUrl={"/images/webp/Mountain Biking Card.webp"} Alt={"Mountain biking"} title={"Mountain Biking"} description={"Trails, adrenaline, and outdoor adventure"} buttonTextColor={"text-blue-700"}/>  
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gray-900 text-white py-16">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Upcoming Cycling Events
                  </h2>
                  <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                    Join our community rides and competitions
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Event 1 */}
                  <EventCardHomePage imageUrl={"/images/webp/cycling events 1.webp"} Alt={"Alpine Challenge"} title={"Alpine Challenge"} spanBgColor={"bg-green-900"} spanTextColor={"text-green-300"} bikingType={"Road"} date={"June 15-17, 2023"} location={"Swiss Alps"}/>
                  

                  {/* Event 2 */}
                  <EventCardHomePage imageUrl={"/images/webp/cycling events 2.webp"} Alt={"Trail Masters"} title={"Trail Masters"} spanBgColor={"bg-blue-900"} spanTextColor={"text-blue-300"} bikingType={"Mountain"} date={"July 8-9, 2023"} location={"Moab, Utah"}/>
                 

                  {/* Event 3 */}
                  <EventCardHomePage imageUrl={"/images/webp/cycling events 3.webp"} Alt={"Urban Sprint"} title={"Urban Sprint"} spanBgColor={"bg-green-900"} spanTextColor={"text-green-300"} bikingType={"Road"} date={"August 5, 2023"} location={"New York City"}/>
                  
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Home
