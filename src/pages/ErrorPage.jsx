import { useRouteError } from "react-router-dom";


function ErrorPage () {
  const error = useRouteError();
  console.log(error);
  return (
    <div><h1>We got nothing yet</h1></div>
  )
}

export default ErrorPage;