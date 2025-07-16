import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import BannerMountainBiking from '../../partials/Banner'
import Banner from '../../partials/Banner'
import CardMountainBikingTrail from '../../partials/CardMountainBikingTrail'
import CardMountainBikingMTBSkill from '../../partials/CardMountainBikingMTBSkill'

const MountainBiking = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div>
            {/* Hero Section */}
            <Banner bgColor="bg-blue-900" imageUrl={"https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"} Alt={"Mountain biking hero"} title={"Mountain Biking"} description={"Trails, adrenaline, and outdoor adventure"} />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              {/* Featured Trails */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Must-Ride Trails
                  </h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Trail 1 */}
                  <CardMountainBikingTrail imageUrl={"/images/webp/must ride trails 1.webp"} alt={"Whistler Bike Park"} title={"Whistler Bike Park"} location={"British Columbia, Canada"} difficulty={"Expert"} description={"The world's premier mountain bike park with trails for all skill levels and legendary downhill courses."} distance={"Over 50 trails"}/>
                  

                  {/* Trail 2 */}
                  <CardMountainBikingTrail imageUrl={"/images/webp/must ride trails 2.webp"} alt={"Moab Slickrock"} title={"Moab Slickrock"} location={"Utah, USA"} difficulty={"Intermediate-Advanced"} description={"The iconic trail with grippy sandstone and rollercoaster-like terrain that defines mountain biking in the desert."} distance={"10.6 mile loop"}/>
                
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Essential MTB Skills
                  </h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Skill 1 */}
                  <CardMountainBikingMTBSkill svg={"M12 4v16m8-8H4"} title={"Body Position"} description={"Stay centered on the bike with bent elbows and knees to absorb impacts and maintain control."} />

                  {/* Skill 2 */}
                  <CardMountainBikingMTBSkill svg={"M13 5l7 7-7 7M5 5l7 7-7 7"} title={"Braking Control"} description={"Use both brakes evenly, with more front brake on descents. Avoid locking wheels."} />
                  

                  {/* Skill 3 */}
                  <CardMountainBikingMTBSkill svg={"M20 12H4"} title={"Cornering "} description={"Look through the turn, lean the bike (not your body), and keep pedals level."} />
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

export default MountainBiking
