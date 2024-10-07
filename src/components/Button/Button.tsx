type ButtonProps = {
  children: any;
  className?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${props.className} w-fit px-[20px] h-[38px] flex items-center justify-center rounded-[5px] text-white`}
    >
      {props.children}
    </button>
  );
};

export default Button;
