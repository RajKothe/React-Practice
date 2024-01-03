import React from 'react';
import ReactDOM  from 'react-dom';
import './App.css';
import './index.css';
import './Login.css';
import OtherRoot from './components/Portal';
import Count from './components/Count';
import Hello from './components/Helloworld';
import BGImage from './components/BackgroundImage';
import SlotMachine from './components/SlotMachine';
import UsedEffect from './components/UsedEffect';
import CounterUseState_Effect from './components/UseState_Effect';
import ColorState from './components/UseStateColorChange';
import RenderingMap from './components/RenderingListMap';
import Welcome from './components/ClassComponent';
// import PropsDemo from './components/Props';
import PropsOne from './components/PropsOne';
import State from './components/State';
import CountUsingClass from './components/CountUsingClass';
import EventHandling from './components/EventHandling';
import ConditionalRendering from './components/ConditionalRendering';
import Login from './components/Loginpage';
import useRef from './components/UseRef';
import Controlled from './components/Controlled';
import Uncontrolled from './components/Uncontrolled';
import Router from './components/Router';
import GenerateRandomNumber from './components/EvenOdd';
import ParentComponent from './components/ParentComponent';
import ListFormat from './components/ListFormat';
import Axiosdata from './components/AxiosData';
import Componentdidmount from './components/ComponentDidMount';
import Componentdidupdate from './components/ComponentDidUpdate';
import Componentshouldupdate from './components/ShouldComponentUpdate';
import ComponentWillUnmount from './components/ComponentWillUnmount';



function App() {
  return (
    <div>
    <PropsOne />
   <Componentdidmount />
   <Componentdidupdate />
   <Componentshouldupdate />
   <ComponentWillUnmount />
    <ParentComponent />
    <ListFormat />
     <OtherRoot />
     <GenerateRandomNumber />
     <Hello />
     <Router />
     <Controlled />
     <Uncontrolled />
     <ConditionalRendering />
     <Welcome FirstName="Saish" LastName="Kothe" />
     {/* <PropsDemo FirstName="Raj" LastName="Kothe"  /> */}
     
     <useRef />
     <State />
     <EventHandling />
     <CountUsingClass />
     <RenderingMap />
     <ColorState />
      <UsedEffect />   
      <Count />
      <CounterUseState_Effect />
      <BGImage />
      <SlotMachine />    
      <Login />
      <Axiosdata />
    </div>
   
  );
}

export default App;
