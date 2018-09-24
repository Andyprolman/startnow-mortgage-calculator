import React from 'react';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      output: null,
    }
    this.changeValues=this.changeValues.bind(this);
    this.calculate=this.calculate.bind(this);
  }

changeValues(e){
  console.log(e.target);
  this.setState({
    [e.target.name]: e.target.value
  })
}

calculate(e){
  e.preventDefault();
  const p = this.state.balance;
  const r = (this.state.rate)/100/12;
  const n = (+(this.state.term)) * 12
  console.log(r*12);
  const m = p*(r * Math.pow((1 + r), n))/(Math.pow((1 + r), n) - 1);
  const amount = m.toFixed(2);


  this.setState({
    output: `$${amount} is your monthly payment.`
    

  })

  console.log('this is output: ', this.state.output)

}


  render() {
    console.log(this.state)

    var background = {
      backgroundColor: 'bisque',
    }

    var container = {
      padding: '0px 20px 100px 400px',
      backgroundColor: 'cadetblue',
      minHeight: '-webkit-fill-available',
    }

    var button = {
      margin: '50px 100px 200px 0px'
    }

    var output = {
      fontSize: '20pt',
    }

    return (
      <div style={background}>
        <div className='container' style={container}>
          <div className="row">
            <div className="col-md-5">
            <div id = 'title'>
              <h3>Mortgage Calculator</h3>
            </div>
            <form onSubmit={this.calculate}>
              <div className='form-group'>
                <label htmlFor='balance'>Loan Balance:</label>
                <input name='balance' type = 'number' className='form-control' id='balance' onChange={this.changeValues}/>
              </div>
              <div className='form-group'>
                <label htmlFor='rate'>Interest Rate (%):</label>
                <input type='number' name='rate' step='0.01' className='form-control' id='rate' onChange={this.changeValues}/>
              </div>
              <div className='form-group'>
                <label htmlFor='term'> Loan Term (Years)</label>
                <select name='term' className='form-control' id='term' onChange={this.changeValues}>
                  <option value='15'>15</option>
                  <option value='30'>30</option>
                </select>
                <div className='form-group'>
                  <button type='submit' name='submit' id='button' className='btn-primary btn-lg' style={button}> Calculate</button>
                </div>
                <div name='output' id='output' value={this.state.output} style={output}>
                {this.state.output}
                </div>
              </div>
            </form>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
