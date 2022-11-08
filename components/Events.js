import EventCard from './EventCard'

const Events = () => {
  return (
    <section className='events-container px-24 pt-12 pb-20'>
      <h2 className='text-center text-4xl font-bold mb-8'>Events</h2>
      <div className='flex gap-8'>
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  )
}

export default Events