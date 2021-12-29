import React, { Component } from 'react'
import './App.css'
class createnote extends Component {
    constructor() {
        super();
        this.state = {
            note: [],
            id: 0
        }
    }
    render() {
        let add = () => {
            let x = {
                title: document.getElementById('title').value,
                content: document.getElementById('textarea').value,
                id: this.state.id
            }
            this.setState({
                note: [...this.state.note, x],
                id: this.state.id + 1
            }, () => {
                console.log(this.state.note);
            });
        }

        let delNote = (e) => {
            this.setState({
                note:this.state.note.filter(item => item.id!== e)
            }) 
            console.log(this.state.note);
        }
        return (
            <div>
                <div className='notesBlock'>
                    <input id='title' type="text" className='inputText' placeholder="Title"></input>
                    <textarea id='textarea' className='notesArea'></textarea>
                    <button className='addbtn' onClick={add}>Add</button>
                </div>
                <div className='container'>
                    {this.state.note.length >= 1 || this.state.note !=null ? this.state.note.map(eleme => <div className='elements' key={eleme.id}><span style={{ display: "block" }}><b>{eleme.title}</b></span><span style={{ marginTop: "20%" }}>{eleme.content}</span><button className='deletebtn' onClick={() => delNote(eleme.id)}>Delete</button></div>) : <p></p>}
                </div>
            </div>
        )
    }
}
export default createnote