import React from 'react';
import './App.css';

// const View = () => <div style={{display: 'flex', justifyContent: 'center'}}>
  //{/* doesn't display contents; can't find how to online w/ search "react custom components" */}</div>;

export default class App extends React.Component {
  state = {checked1: false, checked2: false};

  render() {
    return ( <div>
      <header style={{position: 'absolute', left: 0, right: 0, margin: 'auto'}}>
        <p style={{textDecoration: 'underline', textUnderlinePosition: 'under',
                   paddingTop: 24, marginBottom: 18, fontSize: 24}}>
                   Code 3000</p>
       {/* <ul className='flex-center' style={{listStyle: 'none'}}>
         <li className='margin-right-9px'>HTML</li>
         <li className='margin-right-9px'>&bull;</li>
         <li className='margin-right-9px'>CSS</li>
         <li className='margin-right-9px'>&bull;</li>
         <li className='margin-right-9px'>JavaScript</li>
         <li className='margin-right-9px'>|</li>
         <li>Ruby</li>
       </ul> */}
      </header>
      {/* v-- For proper flow --v */}
      <header>
        <p style={{textDecoration: 'underline', textUnderlinePosition: 'under',
                   paddingTop: 24, marginBottom: 18, fontSize: 24, color: 'white'}}>
                   Code 3000</p>
      </header>
      <main>
        <section>
          <p className='flex-middle' style={{marginBottom: 12}}>
            <input type='checkbox' id='box-1' style={{marginRight: 9}}
                   onClick={() => this.setState({checked1: !this.state.checked1})}/>
            <a href='https://atom.io/' target='_onBlank'
               style={{textDecoration: 'none', color: 'white'}}
               onClick={() => document.getElementById('box-1').click()}>
               Download any text editor</a>
            <i className="fas fa-hand-pointer" style={{marginLeft: 9}}></i>
          </p>

          {this.state.checked1 ?
            <p className='flex-middle' style={{marginBottom: 12}}>
              {this.state.checked2 ?
                <input type='checkbox' id='box-2' style={{marginRight: 9}} defaultChecked
                       onClick={() => this.setState({checked2: !this.state.checked2})}/> :
                       <input type='checkbox' id='box-2' style={{marginRight: 9}}
                              onClick={() => this.setState({checked2: !this.state.checked2})}/>}
              <a href='' target='_onBlank'
                 style={{textDecoration: 'none', color: 'white'}}
                 onClick={() => document.getElementById('box-2').click()}>
                 2nd instruction</a>
              <i className="fas fa-hand-pointer" style={{marginLeft: 9}}></i>
            </p> : null}
        </section>

        {this.state.checked1 && this.state.checked2 ? <section>
          visible
        </section> : null}
      </main>
    </div> );
  }
}//how to (verbosely) restyle checkboxes: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox
