import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'

import { fetchData } from './api'

class App extends React.Component {
    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData(); // call the function fetchData
        //console.log("Component Did Mount 1");
        this.setState({ data: fetchedData });
        //console.log("Component Did MOUNT finish, after APP & Child are re-rendered");
    }
    render() {
        const { data } = this.state;
        //  console.log(data);
        console.log("In APP Render")
        return ( <
            div className = { styles.container } >
            <
            Cards data = { data }
            / > <
            Chart / >
            <
            CountryPicker / >
            <
            /
            div >
        )
    }
}

export default App;