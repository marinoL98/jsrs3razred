import React , { Component } from 'react';



class Boja extends Component {

constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
      borderColor:""
    }
  }


  boxClick = (e) => {
    this.setState({
      bgColor: "red",
      borderColor:"blue"
     
    })
  }

  render(){
  return(
    <div className="boja">
        <br></br><br></br><br></br><br></br>
    <article className='experimentsHolder'>
    <h5>Mjenjanje Boja Component</h5>
    <br></br>
    <div className="boxClickCss" 
    style={{backgroundColor: this.state.bgColor ,borderColor: this.state.borderColor}}
    onClick={this.boxClick}><h4>Obojaj</h4></div>
    </article>
    </div>
  )
  }

}
export default Boja;
