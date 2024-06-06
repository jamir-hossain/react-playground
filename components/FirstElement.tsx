const data = () => ({
  name: "Jamir",
  roll: 234,
});

const ChildElement = () => {
  return (
    <div>
      <h1 className="text-5xl text-green-500">This is my child</h1>
    </div>
  );
};

const FirstElement = () => {
  return (
    <div>
      <h1 className="text-7xl">Hello world</h1>
      <ChildElement />
    </div>
  );
};
