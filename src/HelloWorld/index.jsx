
import HelloMoon from "../Hellomoon";

// Tipe data props adalah object
const HelloWorld = (props) => {
  return (
    <>
      <div className="text-[25px] bg-red-500 m-10 p-10 font-serif">
        {props.text}
        <HelloMoon/>
      </div>
    </>
  );
};

export default HelloWorld;