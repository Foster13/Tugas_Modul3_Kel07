import React, { Component } from "react";
class Isi extends Component {
    state = {
        isi: 0
    }
     componentDidMount(){
        alert('Tampilkan Top Up! (Proses mount)')
}
    tambahisi = () => {
        this.setState((state) => { return { isi: state.isi + 160 } })
    }
    kurangiisi = () => {
        this.setState((state) => { return { isi: state.isi - 160 } })
    }
    componentWillUnmount(){
        alert('Hide top up (Unmount)!')
    }
    render() {
        return (
            <div>
            <h3>(Ayo beli Primogem buat gacha !!!!!)</h3>
                <p>160 primogem = 1 kali pull</p>
                <p1>160 primogem = RP 5000 </p1>
                <p>berapa dapet pull ? jumlah bagi 160 dah.. ngitung dikit napa </p>
                <h4>Berapa Jumlah primogem yang mau diisi :{this.state.isi} </h4>
                
                <button onClick={this.tambahisi}>Tambah</button>
                <button onClick={this.kurangiisi}>Kurang</button>
                <br/>
                <p>{this.state.isi}</p>
            </div>
        );
    }
}
export default Isi;