import Header from "./components/Header"
import ReviewList from "./components/ReviewList"


function App() {

        return (
                <>
                        <Header />
                        <div className="container">
                                <div className="revSection">
                                        <ReviewList />
                                </div>

                        </div>
                </>

        )
}

export default App