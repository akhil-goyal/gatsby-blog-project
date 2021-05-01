import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo"

const siteLogo = "https://firebasestorage.googleapis.com/v0/b/web-dev-test-ed61b.appspot.com/o/images%2F7iEaGkvF8XftqOKPyLEG.jpg?alt=media&token=806491ff-3f06-46b5-be7c-865e26a57950";

const About = ({ location }) => {

    return (
        <Layout location={location}>
            <Seo title="About Us" />
            <div>
                <h1>About Us</h1>

                <img src={siteLogo} style={{ maxWidth: '100%' }} alt="Site Logo" />

                <div className="about-us">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of</p>
                </div>
            </div>
        </Layout>
    )
}

export default About;