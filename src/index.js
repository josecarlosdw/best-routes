import React, { Component } from "react";
import ReactDOM from "react-dom";

const Route = ({ Sigla, Price }) => (
  <li key={Sigla}>
    {Sigla}
    <input
      type="text"
      value={Price}
      onChange={e => onChange(i, parseInt(e.target.value) || 0)}
    />
  </li>
);

const BestRoutes = ({ minDistanceRoute, minPriceRoute }) => (
  <div>
    <p>Melhor Preço:</p>
    <Route {...minPriceRoute} />
    <p>Distancia mais Curta:</p>
    <Route {...minDistanceRoute} />
  </div>
);

class App extends Component {
  state = {
    routes: [
      { guarulhoserio: 1, Price: 10, Distance: 345, Sigla: "Guarulhos.Rio" },
      {
        guarulhosesantacatarina: 2,
        Price: 18,
        Distance: 547,
        Sigla: "Guarulhos.SantaCatarina"
      },
      { saopauloerio: 3, Price: 10, Distance: 357, Sigla: "SaoPaulo.Rio" },
      {
        minasgeraiserio: 4,
        Price: 75,
        Distance: 556,
        Sigla: "MinasGerais.Rio"
      },
      {
        minasgeraisesantacatarina: 5,
        Price: 20,
        Distance: 1180,
        Sigla: "MinasGerais.SantaCatarina"
      },
      {
        saopauloesantacatarina: 6,
        Price: 5,
        Distance: 512,
        Sigla: "SaoPaulo.SantaCatarina"
      }
    ]
  };

  calculateMinRoutes() {
    const minRoutesObj = this.state.routes.reduce((acc, obj) => {
      if (!acc.minPriceRoute || acc.minPriceRoute.Price > obj.Price) {
        acc.minPriceRoute = obj;
      }

      if (
        !acc.minDistanceRoute ||
        acc.minDistanceRoute.Distance > obj.Distance
      ) {
        acc.minDistanceRoute = obj;
      }

      return acc;
    }, {});

    return minRoutesObj || {};
  }

  render() {
    const minRoutesObj = this.calculateMinRoutes();
    return <BestRoutes {...minRoutesObj} />;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
