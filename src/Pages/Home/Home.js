import React from 'react';
import AddTasks from './AddTasks';
import Banner from '../Banner/Banner';
import MyTask from '../MyTasks/MyTask';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AddTasks></AddTasks>  
          <MyTask></MyTask>
        </div>
    );
};

export default Home;