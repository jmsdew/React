import { Link } from "react-router-dom"


const AllText = ({blog}) => {
    return (
      <Link to={`/blog/${blog.textCode}`}
    )
}