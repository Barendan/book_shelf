import React, { Component } from 'react';
import { getBookWithReviewer } from '../../actions';
import { connect } from 'react-redux';


class BookView extends Component {

	componentWillMount() {
		this.props.dispatch(getBookWithReviewer(this.props.match.params.id))
	}

	renderBook = (books) => {
		books.book ?
			<div className="br_container">
				<div className="br_header">
					<h2>{books.book.name}</h2>
					<h5>{books.book.author}</h5>
					<div className="br_reviewer">
						<span>Review by:</span> {books.reviewer.name} {book.reviewer.lastname}
				</div>
				<div className="br_review">
					{books.book.review}
				</div>
			</div>
		:null
	}

	render() {
		let books = this.props.books;
		return (
			<div>
				book view
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		books:state.books
	}
}

export default connect(mapStateToProps)(BookView)