import React, {Component} from 'react'
// import {Route, NavLink, Switch} from 'react-router-dom';



class Contact extends Component{
  constructor(){
    super()
    this.state={
      fullName:"",
      email: "",
      social: "",
      comment: "",
    }
  }
  // handleChange(){
  //   this.setState{
  //
  //   }
  // }

  render(){
    return(
      <div>
          <div className="contact">
            <h2>contact</h2>
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.341775346873!2d3.342225314771142!3d6.604381995223943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d7c33eb87b3%3A0xfc23c9556f669273!2sAlabian+Solutions+Limited!5e0!3m2!1sen!2sng!4v1549974042286"
                    width="700" height="450" frameborder="0" style={{border:"0"}} allowfullscreen>
                    </iframe>
                </div>

          <div className="contact-form">
              <form method="" action="" width="100%">
                  <label for="name">Name</label> <br/>
                  <input type="text" name="fullname" placeholder="Enter fullname" id="name"/>
                    <br/><br/>
                  <label for="Email">Email</label> <br/>
                  <input type="Email" name="Email" placeholder="Enter Email" id="Email"/>
                  <br/><br/>
                  <label for="">How did you hear about us</label><br/>
                  <select id="social">
                    <option value="facebook">facebook</option>
                    <option value="instagram">instagram</option>
                    <option value="Email">email</option>
                    <option value="friend">friend</option>
                    <option value="google">google</option>
                    <option value="flyer">flyer</option>
                  </select><br/><br/>

                  <label>Would you visit us again</label> <br/>
                  Yes<input type="radio" name="radio" value="Yes"/>&nbsp; &nbsp; &nbsp; &nbsp;
                  No<input type="radio" name="radio" value="no"/>&nbsp; &nbsp; &nbsp; &nbsp;<br/><br/>
                  <label for="comment">comment</label><br/>
                  <textarea name="comment" id="comment"></textarea><br/><br/>
                  <label>Sign me up for e-mail updates</label>
                  <input type="checkbox" name="signup"/><br/><br/>
                  <button type="submit">Submit</button>
                  </form>
                </div>
          </div>
      </div>
    )
  }
}

export default Contact
