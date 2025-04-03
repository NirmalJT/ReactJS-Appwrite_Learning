import "./App.css";
import Card from "./components/Card";

function App() {
  const myObj = {
    fullName: "Nirmal Jyoti Thakuria",
    designation: "Software Engeenier",
  };
  const myArr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h1 className="bg-green-400 rounded-2xl p-2 text-black mb-2">
        TailwindTest
      </h1>
      <Card
        departmentName="Computer Science"
        btnText="Click Me(2)"
        someObj={myObj}
      />
      <Card
        departmentName="Computer Science and Engeenering"
        // btnText="Click Me(2)"
        someObj={myObj}
      />
      <Card
        departmentName="Electrical Engeenering"
        btnText="Click Me(3)"
        someArray={myArr}
      />
    </>
  );
}

export default App;
