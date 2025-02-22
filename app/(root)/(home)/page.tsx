import Filters from '@/components/ui/Filters'
import ResourceCard from '@/components/ui/ResourceCard'
import SearchForm from '@/components/ui/SearchForm'
import { getResources } from '@/sanity/actions'
import React from 'react'

const page = async () => {
  const resources = await getResources({
    query:'',
    category:'',
    page:'1'
  })
  console.log(resources)
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">JavaScript Mastery Resources</h1>
        </div>
        <SearchForm />
      </section>
      <Filters />
      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        Header
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources?.length > 0 ? (
          resources.map((resource: any)=>(
            <ResourceCard 
              key={resource._id}
              title={resource.title}
              id={resource._id}
              poster={resource.poster}
              downloadNumber={resource.views}
              slug={resource._id}
            />
          ))
        ):(
          <p className="body-regulat text-white 400">
            No Resources Found
          </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default page