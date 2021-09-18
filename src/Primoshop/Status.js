import React, { Component } from "react";
class Status extends Component {
    state = {
        internet: " "
    }
    componentDidMount(){
        alert('SILAHKAN LIHAT KEBERUNTUNGAN! (Proses mount)')
    }
    ChangeStatus = () => {
        this.setState((state) => { 
            if (state.internet === "Anda ga bakal dapaet Bintang Lima disaat gacha") {
                return {internet : "Bakal dapet bintang lima semangat (in your dream)"}   
            } else {
                return {internet : "Anda ga bakal dapaet Bintang Lima disaat gacha"}                 
            }
        })
    }
  componentWillUnmount(){
        alert('ga kuat tutup aja ya (Proses Unmount)!')
    }
    render() {
        return (
            <div>  
             <h3>(Cek Status keberuntungan anda!)</h3>                       
                <p>cek status keberuntungan anda apakah anda akan mendapatkan bintang lima / tidak !!</p>  
                

                <button onClick={this.ChangeStatus}>cek status anda</button>
                <br />
                <p>{this.state.internet}</p>
            </div>
        );
    }
}
export default Status;