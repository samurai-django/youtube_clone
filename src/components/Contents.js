import React from "react";
import './Contents.css'
import VideoCard from "./VideoCard";


function Contents({image, title, name, views, timestamp}){
    return (

        <div className="recommendedVideos">
            <h2>Recommended</h2>

            <div className="recommended__videos">
                <VideoCard
                    image="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg"
                    title="Become a Web Developer in 10 minutes"
                    name="yusuke yoshioka"
                    views="10K"
                    timestamp="2weeks" />
                <VideoCard
                    image="https://www.epicentrofestival.com/wp-content/uploads/2020/01/epicentrofestival-microsoft-sql-server-mysql-database-logo-tzml6b5x04-720x336.jpg"
                    title="MySql Tutorial for Beginners [Full Course]"
                    name="yusuke2"
                    views="1K"
                    timestamp="1 year" />

                <VideoCard
                    image="https://media-exp1.licdn.com/dms/image/C4D0BAQHH6Pam9DfgKg/company-logo_200_200/0?e=2159024400&v=beta&t=CjLPs0DonZyQBuKX4VWWIh7_PcL16ReOBFDFbbRW5ro"
                    title="-Python Deep Learning and Neural Networks"
                    name="yusuke3"
                    views="1K"
                    timestamp="2 years" />

                <VideoCard
                    image="https://miro.medium.com/max/800/1*N9r_AVMQm7HIZt3X6z7FuA.png"
                    title="Django Rest Framework Full Course For Beginner"
                    name="yusuke3"
                    views="1K"
                    timestamp="3 years" />

                 <VideoCard
                    image="data:image/jpeg;base64,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"
                    title="Fitness Together: workout"
                    name="yusuke yoshioka"
                    views="10K"
                    timestamp="2weeks" />
                <VideoCard
                    image="https://www.epicentrofestival.com/wp-content/uploads/2020/01/epicentrofestival-microsoft-sql-server-mysql-database-logo-tzml6b5x04-720x336.jpg"
                    title="MySql Tutorial for Beginners [Full Course]"
                    name="yusuke2"
                    views="1K"
                    timestamp="1 year" />

                <VideoCard
                    image="https://media-exp1.licdn.com/dms/image/C4D0BAQHH6Pam9DfgKg/company-logo_200_200/0?e=2159024400&v=beta&t=CjLPs0DonZyQBuKX4VWWIh7_PcL16ReOBFDFbbRW5ro"
                    title=" - Python Deep Learning and Neural Networks"
                    name="yusuke3"
                    views="1K"
                    timestamp="2 years" />

                <VideoCard
                    image="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/1790a008-96d6-11e6-8047-00163ed833e7/669733406/python-screenshot.png"
                    title="Django Rest Framework Full Course"
                    name="yusuke3"
                    views="1K"
                    timestamp="3 years" />


                <VideoCard
                    image="https://prtimes.jp/i/35903/10/resize/d35903-10-590589-0.jpg"
                    title="Best Work Ever : Real Workout"
                    name="yusuke3"
                    views="1K"
                    timestamp="3 years" />
                <VideoCard
                    image="https://miro.medium.com/max/800/1*N9r_AVMQm7HIZt3X6z7FuA.png"
                    title="Django Rest Framework Full Course"
                    name="yusuke3"
                    views="1K"
                    timestamp="3 years" />
                <VideoCard
                    image="https://miro.medium.com/max/800/1*N9r_AVMQm7HIZt3X6z7FuA.png"
                    title="Django Rest Framework Full Course"
                    name="yusuke3"
                    views="1K"
                    timestamp="3 years" />

            </div>
        </div>
    )
}

export default Contents;
