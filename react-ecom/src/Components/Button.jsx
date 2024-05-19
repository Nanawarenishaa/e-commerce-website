/* eslint-disable react/prop-types */



// eslint-disable-next-line no-unused-vars
const Button = ({text,bgcolor,path}) => {
  const classNames=`bg-neutral-800 text-white font-bold p-2 px-4  rounded-md duration-500 hover:bg-red-500 ${bgcolor}`;
  return (
    <button className={classNames}> {text}  </button>
  )
}

export default Button
