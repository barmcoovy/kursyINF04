import Form from "./components/Form";

function App() {
  const coursesArray = [
    "Programowanie w C#",
    "Angular dla początkujących",
    "Kurs Django",
  ];
  return (
    <>
      <Form courseArray={coursesArray} />
    </>
  );
}

export default App;
