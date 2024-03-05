import "../CSS/ClientInfo.css"
import {useNavigate } from "react-router-dom"
const ClientInformation = () => {
    const navigate = useNavigate();

    const projection = ()=>{
        navigate('/ownerclient')
    }
    const selection = ()=>{
        navigate('/specific')
    }
    const join = ()=>{
        navigate('/divide')
    }
    const agg = ()=>{
        navigate('/aggregation')
    }
    const nested = ()=>{
        navigate('/nested')
    }
    return (
    <>
    <div id="clientInfo">
        <header>
            <h1>SQL Query Learning</h1>
            <p>Explore and Master Different SQL Queries</p>
        </header>

        <section>
            <h2>Learn Different Queries</h2>
            <p>Click on each query below to explore and understand its role in database management:</p>

            <ul>
                <li><a href="#projection">Projection Query</a>: Discover the power of selecting specific columns to display in your results.</li>
                <li><a href="#selection">Selection Query</a>: Explore the art of filtering data based on specified conditions.</li>
                <li><a href="#join">Join Query</a>: Learn how to combine data from multiple tables to gain valuable insights.</li>
                <li><a href="#aggregation">Aggregation Query</a>: Uncover the magic of summarizing and analyzing data for meaningful conclusions.</li>
                <li><a href="#nested">Nested Query</a>: Delve into the complexities of queries within queries for advanced data retrieval.</li>
                <li><a href="#delete">Delete Query</a>: Master the skill of removing unwanted records from your database.</li>
                <li><a href="#update">Update Query</a>: Understand how to modify existing data to keep your database up-to-date.</li>
            </ul>
        </section>
        <section id="projection">
            <h2>Projection Query</h2>
            <p>An essential query for selecting specific columns in a database table. It allows you to tailor your results by choosing only the information you need.</p>
            <button style={{ margin: '10px' }} onClick={projection} >VISUALISE</button>
        </section>

        <section id="selection">
            <h2>Selection Query</h2>
            <p>Master the art of filtering data with selection queries. Specify conditions to retrieve only the records that meet your criteria.</p>
            <button style={{ margin: '10px' }} onClick={selection} >VISUALISE</button>
        </section>

        <section id="join">
            <h2>Join Query</h2>
            <p>Explore the power of combining data from multiple tables. Join queries enable you to extract comprehensive insights by linking related information.</p>
            <button style={{ margin: '10px' }} onClick={join} >VISUALISE</button>
        </section>

        <section id="aggregation">
            <h2>Aggregation Query</h2>
            <p>Learn to summarize and analyze data with aggregation queries. These queries allow you to calculate totals, averages, and other aggregated values for informed decision-making.</p>
            <button style={{ margin: '10px' }} onClick={agg} >VISUALISE</button>
        </section>

        <section id="nested">
            <h2>Nested Query</h2>
            <p>Dive into the intricacies of nested queries, where you can embed one query within another. This advanced technique opens doors to more complex data retrieval scenarios.</p>
            <button style={{ margin: '10px' }} onClick={nested} >VISUALISE</button>
        </section>
    </div>
      </>
    )
  }
  export default ClientInformation