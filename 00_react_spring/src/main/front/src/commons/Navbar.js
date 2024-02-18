

const Navbar = () => {

    return (
        <div>
            <ul>
                <li><Navbar to="/">Main</Navbar></li>
                <li><Navbar to={"/menuPage"}>목록보기</Navbar></li>
                <li><Navbar to={"/quizPage"}>퀴즈풀기</Navbar></li>
            </ul>
        </div>
    )
}

export default Navbar;