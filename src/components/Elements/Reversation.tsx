import React from 'react';

const Component = ({ ...props }) => {
    return (
        <div className="pattern_2">
            <div className="container margin_120_100 pb-0">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center d-none d-lg-block" data-cue="slideInUp">
                        <img src="/img/chef.png" width="400" height="733" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-8" data-cue="slideInUp">
                        <div className="main_title">
                            <span><em></em></span>
                            <h2>Reserve a table</h2>
                            <p>or Call us at 0344 32423453</p>
                        </div>
                        <div id="wizard_container">
                            <form id="wrapped" method="POST">
                                <input id="website" name="website" type="text" defaultValue="" />

                                <div id="middle-wizard">
                                    <div className="step">
                                        <h3 className="main_question"><strong>1/3</strong> Please Select a date</h3>
                                        <div className="form-group">
                                            <input type="hidden" name="datepicker_field" id="datepicker_field" className="required" />
                                        </div>
                                        <div id="DatePicker"></div>
                                    </div>

                                    <div className="step">
                                        <h3 className="main_question"><strong>2/3</strong> Select time and guests</h3>
                                        <div className="step_wrapper">
                                            <h4>Time</h4>
                                            <div className="radio_select add_bottom_15">
                                                <ul>
                                                    <li>
                                                        <input type="radio" id="time_1" name="time" defaultValue="12.00am"
                                                            className="required" />
                                                        <label htmlFor="time_1">12.00</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="time_2" name="time" defaultValue="12.30pm"
                                                            className="required" />
                                                        <label htmlFor="time_2">12.30</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="time_3" name="time" defaultValue="1.00pm"
                                                            className="required" />
                                                        <label htmlFor="time_3">1.00</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="time_4" name="time" defaultValue="1.30pm"
                                                            className="required" />
                                                        <label htmlFor="time_4">1.30</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="time_5" name="time" defaultValue="08.00pm"
                                                            className="required" />
                                                        <label htmlFor="time_5">8.00</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="time_6" name="time" defaultValue="08.30pm"
                                                            className="required" />
                                                        <label htmlFor="time_6">8.30</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="time_7" name="time" defaultValue="09.00pm"
                                                            className="required" />
                                                        <label htmlFor="time_7">9.00</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="time_8" name="time" defaultValue="09.30pm"
                                                            className="required" />
                                                        <label htmlFor="time_8">9.30</label>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                        <div className="step_wrapper">
                                            <h4>How many people?</h4>
                                            <div className="radio_select">
                                                <ul>
                                                    <li>
                                                        <input type="radio" id="people_1" name="people" defaultValue="1"
                                                            className="required" />
                                                        <label htmlFor="people_1">1</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="people_2" name="people" defaultValue="2"
                                                            className="required" />
                                                        <label htmlFor="people_2">2</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="people_3" name="people" defaultValue="3"
                                                            className="required" />
                                                        <label htmlFor="people_3">3</label>
                                                    </li>
                                                    <li>
                                                        <input type="radio" id="people_4" name="people" defaultValue="4"
                                                            className="required" />
                                                        <label htmlFor="people_4">4</label>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="submit step">
                                        <h3 className="main_question"><strong>3/3</strong> Please fill with your details
                                        </h3>
                                        <div className="form-group">
                                            <input type="text" name="name_reserve" className="form-control required"
                                                placeholder="First and Last Name" />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" name="email_reserve"
                                                        className="form-control required" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name="telephone_reserve"
                                                        className="form-control required" placeholder="Your Telephone" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <textarea className="form-control" name="opt_message_reserve"
                                                placeholder="Please provide any additional info"></textarea>
                                        </div>
                                        <div className="form-group terms">
                                            <label className="container_check">Please accept our <a href="#"
                                                data-toggle="modal" data-target="#terms-txt">Terms and
                                                conditions</a>
                                                <input type="checkbox" name="terms" defaultValue="Yes" className="required" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>

                                <div id="bottom-wizard">
                                    <button type="button" name="backward" className="backward">Prev</button>
                                    <button type="button" name="forward" className="forward">Next</button>
                                    <button type="submit" name="process" className="submit">Submit</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
};

export default Component;
