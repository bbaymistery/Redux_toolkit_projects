ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineCart = ({ hTimeStamps, hPrices, selectValue }) => {
  return (
    <div className="lineCart">
      <Line
        style={{ cursor: "pointer" }}
        data={{
          labels: hTimeStamps?.map((timestamp) => {
            let date = new Date(timestamp);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return selectValue === "3h" || selectValue === "24h"
              ? time
              : date.toLocaleDateString();
          }),
          datasets: [
            {
              label: `Prices in USD`,
              data: hPrices?.map((price) => price),
              borderColor: "black",
              backgroundColor: "red",
              borderWidth: 2,
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 4,
              backgroundColor: "red",
            },
          },

          layout: {
            padding: 10,
          },
        }}
      />
    </div>
  );
};

export default LineCart;
