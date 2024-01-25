
const ApiComponent = () => {
  const callApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response);
        return response.json();
      })
  }

  return (
    <>
      <button onClick={callApi}>api 호출</button>
    
    </>
  )
}

export default ApiComponent;