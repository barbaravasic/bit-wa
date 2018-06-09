import React from 'react';

export const Form = () => {
    return (
        <form>
            <div className="container">
                <div className="row">
                    <div className="input-field col s12">
                        <h2 className="center-align">New Post</h2>
                        <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name"></label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label htmlFor="textarea1"></label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4 right">
                    <button className="waves-effect  btn-large #00acc1 cyan darken-3 ">Cancel</button>
                    <button className="waves-effect  btn-large #00acc1 cyan darken-3 right" >Save</button>
                    </div>
                </div>
            </div>

        </form>
    )
}