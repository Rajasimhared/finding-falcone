import React from 'react';
import AutoComplete from '../components/AutoComplete';
import apiData from '../utils/api';
import { PLANETS, VEHICLES } from '../utils/constants';

export default class HomeLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const Planets = await apiData(PLANETS, 'GET');
    const Vehicles = await apiData(VEHICLES, 'GET');
    console.log(Planets, Vehicles);
  }
  render() {
    return (
      <div>
        Home Page
        <AutoComplete />
      </div>
    );
  }
}
