import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <h3>Snack-a-log</h3>
        <div>
            <Link to={"/snacks"}>
            Veiw All Snacks
            </Link>
            <Link to={"snacks/new"}>
            Add New Snack
            </Link>
        </div>
    </nav>
  )
}

export default Nav