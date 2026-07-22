
type CardProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

const Card = (props: CardProps) => {
  return (
    
    <div className='flex-col bg-white rounded-lg p-4 mx-2 my-2 w-38 h-50 md:w-60 md:h-70 border hover:scale-110 hover:z-10 transition duration-200'>
      <div className='flex justify-center items-center rounded-lg'>
        <img src={props.imageUrl || '/images/images.jpg'} alt={props.title} className='w-30 h-20 md:w-45 md:h-30 justify-center' />
      </div>
      <div className='  text-black font-semibold text-base line-clamp-1'>
        {props.title || 'Card Title'}
      </div>
      <div className=' text-black font-normal text-xs line-clamp-3 md:text-sm md:line-clamp-4'>
          {props.description || 'Card Description'}
      </div>
    </div>
  )
}

export default Card
