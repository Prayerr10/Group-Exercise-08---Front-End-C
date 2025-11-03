// Komponen adalah fungsi yang return JSX
import HelloWorld from "./Helloworld";
const App = () => {
  let hello = "Hello World"
  return (
    // ketentuan JSX hanya bisa return 1 div saja tidak bisa ada 2, bisa kalau bisa nested div maksudnya div dalam div
    // fragment tidak bisa di style list ( <> ) (</>) 
    <>
      <div className="text-[25px] bg-blue-500 m-10 p-10 font-serif">
        {hello}
      </div>
      {/* ini cara memanggil komponen kedua */}
      <HelloWorld text="ini adakah Helloworld 1"/>
      <HelloWorld text="ini adakah Helloworld 2"/>
    </>
  );
};

export default App;