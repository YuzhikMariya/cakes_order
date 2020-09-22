import React from 'react';
import CakeInfo from './cakeInfo/cakeInfo';

function Admin(props) {

    let changFile = (e) => {
        props.onPhotoChange(e.target.files[0]);
    }

    let add = (e) => {
        e.preventDefault();
        props.onAdd();
        e.target.reset();
        
    }

    let changeTextArea = (e) => {
        props.onDescriptionChange(e.target.value);
    }

    return (
        <div class="content">
            <h1 class="content__header">Add new cake</h1>
            <form onSubmit={add} class="add_cake_form">
                <div class="cake_info">
                    <CakeInfo title="title" type="text" onChange={props.onTitleChange}/>
                    <CakeInfo title="price" type="number"  onChange={props.onPriceChange}/>
                    <CakeInfo title="time" type="time"  onChange={props.onTimeChange}/>
                    <div >
                        <div><label >Cake file:</label></div>
                        <input onChange={changFile}  type="file" accept="image/jpeg,image/png,image/jpg" required/>
                    </div> 
                    
                    <div class="cake_inf description">
                            <label for="description">Description:</label>
                            <textarea  onChange={changeTextArea} class="input_data" id="description" rows="5"></textarea>
                    </div>
                </div>
                    
                <div>
                    <button  className="btn" >Add</button>
                </div>
                    
            </form>

        </div>
    );
}

export default Admin;


