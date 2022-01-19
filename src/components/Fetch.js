import { Component } from 'react'
import Header from '../components/Header'

class Fetch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
        }
    }

    componentDidMount() {
        fetch(`http://api.airvisual.com/v2/nearest_city?key=bfbc0b56-6358-4017-b804-6613655faf1c`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({
                    loading: true,
                    data: jsonResponse?.data,
                })
            })
    }

    render() {
        const { data, loading } = this.state
        const {
            city,
            state,
            country,
            current,
        } = data

        return (
            <>
                <Header />
                <div className='render_api'>     {
                    loading ?
                        <>
                            <h1> Localisation </h1>
                            <p>{city}</p>
                            <p>{state}</p>
                            <p>{country}</p>
                        </> :
                        <>
                            <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
                        </>
                }</div>
            </>
        )
    }
}

export default Fetch