import React from 'react'
import "./Search.scss"

const Search = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div className="col-lg-12">
                        <div className="form">
                            <div class="input-group mb-3 mt-5">
                                <input type="text" class="form-control outline rounded-0 py-2 px-4" placeholder="Movie name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary outline py-2 px-4 rounded-0 rounded-right text-light fw-bold" type="submit">Button</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Search