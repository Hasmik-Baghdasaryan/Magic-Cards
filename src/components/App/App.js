import { signIn, signUp } from "helpers/client";

function App() {
  const res = signUp({
    name: "John",
    surname: "Smith",
    email: "john@test.com",
    password: "123456",
  });
  res
    .then((res) => console.log(res.message))
    .catch((err) => console.log(err.message));

  const signin = signIn({ email: "john@test.com", password: "123456" });
  signin
    .then((res) => console.log(res.message))
    .catch((err) => console.log(err.message));

  return <p>Magic cards</p>;
}

export default App;
