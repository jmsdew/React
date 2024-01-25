import { Link } from "react-router-dom"
import itemStyle from "./Text.all.css"

const AllText = ({blog}) => {
    return (
      <Link to={`/blog/${blog.textCode}`}>
        <div className={itemStyle.MenuItem}>
          <h3> 등번호 : {blog.textCode} 이름 : {blog.textName}</h3>
        </div>
      </Link>
    )
}

export default AllText;