import React from 'react';
import './NewClients.css';

export default function NewClients() {

    return (
        <div className='nc_container'>
            <div className='new-clients-div'>
                <b>New Clients - Shine On Counseling Policies</b>
            </div>
            <div className='fees'>
                <p className='intro-text'>
                    Some people see therapy as a relationship, some people call it work, others see it as a commitment, and some use it to get relief.
                    Regardless of how you want to describe your therapeutic process, the important thing is to celebrate that you're considering doing it. 
                    Shine On Counseling & Consulting offers an individualized approach, recognizing that each client comes in with their own needs.
                </p>
                <hr></hr>
                <h3>Emergencies: </h3>
                <p>
                    If you are having a medical or mental health emergency, or having thoughts of harming yourself or someone else, you should call 911 or proceed to the closest emergency room if you are able to safely do so.
                </p>
                <h3>Fees and Payment Information</h3>
                <p>
                    Our practice operates on a fee-for-service basis. Specific fees for our services are given over the phone. Payment for sessions is due at the time of appointment, unless we have made other arrangements ahead of time.  
                    We do not participate in any insurance network, including Medicaid and Medicare. This policy not only protects your privacy, but allows us greater flexibility in developing and maintaining a treatment plan with you.  
                    It also allows us to spend more time managing the clinical needs and concerns of our patients. We will provide a bill, which you can then submit to your insurance company for full or partial reimbursement, depending on your plan, upon request.  
                    We accept cash, debit cards, credit cards, and personal checks.  There is a $50 fee for returned checks. 
                </p>
                <h3>Cancellation Policy</h3>
                <p>
                    Cancellation without notice (no-show) or within 24-hours of appointment will result in the cost of the scheduled appointment.  
                    The associated fee must be paid prior to re-scheduling your appointment.
                </p>
                <h3>Confidentiality Notice:</h3>
                <p>We operate under HIPAA (Health Insurance Portability and Accountability Act) guidelines and patient confidentiality is important to us, because of the nature of what we do.  
                    Consequently, your health information will not (and cannot) be shared with an outside person, provider, or agency without your express and documented consent.  
                    However, there are times and circumstances in which exceptions must be made and some of your treatment information might be shared.  
                    This would include times when the clinician’s opinion is that there is a risk of harm to yourself or someone else, and in this case, steps will be taken (as is our legal requirement) to protect said persons.  
                    State law mandates that we notify the appropriate authorities in cases of reported physical or sexual abuse.  
                </p>
            </div>
        </div>
    );
}