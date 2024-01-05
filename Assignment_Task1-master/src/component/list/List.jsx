import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows,currency,timestamps,rowClick }) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
      {rows.map((row,index) => {
          const orderSubmittedData = timestamps.results.find((order) => order["&id"] === row["&id"]);
          return (
            <ListRow key={index}  onClick={() => {rowClick(row,orderSubmittedData);  }}>
              <ListRowCell>{row["&id"]}</ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              <ListRowCell>
                {orderSubmittedData ? orderSubmittedData.timestamps.orderSubmitted : "N/A"}
              </ListRowCell>
              <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
            </ListRow>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
