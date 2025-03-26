function Hello() {
  const name = "Ritik";
  const nameArray = Array.from(name);
  const element = nameArray.map((ele) => {
    return <p>{ele}</p>;
  });
  return (
    <>
      <h1>Hey, how are you? I'm {name}!</h1>
      {element}
    </>
  );
}

export default Hello;
