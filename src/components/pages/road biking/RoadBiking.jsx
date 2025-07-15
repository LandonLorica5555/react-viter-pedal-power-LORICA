import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import Banner from '../../partials/Banner'

const RoadBiking = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div>
            {/* Hero Section */}
            <Banner bgColor="bg-green-900" imageUrl={"https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"} Alt={"Road biking hero"} title={"Road Biking"} description={"Speed, endurance, and the freedom of the open road"} />
            

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              {/* Featured Routes */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Featured Road Routes
                  </h2>
                  <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Route 1 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img
                      src="https://images.unsplash.com/photo-1531045535792-b515d59c3d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Coastal Highway"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Coastal Highway
                      </h3>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Distance</p>
                          <p className="font-medium">75 miles</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Difficulty</p>
                          <p className="font-medium">Intermediate</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Elevation</p>
                          <p className="font-medium">1,200 ft</p>
                        </div>
                      </div>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                        View Route
                      </button>
                    </div>
                  </div>

                  {/* Route 2 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img
                      src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Mountain Pass"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Mountain Pass</h3>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Distance</p>
                          <p className="font-medium">42 miles</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Difficulty</p>
                          <p className="font-medium">Advanced</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Elevation</p>
                          <p className="font-medium">5,800 ft</p>
                        </div>
                      </div>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                        View Route
                      </button>
                    </div>
                  </div>

                  {/* Route 3 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img
                      src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Countryside Loop"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Countryside Loop
                      </h3>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Distance</p>
                          <p className="font-medium">30 miles</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Difficulty</p>
                          <p className="font-medium">Beginner</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Elevation</p>
                          <p className="font-medium">500 ft</p>
                        </div>
                      </div>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
                        View Route
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gear Guide */}
              <div className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-20">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Essential Road Biking Gear
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Having the right equipment can make all the difference in
                      your riding experience and safety.
                    </p>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition">
                      View Full Gear Guide
                    </button>
                  </div>
                  <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Gear Item 1 */}
                      <div className="bg-white p-4 rounded-lg shadow text-center">
                        <div className="h-16 mb-2 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="font-medium">Helmet</p>
                      </div>

                      {/* Gear Item 2 */}
                      <div className="bg-white p-4 rounded-lg shadow text-center">
                        <div className="h-16 mb-2 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="font-medium">Bike Shoes</p>
                      </div>

                      {/* Gear Item 3 */}
                      <div className="bg-white p-4 rounded-lg shadow text-center">
                        <div className="h-16 mb-2 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="font-medium">Jersey</p>
                      </div>

                      {/* Gear Item 4 */}
                      <div className="bg-white p-4 rounded-lg shadow text-center">
                        <div className="h-16 mb-2 flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="font-medium">Bottles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Tips */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Training Tips
                  </h2>
                  <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Tip 1 */}
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-green-600 text-4xl font-bold mb-4">
                      01
                    </div>
                    <h3 className="text-xl font-bold mb-3">Cadence Matters</h3>
                    <p className="text-gray-600">
                      Aim for a cadence of 80-100 RPM to improve efficiency and
                      reduce fatigue. Use your gears to maintain this range on
                      different terrain.
                    </p>
                  </div>

                  {/* Tip 2 */}
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-green-600 text-4xl font-bold mb-4">
                      02
                    </div>
                    <h3 className="text-xl font-bold mb-3">Fuel Properly</h3>
                    <p className="text-gray-600">
                      Consume 30-60g of carbohydrates per hour on rides longer
                      than 90 minutes to maintain energy levels.
                    </p>
                  </div>

                  {/* Tip 3 */}
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-green-600 text-4xl font-bold mb-4">
                      03
                    </div>
                    <h3 className="text-xl font-bold mb-3">Group Riding</h3>
                    <p className="text-gray-600">
                      When drafting, maintain a consistent speed and avoid
                      sudden braking. Communicate clearly with hand signals and
                      verbal calls.
                    </p>
                  </div>

                  {/* Tip 4 */}
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-green-600 text-4xl font-bold mb-4">
                      04
                    </div>
                    <h3 className="text-xl font-bold mb-3">Hill Climbing</h3>
                    <p className="text-gray-600">
                      Shift before you need to, stay seated on moderate grades,
                      and focus on steady breathing and pedal strokes.
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

export default RoadBiking
