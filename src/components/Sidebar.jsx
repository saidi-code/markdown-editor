import React from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import delteIcon from '../assets/icon/icon2.svg'
export default function Sidebar(props) {
const {currentNote}=props
const handleDelBtn = () => {
    confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                     props.deleteNote()
                     onClose();
                }}
              >
                Yes, Delete it!
              </button>
            </div>
          );
        }
      });}
//     confirmAlert({
//       title: 'Are you sure',
//       message: 'You want to delete this file?',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () =>  props.deleteNote()
//         },
//         {
//           label: 'No',
//           onClick: () => alert('Click No')
//         }
//       ]
//     });
//   };
// const handleDelBtn = ()=>{
//     // console.log("delete btn Clicked")
//     let text;
//     if (confirm("Press a button!") == true) {
//       text = "You pressed OK!";
//      ()
//     } else {
//       text = "You canceled!";
//     }
//     // props.deleteNote
// }
// useEffect(
//    ()=>{
//         let delBtn = document.querySelector("#btn-delete")
//         function watchBtn(e){
//             // e.stopPropagation()
//             alert("btnClicked")
//             console.log(e.target)
//             console.log(delBtn)
//         }
//         delBtn.addEventListener("click",watchBtn)
           
        
//      return () =>{
//         delBtn.removeEventListener("click",watchBtn)
//     }
// },[currentNote.id])
const notesElement = props.notes.map((note)=>(
    <li
        className ={`note-item ${(currentNote.id === note.id )?"active-note":""}`}
        key={note.id}
        onClick={(e)=>{
            e.stopPropagation()
            props.currentId(note.id)
        }}
    >
        <span className='note-title'>
            {note.body.split('\n')[0]}
        </span>
        <span 
            className={`btn-item ${(currentNote.id === note.id )?"show-btn":""}`} 
             id={"btn-delete"}
             onClick={handleDelBtn}
        >
          <img src={delteIcon} alt="delete" className='delete-icon'/>
        </span>
    </li>
))
  return (

    <div className='container' >
        <div className="sidebar-grid">
            <div className='sidebar-top'>
                <h1>Note</h1>
                <button
                    className='btn btn-add-note'
                     onClick={props.addNote}
                >
                   &#43;
                </button>
            </div>
            {/* <hr className='.sash-vertical'/>  */}
            <ul className='note-item-container'>
                {notesElement}
            </ul>
        </div>
    </div>
  )
}
