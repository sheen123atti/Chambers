import React from 'react';
import './FAQ.css';

export default function FAQ() {
    return (
        <div className='FAQContainer'>
            <div className='FAQHeading'>
                Frequently Asked Questions
            </div>
            <div className='FAQQuestion'>
                <details className="FAQ-item">
                    <summary>Are there Any Tax Benefits For Non-Resident Indians buying properties?</summary>
                    <p>No tax benefits are available for NRI's unless you file your returns and subsequently become eligible to avail the tax benefits as mentioned under Home Loan FAQ's</p>
                </details>
                <details className="FAQ-item">
                    <summary>When is the sale of a residential property formalized?</summary>
                    <p>The sale of a residential property is said to have been formalized if the seller has received the entire consideration amount, registration of the documents has been carried out and actual possession of the property has been granted to the buyer</p>
                </details>
                <details className="FAQ-item">
                    <summary>What kind of properties are listed on your website?</summary>
                    <p>e list a range of residential real estate properties including apartments, villas and plots through our web and mobile platform. Our listings include everything from new, resale, under construction and upcoming properties.</p>
                </details>
                <details className="FAQ-item">
                    <summary>Why should I choose Chambers?</summary>
                    <p>Our commitment towards assisting people in their home buying process has been encouraged with generous investments from investors</p>
                </details>
                <details className="FAQ-item">
                    <summary>Is there a procedure to be completed or forms to be filled up on execution of the Sale Deed or Transfer Document</summary>
                    <p>Yes. But the procedure and forms may vary from state to state depending on the location of the property. Every state in India has formulated its own set of forms under the registration rules. These forms are to be filled up and filed at the time of the registration of Sale Deed/Transfer Deed.
                        Under the Income Tax Act and rules for a sale transaction, it is mandatory for the buyer and seller to provide their PAN card number and in the event of sale, either the seller and/or the buyer would need to fill up Form 60 of the Income Tax.
                        If the buyer or the seller is a Non-Resident Indian (NRI) not assessed for t axes in India, the person would not need to file Form 60 of the Income Tax..</p>
                </details>
            </div>
        </div>
    )
}
