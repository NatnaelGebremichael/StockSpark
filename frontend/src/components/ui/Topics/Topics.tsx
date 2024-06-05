import './Topics.css'
import { bgElement1, TopicStat } from '../../../assets/index'

const Topics = () => {

    return (
        <section id="topics" className='black'>
            <div className='wrapper'>
                <h2>What Can you do</h2>
                <div className='content-container'>
                    <ul className='topics-list'>
                        <li>Products</li>
                        <li>Update Quantity</li>
                        <li>Update Sales</li>
                        <li>Generate Report</li>
                    </ul>

                    <div className='topic-image'>
                        <img src={TopicStat} alt="" />
                    </div>
                </div>
                <img src={bgElement1} className='bg-element-1' />
            </div>
        </section>
    )
}

export default Topics