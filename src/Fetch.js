import { Component } from 'react'

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
                    data: jsonResponse?.data
                })
            })
    }

    render() {
        const { data, loading } = this.state
        const {
            city,
            state,
            country,
        } = data

        return (
            <>     {
                loading ?
                    <> <h1> Localisation </h1>
                        <p>{city}</p>
                        <p>{state}</p>
                        <p>{country}</p>
                    </> :
                    <>
                        LOADING
                    </>
            }</ >
        )
    }
}

export default Fetch