type ButtonProps = {
  textSize?: string;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
        <div className="flex justify-start items-center">
          <button className={`bg-blue-500 hover:bg-blue-700 text-${props.textSize || 'xs'} text-white font-bold py-2 px-4 m-1 rounded-md active:scale-95 transition duration-200`} >
              {props.children}
          </button>
        </div>
    </div>
  );
};

export default Button;
