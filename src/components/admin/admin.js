import React from 'react';
import CakeInfo from './cakeInfo/cakeInfo';

function Admin() {
    return (
        <div class="content">
            <h1 class="content__header">Add new cake</h1>
            <form class="add_cake_form">
                <div class="cake_info">
                    <CakeInfo title="title" type="text"/>
                    <CakeInfo title="price" type="number"/>
                    <CakeInfo title="photo" type="file"/>
                    <CakeInfo title="time" type="time"/>
                    <div class="cake_inf description">
                            <label for="description">Description:</label>
                            <textarea class="input_data" id="description" rows="5"></textarea>
                    </div>
                </div>
                    
                <div class="">
                    <input class="btn" type="submit" value="Add"/>
                </div>
                    
            </form>

        </div>
    );
}

export default Admin;




