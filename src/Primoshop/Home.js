import { Component } from "react";
import React from "react";
import Isi from "./Isi";
import Status from "./Status";

class Home extends Component {
    state = {
        komponen1: true,
        komponen2: true,
    }
      componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Gacha lah di Genshin Impact!`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('SELAMAT DATANG DI CIRCLE GACAHH :)');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Isi /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} TOP Up </button>
                <div style={{ border: "0.5px solid black" }}>
                </div>
                {this.state.komponen2 ? <Status /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} Menu Status</button>
            </div>
        );
    }
}
export default Home;