import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchSreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchAPI  = async() => {
        const response = await yelp.get('/search', {
            params : {
                limit :50,
                term,
                location : 'san jose'
            }
        }); //asynconous process
        setResults(response.data.businesses)
    };
    return (
        <View style = {Styles.background}>
            <SearchBar 
            term = {term} 
            onTermChange = {setTerm}
            onTermSubmit = {searchAPI} />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    background : {
        backgroundColor : 'white',
        flex : 1
    }
});

export default SearchSreen; 