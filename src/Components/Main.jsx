import React from 'react'

function Main() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
          setMovies(response.data.results);
        });
      }, []);
  return (
    <div>Main</div>
  )
}

export default Main