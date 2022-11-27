import EventCard from './EventCard'

const Events = () => {
  return (
    <section className='events-container px-24 pt-12 pb-20'>
      <h2 className='p-10 font-bold text-center text-5xl mb-2'>Events</h2>
      <div className='grid grid-rows-3 md:grid-cols-2 md:grid-rows-3  lg:grid-rows-1 lg:flex lg:justify-around'>
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  )
}

export default Events