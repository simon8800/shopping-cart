import { useRouteError } from "react-router-dom";


function ErrorPage () {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>This page doesn't exist yet!</h1>
    </div>
  )
}

export default ErrorPage;