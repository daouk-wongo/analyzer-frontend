import React, { useState  } from 'react';
import './App.css';
import utf8 from 'utf8';

function App() {
  const [tickers, setTickers] = useState("");
  const [weights, setWeights] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [risk_free_rate, setRiskFreeRate] = useState("");
  const [benchmark, setBenchmark] = useState("");
  const [mar, setMar] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("")

  const showData = (data) => {
    return `
      Max Drawdown: ${data["Max Drawdown"]}

      Calmar: ${data["Calmar"]}

      Average Daily Return: ${data["Average Daily Return"]}

      Average Daily STD: ${data["Average Daily STD"]}

      Average Daily Sharpe: ${data["Average Daily Sharpe"]}

      Tracking Error: ${data["Tracking Error"]}

      Information Ratio: ${data["Information Ratio"]}

      Alpha: ${data["Alpha"]}

      Beta: ${data["Beta"]}

      Downside Deviation: ${data["Downside Deviation"]}

      Sortino: ${data["Sortino"]}

      VAR 90: ${data["VAR 90"]}

      VAR 95: ${data["VAR 95"]}

      VAR 99: ${data["VAR 99"]}

      Monte Carlo VaR at 95.0% confidence level: ${data["Monte Carlo VaR at 95.0% confidence level"]}

      Cov: ${data["Cov"]}

      Corr: ${data["Corr"]}
      `
  };

  const handleGetRequest = async (e) => {
    setImage("")
    e.preventDefault();
    console.log("sending request")
    setMessage("sending request")
    await fetch("https://b4tje8352f.execute-api.us-west-2.amazonaws.com/test/v1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },
      body: JSON.stringify({
        tickers: tickers.split(" "),
        weights: weights.split(" ").map((x) => parseFloat(x)),
        start_date: start_date,
        end_date: end_date,
        risk_free_rate: parseFloat(risk_free_rate),
        benchmark: benchmark.split(" "),
        mar: parseFloat(mar)
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(showData(data));
        setImage(utf8.encode(data["Plot"]))
      })
      .catch((err) => {
        console.log(err.message);
        setMessage(err.message);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Analyzer</h1>
        <div class="row">
          <div class="column">
            <form onSubmit={handleGetRequest}>
              <label htmlFor="tickers">Tickers:</label><br />
              <input
                type="text"
                id="tickers"
                value={tickers}
                onChange={(e) => setTickers(e.target.value)}
                placeholder="separate tickers with spaces" /><br />
              <label htmlFor="weights">Weights:</label><br />
              <input
                type="text"
                id="weights"
                value={weights}
                onChange={(e) => setWeights(e.target.value)}
                placeholder="separate weights with spaces" /><br />
              <label htmlFor="start_date">Start Date:</label><br />
              <input
                type="text"
                id="start_date"
                value={start_date}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="yyyy-mm-dd" /><br />
              <label htmlFor="end_date">End Date:</label><br />
              <input
                type="text"
                id="end_date"
                value={end_date}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="yyyy-mm-dd" /><br />
              <label htmlFor="risk_free_rate">Risk-free Rate:</label><br />
              <input
                type="text"
                id="risk_free_rate"
                onChange={(e) => setRiskFreeRate(e.target.value)}
                value={risk_free_rate} /><br />
              <label htmlFor="benchmark">Benchmark:</label><br />
              <input
                type="text"
                id="benchmark"
                value={benchmark}
                onChange={(e) => setBenchmark(e.target.value)}
                placeholder="single ticker to compare" /><br />
              <label htmlFor="mar">Mar:</label><br />
              <input
                type="text"
                id="mar"
                onChange={(e) => setMar(e.target.value)}
                value={mar} /><br /><br />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div class="column">
            {message && (
              <div>
                <p class="line-break">{message}</p>
              </div>
            )}
          </div>
          <div class="column">
            {image && (
              <div>
                <img src={`data:image/png;base64,${image}`}
                onChange={(e) => setImage(e.target.src)} />
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
