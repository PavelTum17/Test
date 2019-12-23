import React, { Component } from "react";
import "./App.css";



//localStorage.setItem('Заметка1', "Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first Some text from first ");
//localStorage.setItem('Заметка2', "Nevermind");
//localStorage.setItem('Заметка3', "Brainlag");
//localStorage.setItem('Заметка4', "Finally");

class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false) return null;

    return (
      <div>
        <div className="modal">{this.props.children}</div>
        <div className="bg" onClick={e => this.close(e)} />
      </div>
    );
  }

  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}

class WeatherDisplay extends Component {
	constructor() {
		super();
		this.state = {
		activePlace: 0,
		isModalOpen: false
	};
	}
	openModal() {
    this.setState({ isModalOpen: true });
	}

	closeModal() {
    this.setState({ isModalOpen: false });
	}
	
	saveData(){
		var head = document.getElementById('head');
		var telo = document.getElementById('telo');
		localStorage.setItem(head.value,telo.value);
		this.setState({activePlace: 0});
	}
	render() {
		return (
			<div>
				<button className = "redact"> Редактировать </button>
				<button className = "redactDel" onClick = { (event) => {localStorage.removeItem(localStorage.key(localStorage.length-this.props.pos-1));
					this.setState({activePlace : 0})}}> Удалить </button>
				<h1 >{this.props.zip}</h1>
				<p >{this.props.zip1}</p>
			</div>
		);
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
		activePlace: 0,
		isModalOpen: false
	};
	}
	openModal() {
    this.setState({ isModalOpen: true });
	}

	closeModal() {
    this.setState({ isModalOpen: false });
	}
	
	saveData(){
		var head = document.getElementById('head');
		var telo = document.getElementById('telo');
		localStorage.setItem(head.value,telo.value);
		this.setState({activePlace: 0});
}
	render() {
		const activePlace = this.state.activePlace;
		var list = [];
        for (var i = 0; i < localStorage.length; i++) {
            list.push(<a href="#" className="butt" id = {i} key={i} eventkey={i} onClick={(event)=> { 
								this.setState({ activePlace: event.currentTarget.id });
						}}>
								<p>{localStorage.key(localStorage.length - i - 1)}</p>
								<p>{localStorage.getItem(localStorage.key(localStorage.length - i - 1)).slice(0,25)}...</p>
							</a>
            )
        }
		return (
		<div>
			<div className = "main">
				<div className = "twoCol">
					<div className = "FirstCol">
						<button className = "adding" onClick={() => this.openModal()}>+Заметка </button>
						<Modal
							isOpen={this.state.isModalOpen}
						>
						<textarea id="head">Заголовок</textarea>
						<textarea id="telo">Текст</textarea>
						<button className = "access" onClick={() => this.saveData()}> Добавить </button>
						<button className = "break" onClick={() => this.closeModal()}> Отменить </button>
						</Modal>
					<div>{list}</div>
					</div>
					<div className = "SecCol">
						<WeatherDisplay 
						zip={localStorage.key(localStorage.length - activePlace - 1)} 
						zip1={localStorage.getItem(localStorage.key(localStorage.length - activePlace - 1))}
						pos = {activePlace}
						/>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default App;
