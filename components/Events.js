import EventCard from './EventCard'

const Events = () => {
  return (
    <section className='events-container flex gap-8 p-24'>
        <EventCard />
        <EventCard />
        <EventCard />
    </section>
  )
}

export default Events