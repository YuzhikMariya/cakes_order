import React from 'react';
import s from './admin.module.css';

function Admin(props) {

    let changPhoto = (e) => {
        props.onPhotoChange(e.target.files[0]);
    }

    let changeTitle = (e) => {
        props.onTitleChange(e.target.value);
    }

    let changeTime = (e) => {
        props.onTimeChange(e.target.value);
    }

    let add = (e) => {
        e.preventDefault();
        props.onAdd();
        e.target.reset();
        
    }

    let changeTextArea = (e) => {
        props.onDescriptionChange(e.target.value);
    }

    let changePrice = (e) => {
        props.onPriceChange(e.target.value);
    }

    return (
        <div class="content">
            <h1 class="content__header">Add new cake</h1>
            <form onSubmit={add}>
                <div class={s.cake_info}>
                    <div>
                        <label for="title">Cake title:</label>
                        <input class={s.title} onChange={changeTitle} className="input_data" id="title" type="text" maxLength="20" required/>
                    </div> 
                    <div >
                        <label for="price">Cake price:</label>
                        <input onChange={changePrice} className="input_data" id="price" type="number" min="0.01" step="0.01" required/>
                    </div> 
                    <div>
                        <label for="time">Cooking time:</label>
                        <input onChange={changeTime} className="input_data" id="time" type="time" required/>
                    </div> 
                    <div >
                        <div><label >Cake photo:</label></div>
                        <input onChange={changPhoto}  type="file" accept="image/jpeg,image/png,image/jpg" required/>
                    </div> 
                    <div class="cake_inf description">
                            <label for="description">Description:</label>
                            <textarea class={s.description} onChange={changeTextArea} class="input_data" id="description" rows="5"></textarea>
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


