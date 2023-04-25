import { useState } from "react";

const FAQs = () => {
    const [open, setOpen] = useState(false);

    const faqs = [
        {
            id: 1,
            header: "How much does a Teams subscription cost?",
            body: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details."
        },
        {
            id: 2,
            header: "Do I still need to purchase licenses for the Mac app?",
            body: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details."
        },
        {
            id: 3,
            header: "What are the differences between Contributors and Viewers?",
            body: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details."
        },
        {
            id: 4,
            header: "How long does the free Teams subscription trial last?",
            body: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details."
        },
        {
            id: 5,
            header: "Will program for Teams replace volume licensing?",
            body: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details."
        }
    ];

    const toggleFAQs = (id) => {
        faqs.forEach(faq => {
            if(id === faq.id){
                setOpen(!open)
            }
        })
    }

    return ( 
        <section id="faqs" className="faqs">
            <div className="faqs_left">
                <div className="faqs_left_top">
                    <div className="header">
                        <p>Faqs</p>
                        <h2>Common Questions</h2>
                    </div>

                    <p>The online form also provides links to a set of frequently asked questions, other information materials related to the financial disclosure programme.</p>
                </div>

                <div className="faqs_left_bottom">
                    { faqs.map(faq => (
                        <article key={faq.id} className="faq">
                            <div className="header">
                                <span>{ faq.header }</span>
                                { open ? 
                                    <img src="./images/i_minus.png" alt="minus icon" onClick={() => toggleFAQs(faq.id)} />
                                    :
                                    <img src="./images/i_plus.png" alt="plus icon" onClick={() => toggleFAQs(faq.id)} />
                                }
                            </div>
                            
                            {open ? <p>{ faq.body }</p> : null}
                        </article>
                    )) }
                </div>
            </div>


            <div className="faqs_right">
                <img src="./images/Illustration_5.png" alt="FAQs image" />
            </div>
        </section>
     );
}
 
export default FAQs;