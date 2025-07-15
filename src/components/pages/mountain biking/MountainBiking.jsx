import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import BannerMountainBiking from '../../partials/Banner'
import Banner from '../../partials/Banner'

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
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img
                      src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                      alt="Whistler Bike Park"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">
                            Whistler Bike Park
                          </h3>
                          <p className="text-blue-600">
                            British Columbia, Canada
                          </p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Expert
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        The world's premier mountain bike park with trails for
                        all skill levels and legendary downhill courses.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Over 50 trails</span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                          Trail Details
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Trail 2 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img
                      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                      alt="Moab Slickrock"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">Moab Slickrock</h3>
                          <p className="text-blue-600">Utah, USA</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Intermediate-Advanced
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        The iconic trail with grippy sandstone and
                        rollercoaster-like terrain that defines mountain biking
                        in the desert.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">10.6 mile loop</span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                          Trail Details
                        </button>
                      </div>
                    </div>
                  </div>
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
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Body Position</h3>
                    <p className="text-gray-600">
                      Stay centered on the bike with bent elbows and knees to
                      absorb impacts and maintain control.
                    </p>
                  </div>

                  {/* Skill 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Braking Control</h3>
                    <p className="text-gray-600">
                      Use both brakes evenly, with more front brake on descents.
                      Avoid locking wheels.
                    </p>
                  </div>

                  {/* Skill 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Cornering</h3>
                    <p className="text-gray-600">
                      Look through the turn, lean the bike (not your body), and
                      keep pedals level.
                    </p>
                  </div>
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
