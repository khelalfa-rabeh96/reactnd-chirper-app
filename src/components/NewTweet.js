import React, { Component } from 'react'

class NewTweet extends Component{
	state = {
		text: ''
	}
	
	handleChange = (e) => {
		const text = e.target.value
		this.setState(() => ({
			text
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const {text} = this.state

		// todo: Add tweet to Store

		console.log('New Tweet: ', text)
		this.setState(() => ({
			text: ''
		}))
	}

	render(){

		const {text} = this.state
		const tweetLeft = 280 - text.length

		{/* todo: Redirect to / if submited */}
		
		return(
			<div >
		       <h3 className="center">Component new tweet</h3>
      		   <form 
      		   	className="new-tweet" 
      		   	onSubmit={this.handleSubmit}>
      		   	  <textarea 
      		   	  		placeholder="What's happening"
      		   	  		value={text}
      		   	  		onChange={this.handleChange}
      		   	  		className="textarea"
      		   	  		maxLength={280}>
  		   	  	   </textarea>
  		   	  	   {tweetLeft <= 100 && (
  		   	  	   		<div className="text-length">
  		   	  	   		  {tweetLeft}
  		   	  	   		</div>
  		   	  	   	)}
  		   	  	   <button 
  		   	  	   		className="btn"
  		   	  	   		type="submit"
  		   	  	   		disabled={text.trim() === ''}
  		   	  	   >Submit</button>
      		   	</form>
      		</div>
			)
	}
}

export default NewTweet;
