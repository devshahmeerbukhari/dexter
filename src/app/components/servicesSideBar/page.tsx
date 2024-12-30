import React from 'react'
import Link from 'next/link'

function ServicesSideBar() {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-lg m-4 lg:m-4">
        <h2 className="text-lg lg:text-xl font-bold mb-6">Services</h2>
        <ul className="space-y-4">
          {[
            { name: "Web Development", path: "/components/servicesDetails/WebDevelopment" },
            { name: "App Development", path: "/components/servicesDetails/AppDevelopment" },
            { name: "Game Development", path: "/components/servicesDetails/GameDevelopment" },
            {
              name: "BlockChain Development",
              path: "/components/servicesDetails/BlockchainDevelopment",
            },
            { name: "Generative AI", path: "/components/servicesDetails/GenerativeAI" },
            { name: "UI/UX Design", path: "/components/servicesDetails/UIUXDesign" },
            { name: "Database Security", path: "/components/servicesDetails/DatabaseSecurity" },
          ].map((service, index) => (
            <li
              key={index}
              className="cursor-pointer bg-blue-500 p-3 rounded-lg hover:bg-blue-400 transition text-sm lg:text-base"
            >
              <Link
                href={service.path}
                className="flex items-center justify-between"
              >
                {service.name} <span>&raquo;</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default ServicesSideBar
