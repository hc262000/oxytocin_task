import React from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink ,Link} from "react-router-dom";
import {Spinner} from "react-bootstrap";
class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

 
  componentDidMount() {
    fetch("https://harshitiim.pythonanywhere.com/books/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
      
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
         <Spinner animation="border" />
        </div>
      );
    return (
      <>
        <div className="block">
          {items.map((item) => (
            <Card style={{ width: "18rem", padding: "10px", margin: "10px" }}>
              <Card.Img
                variant="top"
                src={`https://harshitiim.pythonanywhere.com${item.thumbnail}`}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {" "}
                  {item.author}
                </Card.Subtitle>
                <Card.Text>{item.summary}</Card.Text>
                
                <Link
                  to={{
                    pathname:`/${item.sno}`,
                  }}
                  className="btn btn-primary"
                  style={{ width:'100px',borderRadius:'10px',background:'green',border:'2px solid green'}}
                  key={item.sno}
                >
                  Read
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </>
    );
  }
}

export default Dashboard;
