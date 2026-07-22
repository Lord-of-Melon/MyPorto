

type CardProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

const Card = (props: CardProps) => {
  return (
    //  tambahkan efek hover pada card nanti
    <div className='flex-col bg-white rounded-lg p-4 m-1 w-60 h-70 border'>
      <div className='flex justify-center items-center'>
        <img src={props.imageUrl || '/public/images/images.jpg'} alt={props.title} className='w-45 h-30 justify-center' />
      </div>
      <div className='flex justify-center text-black font-semibold text-base'>
        {props.title || 'Card Title'}
      </div>
      <div className='flex justify-center text-black font-normal text-sm'>
          {props.description || 'Card Description'}
      </div>
    </div>
  )
}

export default Card
