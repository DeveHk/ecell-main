import Image from 'next/image'

const EventCard = () => {
    return (
        <div className='event-card shadow-2xl p-5 rounded-2xl'>
            <h3 className="text-center mb-2 font-extrabold text-lg">E-SUMMIT</h3>
            <img src="/event.jpg" className='w-full rounded-xl h-56' />
            <p>Entrepreneurship Summit is the brinchild of E-Cell, NSUT. E-Summit NSUT is an event that is known throughout India for being one of a kind.</p>
            <span className='font-bold mb-5 block'>Learn More</span>
        </div>
    )
}

export default EventCard