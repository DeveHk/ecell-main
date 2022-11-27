import Image from 'next/image'

const EventCard = () => {
    return (
        <div className='event-card shadow-2xl p-5 rounded-2xl hover:scale-105 transition-transform duration-200 max-w-[500px]'>
            <h3 className="text-center mb-2 font-extrabold text-lg">E-SUMMIT</h3>
            <div className='w-full h-56 relative rounded-xl overflow-hidden'>
                <Image src="/images/event.jpg" alt="event" layout="fill" className='rounded-xl' />
            </div>
            <p>Entrepreneurship Summit is the brainchild of E-Cell, NSUT. E-Summit NSUT is an event that is known throughout India for being one of a kind.</p>
            <span className='font-bold mb-5 block cursor-pointer'>Learn More</span>
        </div>
    )
}

export default EventCard