import { useEffect, useState } from 'react';
import CoinDetails from './components/CoinDetails';
import InputFilter from './components/InputFilter';
import Login from './components/Login';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Table from './components/Table';
import { http } from "./helper/http";
import './styles.scss';

const initialForm = {
  name: "",
  email: ""
}

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [coinId, setCoinId] = useState({});
  const [user, setUser] = useState(initialForm);
  const [loggedUser, setLoggedUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await http().get('https://api.coinlore.net/api/tickers/')
        if (!res.error) {
          setCoins(res.data)
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])

  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
  });

  const foundCoin = coins.find((coin) => coin.id === coinId);

  const userLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    setLoggedUser(JSON.parse(localStorage.getItem("user")).name)
  }

  useEffect(() => {
    try {
      setLoggedUser(JSON.parse(localStorage.getItem("user")).name);
    } catch (error) {
      console.log(error)
    }
  }, [])


  return (
    <>
      <Navbar setCoinId={setCoinId} user={loggedUser} />
      <InputFilter setSearch={setSearch} />
      <Table coins={filteredCoins} search={search} setCoinId={setCoinId} />
      <Modal>
        {coinId === "Login"
          ?
          <Login user={user} setUser={setUser} onClick={userLogin} />
          :
          <CoinDetails coin={foundCoin} />
        }
      </Modal>
    </>
  );
}

export default App;
