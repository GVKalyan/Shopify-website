
import { useEffect, useState } from "react"
import './Home.css';
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import './User';
import Navbar from "./Navbar";

// export  const MyContext = createContext();

 const Home = () => {

    let [userData, setUserData] = useState([])
    let [userInput, setUserInput] = useState('')

        

    const fetchdata = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setUserData(data)
                
            })

    }

    useEffect(() => {
        fetchdata()
    }, [])

    let filteredData = userData.filter((value) => {

        return value.title.toUpperCase().includes(userInput.toUpperCase());
    })


    return (

        <>
        <Navbar/>
            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={'col-md-12 cntr'}><input type="text" placeholder="Search" className={"form-control w-25 m-4"} onChange={(e) => setUserInput(e.target.value)} /></div>
                </div>
                <div className={"row d-flex justify-content-evenly m-3"}>

                    {
                        filteredData.map((info) => {
                             
                            return (
                                <div className={'col-md-4'}>
                                    <div className={"card effect card-wdth"}>
                                        <Link to={`user/${info.id}`} state={info}>
                                                <UserCard
                                                     title={info.title}
                                                     imgs={info.image}
                                                     des={info.description}
                                                     price={info.price}
                                                 />
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>

    )
}

export default Home;
