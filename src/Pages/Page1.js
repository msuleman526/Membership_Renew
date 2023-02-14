
import { Button, DatePicker, Form, Input } from 'antd';
import { useState } from 'react';
import '../PageOne.css';

function Page1() {

  const [step, setStep] = useState(0)

  let onFinish = () => {
     setStep(1)
  }  

  let onFinish2 = () => {
    setStep(3)
  }
  
  let onSecondPageClick = () => {
    setStep(2)
  }

  return (
    <div
        className="__content_editor __solid_style snipcss-fUW7o"
        style={{
            marginTop: "0px",
            marginBottom: "0px",
            paddingTop: "0px",
            paddingBottom: "0px",
            backgroundColor: "#ffffff",
        }}
        >
        <div className="row __reduce_max_width">
            <div
            className=" columns large-12 medium-12 small-12 "
            style={{
                backgroundColor: "transparent",
                marginTop: "0px",
                marginBottom: "0px",
                paddingTop: "70px",
                paddingBottom: "50px",
            }}
            >
            <p style={{ textAlign: "center" }}>
                Renew your membership with us to continue taking advantage of exclusive
                member benefits and rewards.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <section id="membership">
                <div id="renew-membership" className="__form_wrapper">
                <div id="renew-membership-form" style={{display: (step == 0) ? 'block' : 'none'}}>
                    <div className="__renew_form">
                    <div className="row align-center">
                        <div className="columns  large-6 medium-7 small-11">
                        <h3>Renew Your Membership</h3>
                        <label className="vertical__space">
                            Firstly, let’s check the status of your Wests Group
                            Macarthur membership.
                        </label>

                        <Form
                            name="basic"
                            layout='vertical'
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                               style={{marginTop: '8px'}}
                                label="Membership No:"
                                name="username"
                                rules={[
                                    {
                                    required: false,
                                    },
                                ]}
                                >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                style={{marginTop: '-8px'}}
                                label="Date of Birth:"
                                name="username"
                                rules={[
                                    {
                                    required: false,
                                    },
                                ]}
                                >
                                <DatePicker style={{width: '100%'}}/>
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                Next
                            </Button>
                        </Form>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="membership-profile" style={{display: (step == 1) ? 'block' : 'none'}}>
                    <div className="__profile_detail">
                    <div className="row align-center">
                        <div className="columns large-8 medium-8 small-11">
                        <h3>Membership Status</h3>
                        <label className="vertical__space"></label>
                        <label className="vertical__space">
                            Your membership is still valid to undefined, we hope to see
                            you at the Club again soon.
                        </label>
                        <br />
                        <div className="__custom_success margin-vertical-2">
                            <h5 className="aligncenter">
                            <img src="http://54.206.21.172/wp-content/uploads/2021/10/check-mark-1.png" />
                            Your wests membership will expire on 25 Oct, 2022.
                            </h5>
                        </div>
                        <div className="callout secondary">
                            <div className="row align-justify __space_bottom">
                            <div className="columns large-6 medium-6 small-12">
                                <div className="__cf_fieldleft">
                                <label style={{display: 'inline-flex'}}>Name: <div style={{color: 'blue', marginTop: '1px', marginLeft: '7px'}}>Muhammad Suleman</div></label>
                                </div>
                            </div>
                            <div className="columns large-6 medium-6 small-12">
                                <div className="__cf_fieldright">
                                <label style={{display: 'inline-flex'}}>Membership No: <div style={{color: 'blue', marginTop: '1px', marginLeft: '7px'}}>013144</div></label>
                                <p className="__profile_value"></p>
                                </div>
                            </div>
                            </div>
                            <div className="row align-justify __space_bottom">
                            <div className="columns large-6 medium-6 small-12">
                                <div className="__cf_fieldleft">
                                <label style={{display: 'inline-flex'}}>Email: <div style={{color: 'blue', marginTop: '1px', marginLeft: '7px'}}>msuleman526@gmail.com</div></label>
                                <p className="__profile_value"></p>
                                </div>
                            </div>
                            <div className="columns large-6 medium-6 small-12">
                                <div className="__cf_fieldleft">
                                <label style={{display: 'inline-flex'}}>Phone No: <div style={{color: 'blue', marginTop: '1px', marginLeft: '7px'}}>+923165282767</div></label>
                                <p className="__profile_value"></p>
                                </div>
                            </div>
                            </div>
                            <div className="row align-justify __space_bottom">
                            <div className="columns large-6 medium-6 small-12">
                                <div className="__cf_fieldright">
                                <label style={{display: 'inline-flex'}}>Creation Date: <div style={{color: 'blue', marginTop: '1px', marginLeft: '7px'}}>25 Oct, 2022</div></label>
                                </div>
                            </div>
                            <div className="columns large-6 medium-6 small-12">
                                <div className="__cf_fieldleft">
                                <label style={{display: 'inline-flex'}}>Date of birth: <div style={{color: 'blue', marginTop: '1px', marginLeft: '7px'}}>25 Oct, 2022</div></label>
                                </div>
                            </div>
                            </div>
                            <div className="row align-justify">
                            <div className="columns large-6 medium-6 small-12">
                                <div className="__cf_fieldright">
                                <label style={{display: 'inline-flex'}}>Expiry Date: <div style={{color: 'blue', marginTop: '1px', marginLeft: '7px'}}>25 Oct, 2022</div></label>
                                </div>
                            </div>
                            </div>
                        </div>
                        <Button type="primary" onClick={onSecondPageClick}>
                                Yes Continue
                        </Button>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="membership-confirmation" style={{display: (step == 2) ? 'block' : 'none'}}>
                    <div className="__renew_form">
                    <div className="row align-center">
                        <div className="columns  large-6 medium-6 small-11">
                        <h3>Verification</h3>
                        <label>
                            Enter the verification code we sent to . If you didn't get
                            it, we can
                            <a style={{ textDecoration: "underline" }}> resend </a>
                            the code
                        </label>
                            <Form
                                name="basic"
                                layout='vertical'
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                style={{
                                    maxWidth: 600,
                                }}
                                onFinish={onFinish2}
                                autoComplete="off"
                            >
                                <Form.Item
                                style={{marginTop: '8px'}}
                                    label="Confimation Code:"
                                    name="username"
                                    rules={[
                                        {
                                        required: false,
                                        },
                                    ]}
                                    >
                                    <Input />
                                </Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Renew
                                </Button>
                            </Form>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="membership-form" style={{display: (step == 3) ? 'block' : 'none'}}>
                    <h3>
                    <div className="__membership_title">
                        <span className="__underline">MEMBERSHIP DETAILS</span>
                        <div className="__membership_edit">
                        <img src="http://54.206.21.172/wp-content/uploads/2021/10/Vectoredit-1.png" />
                        <span>Edit</span>
                        </div>
                    </div>
                    </h3>
                    <div className="__custom_form">
                    <div className="row">
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>
                            Membership Number
                            <span>*</span>
                            </label>
                            <Input />
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field __field_select">
                            <label>
                            Membership Type
                            <span>*</span>
                            </label>
                            <span>
                            <Input />
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <br />
                    <h3>
                    <div className="__membership_title">
                        <span className="__underline">PERSONAL DETAILS</span>
                        <div className="__membership_edit">
                        <img src="http://54.206.21.172/wp-content/uploads/2021/10/Vectoredit-1.png" />
                        <span>Edit</span>
                        </div>
                    </div>
                    </h3>
                    <div className="__custom_form">
                    <div className="row">
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>
                            Given Name
                            <span>*</span>
                            </label>
                            <Input/>
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>
                            Surname
                            <span>*</span>
                            </label>
                            <Input/>
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field __field_date">
                            <label>
                            Date of Birth
                            <span>*</span>
                            </label>
                            <DatePicker style={{width: '100%'}}/>
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field __field_radio" style={{marginTop: '20px'}}>
                            <label>
                            Gender
                            <span>*</span>
                            </label>
                            <span className="wpcf7-list-item">
                            <input
                                type="radio"
                                defaultValue="Male"
                                readOnly="readonly"
                            />
                            <span>Male</span>
                            </span>
                            <span className="wpcf7-list-item">
                            <input
                                type="radio"
                                defaultValue="Female"
                                readOnly="readonly"
                            />
                            <span>Female</span>
                            </span>
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>
                            Occupation
                            <span>*</span>
                            </label>
                            <Input/>
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>Language Spoken</label>
                            <Input/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <br />
                    <h3>
                    <div className="__membership_title">
                        <span className="__underline">CONTACT DETAILS</span>
                        <div className="__membership_edit">
                        <img src="http://54.206.21.172/wp-content/uploads/2021/10/Vectoredit-1.png" />
                        <span>Edit</span>
                        </div>
                    </div>
                    </h3>
                    <div className="__custom_form">
                    <div className="row">
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>Home Phone</label>
                            <Input />
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>
                            Mobile
                            <span>*</span>
                            </label>
                            <Input />
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>
                            Email
                            <span>*</span>
                            </label>
                            <Input />
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <br />
                    <h3>
                    <div className="__membership_title">
                        <span className="__underline">RESIDENTIAL ADDRESS</span>
                        <div className="__membership_edit">
                        <img src="http://54.206.21.172/wp-content/uploads/2021/10/Vectoredit-1.png" />
                        <span>Edit</span>
                        </div>
                    </div>
                    </h3>
                    <div className="__custom_form">
                    <div className="row">
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>
                            Street Address
                            <span>*</span>
                            </label>
                            <Input/>
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>
                            Suburb
                            <span>*</span>
                            </label>
                            <Input/>
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>
                            State
                            <span>*</span>
                            </label>
                            <Input/>
                        </div>
                        </div>
                        <div className="columns medium-6 small-12">
                        <div className="__cf_field">
                            <label>
                            Postcode
                            <span>*</span>
                            </label>
                            <Input/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <span className="wpcf7-list-item">
                    <input type="checkbox" />
                    <span>same as mailing</span>
                    </span>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <h3>
                    <div className="__membership_title">
                        <span className="__underline">COMMUNICATIONS</span>
                        <div className="__membership_edit">
                        <img src="http://54.206.21.172/wp-content/uploads/2021/10/Vectoredit-1.png" />
                        <span>Edit</span>
                        </div>
                    </div>
                    </h3>
                    <div className="__custom_form">
                    <div className="row">
                        <div className="columns small-12">
                        <div className="__cf_field __field_radio">
                            <label>
                            Do you consent to auto-renewing if you have sufficient
                            membership points?
                            <span>*</span>
                            </label>
                            <span className="wpcf7-list-item">
                            <input type="radio" defaultValue="Yes" />
                            <span>Yes</span>
                            </span>
                            <span className="wpcf7-list-item">
                            <input type="radio" defaultValue="No" />
                            <span>No</span>
                            </span>
                        </div>
                        </div>
                        <div className="columns small-12">
                        <div className="__cf_field __field_radio">
                            <label>
                            Do you wish to receive the AGM by mail?
                            <span>*</span>
                            </label>
                            <span className="wpcf7-list-item">
                            <input type="radio" defaultValue="Yes" />
                            <span>Yes</span>
                            </span>
                            <span className="wpcf7-list-item">
                            <input type="radio" defaultValue="No" />
                            <span>No</span>
                            </span>
                        </div>
                        </div>
                        <div className="columns small-12">
                        <div className="__cf_field __field_radio">
                            <label>
                            Is Wests Tigers your favourite team?
                            <span>*</span>
                            </label>
                            <span className="wpcf7-list-item">
                            <input type="radio" defaultValue="Yes" />
                            <span>Yes</span>
                            </span>
                            <span className="wpcf7-list-item">
                            <input type="radio" defaultValue="No" />
                            <span>No</span>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <br />
                    <h3>
                    <span className="__underline">PRIVACY STATEMENT</span>
                    </h3>
                    <div className="__custom_form">
                    <div className="row">
                        <div className="columns small-12">
                        <div className="__cf_field __field_radio">
                            <label>
                            I hereby agree to abide by the Constitution and Club
                            By-Laws of Western Suburbs League Club (Campbelltown) Ltd
                            and its associated Clubs.
                            <br />
                            <br />
                            Personal information provided in this form will be used to
                            process your membership application. You have the right to
                            access and correct any information.
                            <br />
                            <br />
                            The Club will not disclose your personal information to
                            third parties without your written consent, or unless
                            required by law.
                            <br />
                            <br />
                            By submitting this application I acknowledge that I am
                            consenting to receive marketing materials from the Club.
                            </label>
                            <br />
                            <input type="checkbox" />
                            <span>
                            I Agree
                            <span style={{ color: "rgb(204, 75, 55)" }}>*</span>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="__primary_btn aligncenter">
                    <button>PROCEED TO PAYMENT</button>
                    </div>
                </div>
                <div id="payment-form" style={{ display: "none" }}>
                    <h3>
                    <span className="__underline">PURCHASE THE MEMBERSHIP</span>
                    </h3>
                    <div className="__member_info">
                    <div className="row">
                        <div className="columns medium-4 small-12">
                        <label>
                            <strong>Membership Period:</strong>
                        </label>
                        </div>
                        <div className="columns medium-8 small-12">
                        <p>5 YEARS - $20</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="columns medium-4 small-12">
                        <label>
                            <strong>Full Name:</strong>
                        </label>
                        </div>
                        <div className="columns medium-8 small-12">
                        <p></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="columns medium-4 small-12">
                        <label>
                            <strong>E-Mail Address:</strong>
                        </label>
                        </div>
                        <div className="columns medium-8 small-12">
                        <p></p>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <h3 className="__card_title">
                    <span className="__underline">CARD CREDENTIALS</span>
                    </h3>
                    <form
                    action="/charge"
                    method="post"
                    id="payment-form"
                    className="form"
                    >
                    <div className="__card_info">
                        <div id="card-element"></div>
                    </div>
                    <div className="__card_info __primary_btn aligncenter __payment_btn">
                        <button>PAY BY CARD</button>
                        <button disabled="disabled" className="tooltip">
                        PAY BY POINTS
                        <span className="tooltiptext">
                            You don't have enough balance points.
                        </span>
                        </button>
                    </div>
                    </form>
                    <p className="red-text">
                    You only have undefined points available.
                    </p>
                </div>
                <div id="thankyou-page" style={{ display: "none" }}>
                    <h3>
                    <span className="__underline">THANK YOU!!!!</span>
                    </h3>
                    <h4>
                    Congratulations
                    <span>!</span>
                    Your Membership has been renewed
                    </h4>
                    <div className="row">
                    <div className="column">
                        <p>
                        Your Order ID is
                        <strong>0</strong>
                        </p>
                        <br />
                        <div className="__ty_error">
                        <div className="__ty_icon"></div>
                        <p className="__ty_msg">
                            Sorry, there is something wrong in our system.
                        </p>
                        <p>
                            We couldn't send the confirmation email.
                            <br />
                            <br />
                            Please call us on
                            <strong>
                            <a href="tel:"></a>
                            </strong>
                            or send us an email to
                            <strong>
                            <a href="mailto:"></a>
                            </strong>
                            with your Name, Membership Number ( for renewal request )
                            and Order ID for us to process your application.
                            <br />
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        </div>
        </div>

  );
}

export default Page1;
